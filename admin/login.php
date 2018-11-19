<?php
require_once('startsession.php');
require_once('connectvars.php');
$error_msg="";
if(!isset($_SESSION['user_id'])){
	if(isset($_POST['submit'])){
		$dbc=mysqli_connect(DB_HOST,DB_USER,DB_PASSWORD,DB_NAME) or die("数据库链接失败");
		$user_username=mysqli_real_escape_string($dbc,trim($_POST['username']));
		$user_password=mysqli_real_escape_string($dbc,trim($_POST['password']));
		if(!empty($user_username)&&!empty($user_password)){
			$query="select user_id,user_name from user where user_name='$user_username' and password=SHA('$user_password')";
			$data=mysqli_query($dbc,$query);
			
			if(mysqli_num_rows($data)==1){
				$row=mysqli_fetch_array($data);
				$_SESSION['user_id']=$row['user_id'];
				$_SESSION['username']=$row['username'];
				setcookie('user_id',$row['user_id'],time()+60*60*24*30);
				setcookie('username',$row['username'],time()+60*60*24*30);
				$home_url='http://'.$_SERVER['HTTP_HOST'].dirname($_SERVER['PHP_SELF']).'/index.php';
				header('Location:'.$home_url);
			}else{
				$error_msg="请输入正确的用户名和密码";
			}
		}else{
			$error_msg="请输入用户名和密码";
		}
	}
}
?>

<!DOCTYPE html>
<html>
	<head>
		<meta charset="UTF-8">
		<title>个人网站后台管理系统设计</title>
		<link rel="stylesheet" href="css/login.css" type="text/css"/>
	</head>
	<body>
		<div id="login-content">
			<header>
				<p>snsart个人网站后台登录</p>
			</header>
			<div class="login-body">
				<?php
					if(empty($_SESSION['user_id'])){
						echo '<p class="error">'.$error_msg.'</p>';	
				?>	
				
				<form method="post" action="<?php echo $_SERVER['PHP_SELF']; ?>">
					
					<label for="username">用户名：</label>
					<input type="text" id="username" name="username" value="<?php if(!empty($username)) echo $username; ?>"/><br/>
					<label for="password">密&nbsp;&nbsp;&nbsp;码：</label>
					<input type="password" id="password" name="password"/><br/>
					<div class="submit">
						<input type="submit" value="登录" name="submit" />
					</div>
				</form>
				
				<?php
				}else{
					echo '<p class="login">你已经登录：'.$_SESSION['username'].'.</p>';
				}
				?>
			</div>
		</div>
		
	</body>
</html>