<?php
/*功能：从数据库取数据，输出json数据*/

$dbc=mysqli_connect(DB_HOST,DB_USER,DB_PASSWORD,DB_NAME);
$query="select * from project";		
$data=mysqli_query($dbc,$query) or die("数据查询失败");
$jsondata={}
while($row=mysqli_fetch_array($data)){
}



?>