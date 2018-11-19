<?php
	require_once('header.php');
	require_once('connectvars.php');
?>

<div id="mainbody">
	<div class="show-pro">
		<div class="content">
			<?php
				$dbc=mysqli_connect(DB_HOST,DB_USER,DB_PASSWORD,DB_NAME);
				$query="select * from project where pushhome=1 and type='game'";		
				$data=mysqli_query($dbc,$query) or die("数据查询失败");
				if(mysqli_num_rows($data)>0){
					while($row=mysqli_fetch_array($data)){
			?>				
						<label class="type">游戏</label>
						<div class="show-head">
							<strong><?php echo $row['name'] ?></strong>
						</div>
						<div class="show-pro-intro">
							<p><?php echo $row['brief'] ?></p>
						</div>
						<div class="show-pro">
							<iframe src=<?php echo "admin/".$row['url']."/index.html"?>></iframe>
						</div>
			<?php
					}
				}
			?>
		</div>
	</div>
	
	<div class="show-blog">
		<div class="content">
			<label class="type">博客</label>
			<div class="show-head">
				<strong>凸包算法的应用</strong>
			</div>
			<div class="show-blog-intro">
				<p>不久就做的无聊了，又回归做系统表单神马的，前后都做，蹭蹭蹭一周出来一两套也算不错了各种验证和数据联调不久就做的无聊了，又回归做系统表单神马的，前后都做，蹭蹭蹭一周出来一两套也算不错了各种验证和数据联调</p>
			</div>
			<div class="show-blog-pic">
				<img src="img/test.jpg"></img>
			</div>	
		</div>	
	</div>
</div>

<script>
	$($("#header li.current")[0]).removeClass("current");
	$($("#header .head-index")[0]).addClass("current");
</script>

<?php
	require_once('footer.php');
?>			

