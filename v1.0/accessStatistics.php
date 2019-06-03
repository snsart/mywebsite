<?php
/*功能
 * 统计各页面的日访问量，和总访问量
 * 获取访问页面
 * 1.通过页面和日期查找数据库
 * 2.找到：更新数据
 * 3.未找到：添加数据
 * 
 * */


require_once('connectvars.php');
/*$page=$_POST['page'];
if(empty($page)){
	exit();
}*/
date_default_timezone_set("Asia/Shanghai");
$date=date("Y/m/d");

$page=$_POST["page"];
echo $page;

$dbc=mysqli_connect(DB_HOST,DB_USER,DB_PASSWORD,DB_NAME);
$query="select * from statistics where page='$page' And date='$date' ";	
$data=mysqli_query($dbc,$query) or die("数据查询失败");
$num=mysqli_num_rows($data);

if($num>0){
	
	$query="update statistics set dayvisits =(dayvisits+1) where page='$page' And date='$date' ";
	mysqli_query($dbc,$query) or die("数据更新失败");
	$query="update statistics set totalvisits =(totalvisits+1) where page='$page' And date='$date' ";
	mysqli_query($dbc,$query) or die("数据更新失败");
	echo "hehe";
}else{
	$query="select totalvisits from statistics where page='$page' order by id desc";	
	$data=mysqli_query($dbc,$query) or die("数据查询失败");
	if(mysqli_num_rows($data)>0){
		$row=mysqli_fetch_array($data);
		$totalvisits=$row["totalvisits"];
		echo $totalvisits;
		$query="insert into statistics(page,date,totalvisits) values('$page','$date','$totalvisits')";	
		mysqli_query($dbc,$query) or die("数据更新失败");
	}else{
		$query="insert into statistics(page,date) values('$page','$date')";	
		mysqli_query($dbc,$query) or die("数据更新失败");
	}
}

mysqli_close($dbc);


?>