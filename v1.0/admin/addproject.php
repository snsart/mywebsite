<?php
	require_once('startsession.php');
	if(!isset($_SESSION['user_id'])){
		require_once('login.php');
		exit();
	}else{
		$user_id=$_SESSION['user_id'];
	}
	require_once('appvars.php');
	require_once('connectvars.php');
	
	$message="";
	
	$name=$_POST['proname'];
	$type=$_POST['protype'];
	$brief=$_POST['brief'];
	$tip=$_POST['tip'];
	$password=$_POST["password"];
	
	$profile_name=$_FILES['proupload']['name'];
	$profile_type=$_FILES['proupload']['type'];
	$profile_size=$_FILES['proupload']['size'];
	
	$thumbnail_name=$_FILES['thumbnail']['name'];
	$thumbnail_type=$_FILES['thumbnail']['type'];
	$thumbnail_size=$_FILES['thumbnail']['size'];
	
	if(isset($_POST["push"])){
		$ispush=1;
		$homeimg_name=$_FILES['homeimg']['name'];
		$homeimg_type=$_FILES['homeimg']['type'];
		$homeimg_size=$_FILES['homeimg']['size'];
	}else{
		$ispush=0;
		$homeimg=null;
	}
	
	if(empty($name)){
		$message="请输入项目名称";
		echo $message;
		exit();
	}
	
	if(empty($type)){
		$message="请输入项目类型";
		echo $message;
		exit();
	}
	
	if(!empty($profile_name)){
		if($profile_type=='application/zip'){
			if($_FILES['proupload']['error']==0){
				if($type=="game"){
					$target=SNS_GAME_UPLOADPATH.time().$profile_name;
				}else{
					$target=SNS_APP_UPLOADPATH.time().$profile_name;
				}
				move_uploaded_file($_FILES['proupload']['tmp_name'],$target);
				$zip = new ZipArchive;
				if ($zip->open($target) ===TRUE)
				{
					$url=substr($target,0,-4);
					$zip->extractTo($url);
					$zip->close();
					@unlink($target);
				}
			}else{
				$message="文件上传错误";
				echo $message;
				exit();
			}
		}else{
			$message="项目必须使用.zip格式";
			echo $message;
			exit();
		}
		@unlink($_FILES['proupload']['tmp_name']);
	}else{
		$message="请选择要上传的文件";
		echo $message;
		exit();
	}
	
	//上传图片文件
	if(!empty($thumbnail_name)){
		if($thumbnail_type=='image/png'||$thumbnail_type=='image/jpg'||$thumbnail_type=='image/jpeg'){
			if($_FILES['thumbnail']['error']==0){
				$target=SNS_PROIMG_UPLOADPATH.time().$thumbnail_name;
				$thumbnail=$target;
				move_uploaded_file($_FILES['thumbnail']['tmp_name'],$target);	
			}else{
				$message="文件上传错误";
				echo $message;
				exit();
			}
		}else{
			$message="图像必须使用png/jpg/jpeg格式";
			echo $message;
			exit();
		}
		@unlink($_FILES['thumbnail']['tmp_name']);
	}else{
		$message="请选择要上传的文件";
		echo $message;
		exit();
	}
	
	if(isset($_POST["push"])){
		if(!empty($homeimg_name)){
			if($homeimg_type=='image/png'||$homeimg_type=='image/jpg'||$homeimg_type=='image/jpeg'){
				if($_FILES['homeimg']['error']==0){
					$target=SNS_PROIMG_UPLOADPATH.time().$homeimg_name;
					$homeimg=$target;
					move_uploaded_file($_FILES['homeimg']['tmp_name'],$target);	
				}else{
					$message="文件上传错误";
					echo $message;
					exit();
				}
			}else{
				$message="图像必须使用png/jpg/jpeg格式";
				echo $message;
				exit();
			}
			@unlink($_FILES['homeimg']['tmp_name']);
		}
	}
	
	
	
	$dbc=mysqli_connect(DB_HOST,DB_USER,DB_PASSWORD,DB_NAME);
	$query="insert into project(name,type,user_id,password,brief,tip,url,date,thumbnail,pushhome,homeImg)".
			"values('$name','$type','$user_id',SHA('$password'),'$brief','$tip','$url',NOW(),'$thumbnail','$ispush','$homeimg')";
			
	mysqli_query($dbc,$query) or die("数据更新失败");
				
	echo '上传成功';
	mysqli_close($dbc);
		
?>