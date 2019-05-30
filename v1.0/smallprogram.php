<?php
require_once('connectvars.php');
/*功能：从数据库取数据，输出json数据*/


if(isset($_POST['id'])){
	$id=$_POST['id'];
}
if(isset($_POST['list'])){
	$list=$_POST['list'];
}

if(isset($_POST['love'])){
	$love=$_POST['love'];
}

if(isset($_POST['visit'])){
	$visit=$_POST['visit'];
}

$dbc=mysqli_connect(DB_HOST,DB_USER,DB_PASSWORD,DB_NAME);

/*项目列表*/
if(!empty($list)){
	$query="select * from project";		
	$data=mysqli_query($dbc,$query) or die("数据查询失败");
	
	$jarr = array();
	while($row=mysqli_fetch_array($data)){
		$count=count($row);//不能在循环语句中，由于每次删除 row数组长度都减小  
	    for($i=0;$i<$count;$i++){  
	        unset($row[$i]);//删除冗余数据  
	    }
		array_push($jarr,$row);
	}
	
	$str=json_encode($jarr);
	echo $str; 
}

/*点赞数*/
if(!empty($id)&&!empty($love)){
	$query="select loves from project where id='$id'";
	$data=mysqli_query($dbc,$query) or die("数据更新失败"); 
	if(mysqli_num_rows($data)==1){
		$row=mysqli_fetch_array($data);
		$loves=$row['loves'];
	}
	$loves+=1;
	echo $loves;
	$query="update project set loves='$loves' where id='$id'" ;
	mysqli_query($dbc,$query) or die("数据更新失败");
}


/*访问数*/
if(!empty($id)&&!empty($visit)){
	$query="select viewnum from project where id='$id'";
	$data=mysqli_query($dbc,$query) or die("数据更新失败"); 
	if(mysqli_num_rows($data)==1){
		$row=mysqli_fetch_array($data);
		$visits=$row['viewnum'];
	}
	$visits+=1;
	echo $visits;
	$query="update project set viewnum='$visits' where id='$id'" ;
	mysqli_query($dbc,$query) or die("数据更新失败");
}

mysqli_close($dbc);

?>