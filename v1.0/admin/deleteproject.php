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
	
	$id=$_POST['id'];
	$dbc=mysqli_connect(DB_HOST,DB_USER,DB_PASSWORD,DB_NAME);
	$query="select * from project where id='$id' and user_id='$user_id'";		
	$data=mysqli_query($dbc,$query) or die("数据查询失败");
	if(mysqli_num_rows($data)==1){
		$row=mysqli_fetch_array($data);
		$file=$row['url'];
		$thumbnail=$row['thumbnail'];
		$homeImg=$row['homeImg'];
		
		deldir($file);
		@unlink($thumbnail);
		@unlink($homeImg);
	}
	$query2="delete from project where id='$id' and user_id='$user_id'";	
	mysqli_query($dbc,$query2) or die("数据删除失败");			
	mysqli_close($dbc);	
	
	function deldir($dir) {  
	    //先删除目录下的文件：  
	    $dh = opendir($dir);  
	    while ($file = readdir($dh)) {  
	        if($file != "." && $file!="..") {  
		        $fullpath = $dir."/".$file;  
		        if(!is_dir($fullpath)) {  
		            unlink($fullpath);  
		        } else {  
		            deldir($fullpath);  
		        }  
	        }  
	    }  
	    closedir($dh);  
	       
	    //删除当前文件夹：  
	    if(rmdir($dir)) {  
	        return true;  
	    } else {  
	        return false;  
	    }  
	}
?>