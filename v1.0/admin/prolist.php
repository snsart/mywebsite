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
?>

<div class="pro-list game">
	<table>
		<thead>
			<tr>
				<th>id</th>
				<th>名称</th>
				<th>类型</th>
				<th>浏览量</th>
				<th>首页推送</th>
				<th>发布日期</th>
				<th>编辑</th>
				<th>删除</th>
			</tr>
		</thead>
		<tbody>
			<?php
				$dbc=mysqli_connect(DB_HOST,DB_USER,DB_PASSWORD,DB_NAME);
				$query="select * from project where user_id='$user_id'";		
				$data=mysqli_query($dbc,$query) or die("数据查询失败");
				$id=1;
				while($row=mysqli_fetch_array($data)){
			?>
					<tr>
						<td><?php echo $id?></td>
						<td><?php echo $row['name']?></td>
						<td><?php echo $row['type']?></td>
						<td><?php echo $row['viewnum']?></td>
						<td><?php echo $row['pushhome']==0?'否':'是'?></td>
						<td><?php echo $row['date']?></td>
						<td><a class="proedit btn" data-id=<?php echo $row['id']?>>编辑</a></td>
						<td><a class="prodelete btn" data-id=<?php echo $row['id']?>>删除</a></td>
					</tr>
			<?php
					$id++;
				}
			?>
		</tbody>
	</table>
	<hr>
	<button class="addnewpro">添加新游戏</button>
	<script>
		$($(".pro-list .addnewpro")[0]).click("click",function(){
			$.get("addnewpro.php",function(data){
				$($(".propage .pro-game")[0]).html(data);
			})
		})
		
		var editBtns=$(".proedit.btn");
		for(var i=0;i<editBtns.length;i++){
			$(editBtns[i]).click("click",function(e){
				var id=$(e.target).attr("data-id");
				$.post("editpropage.php",{id:id},function(data){
					$($(".propage .pro-game")[0]).html(data);
				})
			});
		}
		
		var deleteBtns=$(".prodelete.btn");
		for(var i=0;i<editBtns.length;i++){
			$(deleteBtns[i]).click("click",function(e){
				
				var confired=window.confirm("你确定删除这个项目吗？");
				if(confired){
					var id=$(e.target).attr("data-id");
					$($($(e.target).parent()).parent()).remove();
					$.post("deleteproject.php",{id:id},function(data){
						console.log(data);
					})
				}
			});
		}
		
	</script>
</div>