<?php
	require_once('header.php');
	require_once('connectvars.php');
?>
			
	<div id="pro-player">
		<div class="player-wraper">
			<div class="content">
				<div class="close">
					<span class="fa fa-times-circle fa-3x "></span>
				</div>
				
				<div class="showframe">
					<iframe></iframe>
				</div>
				<div class="pro-info">
					<header class="head">巨人与鬼</header>
					<div class="brief">
						<p>一组n个巨人正与n个鬼进行战斗,每个巨人的武器是一个质子炮, 它可以把一串质子流射中鬼而把鬼消灭。质子流沿直线行进,在击中鬼时就终止。巨人决定采取下述策略。他们寻找鬼配对,以形成n个巨人─鬼对,。然后每个巨人同时向他选取的鬼射出一串质子流。我们知道,让质子流互相交叉是很危险的。因此巨人选择的配对方式应该使质子流都不会交叉。假定每个巨人和每个鬼的位置都是平面上的一个固定点,并且没有三个位置共线, 求一种配对方案。</p>
					</div>
				</div>
			</div>
		</div>
	</div>


	<div id="mainbody">
		<div class="content">
			<div class="pro-nav-cont">
				<ul id="pro-nav">
					<a><li class="btn game-nav selected fl">游戏</li></a>
					<a><li class="btn program-nav fl">小程序</li></a>
					<a><li class="btn animate-program-nav fl">动画编程</li></a>
				</ul>
			</div>	
		</div>
		
		<div class="promenu">
			<div class="content pro">
				<ul class="promenu-list game mid">
					<?php
						$dbc=mysqli_connect(DB_HOST,DB_USER,DB_PASSWORD,DB_NAME);
						$query="select * from project";		
						$data=mysqli_query($dbc,$query) or die("数据查询失败");
						while($row=mysqli_fetch_array($data)){
							if($row['type']=="game"){
					?>		
							<li>	
								<a href=<?php echo "admin/".$row['url']."/index.html" ?> target="_blank">
								<div class="promenu-content">
									<p><img class="thumbnail" src=<?php echo "admin/".$row['thumbnail'].""?> /></p>
									<div class="pro-info">
										<p class="pro-title"><?php echo $row['name'] ?></p>
										<p class="pro-brief"><?php echo $row['brief'] ?></p>
										<p class="other-info">
											<span><strong>发布日期：</strong><?php echo $row['date'] ?></span>
											<span class="view-num fr" ><strong>预览：</strong><?php echo $row['viewnum'] ?></span>
										</p>
									</div>
								</div>
								</a>
							</li>	
					<?php
							}
						}
					?>
				</ul>
				
				<ul class="promenu-list program right">
					<?php
						$query="select * from project";		
						$data=mysqli_query($dbc,$query) or die("数据查询失败");
						while($row=mysqli_fetch_array($data)){
							if($row['type']!="game"){
					?>		
							<li>	
								<a class="programbtn" data-url=<?php echo "admin/".$row['url']."/index.html"?>>
									<div class="promenu-content">
										<p><img class="thumbnail" src=<?php echo "admin/".$row['thumbnail'].""?> /></p>
										<div class="pro-info">
											<p class="pro-title"><?php echo $row['name'] ?></p>
											<p class="pro-brief"><?php echo $row['brief'] ?></p>
											<p class="other-info">
												<span><strong>发布日期：</strong><?php echo $row['date'] ?></span>
												<span class="view-num fr" ><strong>预览：</strong><?php echo $row['viewnum'] ?></span>
											</p>
										</div>
									</div>
								</a>
							</li>	
					<?php
							}
						}
					?>
				</ul>
				
				<ul class="promenu-list animate-program right">
					<li>
						<div class="promenu-content">
							<p><img src="img/titleimg.jpg"/></p>
							<div class="pro-info">
								<p class="pro-title">巨人与鬼</p>
								<p class="pro-brief">简介：有n个巨人和n个鬼在一起,巨人发出质子流，要求质子流不能出现交叉火力...</p>
								<p class="other-info">
									<span><strong>发布日期：</strong>2018-10-31 </span>
									<span class="view-num fr" ><strong>预览：</strong>105</span>
								</p>
							</div>
						</div>
					</li>
				</ul>
									
			</div>
		</div>
		
	</div>
	
	<script>
		$($("#header li.current")[0]).removeClass("current");
		$($("#header .head-project")[0]).addClass("current");
	</script>
	
	<script>
		
	var game=$(".promenu-list.game")[0];
	var program=$(".promenu-list.program")[0];
	var animateProgram=$(".promenu-list.animate-program")[0];
	var height=$(game).css("height");
	$(".content.pro").css("height",height);
	
	$("#pro-nav").click(function(e){
		var prolist;
		var clickNav=e.target;
		if(!$(clickNav).hasClass("btn")){
			return;
		}
		
		/*切换标题*/
		$($("#pro-nav .selected")[0]).removeClass("selected");
		$(clickNav).addClass("selected");
		
		/*切换内容*/
		if($(clickNav).hasClass("game-nav")){
			prolist=game;
			$(game).attr("class","promenu-list game mid");
			$(program).attr("class","promenu-list program right");
			$(animateProgram).attr("class","promenu-list animate-program right");
			
		}else if($(clickNav).hasClass("program-nav")){
			prolist=program;
			$(game).attr("class","promenu-list game left");
			$(program).attr("class","promenu-list program mid");
			$(animateProgram).attr("class","promenu-list animate-program right");
		}else if($(clickNav).hasClass("animate-program-nav")){
			prolist=animateProgram;
			$(game).attr("class","promenu-list game left");
			$(program).attr("class","promenu-list program left");
			$(animateProgram).attr("class","promenu-list animate-program mid");
		};
		
		/*根据内容设置容器高度*/
		var height=$(prolist).css("height");
		$(".content.pro").css("height",height);
	})
	
	var programBtns=$(".programbtn");
	for(var i=0;i<programBtns.length;i++){
		$(programBtns[i]).click(function(e){
			var url=$(e.currentTarget).attr("data-url");
			$("#pro-player").css("display","block");
			//window.location=url;
			$($("#pro-player iframe")[0]).attr("src",url);
		});
	}
	
	$("#pro-player .close").click(function(){
		$("#pro-player").css("display","none");
		$($("#pro-player iframe")[0]).removeAttr("src");
	})

</script>	
			
<?php
	require_once('footer.php');
?>