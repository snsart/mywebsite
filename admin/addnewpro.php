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
<div class="pro-add project">
	<header>
		<h3><a class="btn back-prolist">项目</a>&gt;添加项目</h3>
	</header>
	<div>
		<form method="post" id="fm" name="fm" enctype="multipart/form-data" >
			<p><label for="proname">项目名称:</label><input id="proname" name="proname" /></p>
			<p><label for="protype">项目类型:</label>
				<select id="protype" name="protype" >
					<option value="game" label="游戏">游戏</option>
					<option value="app" label="应用程序">应用程序</option>
				</select>
			</p>
			<p><label for="password">访问密码:</label><input id="password" type="password" name="password" /></p>
			<p><label for="brief">游戏说明:</label><textarea id="brief" name="brief" cols="60" rows="5"></textarea></p>
			<p><label for="tip">游戏提示:</label><textarea id="tip" name="tip" cols="60" rows="5"></textarea></p>
			<p><label for="proupload">上传游戏:</label><input type="file" id="proupload" name="proupload" /></p>
			<p><label for="thumbnail">缩略图:</label><input type="file" id="thumbnail" name="thumbnail" /></p>
			<p>
				<fieldset>
					<legend>首页推荐</legend>
					选择首页推荐
					<input type="checkbox" id="push" name="push"/>
					<p id="pushimg"><label for="homeimg">首页推广图:</label><input type="file" id="homeimg" name="homeimg" /></p>
				</fieldset>
			</p>
			<hr>
			<p class="tips"><p>
			<input id="submitpro" type="button" value="添加项目" name="submit"/>
			<input id="backprolist-btn" type="button" value="返回列表" name="submit"/>
		</form>
	</div>
	<script>
		$("#pushimg").css("display","none");
		$("#backprolist-btn").css("display","none");
		
		$("#push").click(function(e){
			var check=document.getElementById("push");
			if(check.checked){
				$("#pushimg").css("display","block");
			}else{
				$("#pushimg").css("display","none");
			}
		})
		
		$($(".pro-add .back-prolist")[0]).click(function(){
			$.get("prolist.php",function(data){
				$($(".propage .pro-game")[0]).html(data);
			})
		})
		
		$($("#backprolist-btn")[0]).click(function(){
			$.get("prolist.php",function(data){
				$($(".propage .pro-game")[0]).html(data);
			})
		})
		
		$("#submitpro").click(function(){
			var formdata=new FormData(document.getElementById("fm"));
			
			$.ajax({
				type:"post",
				url:"addproject.php",
				async:true,
				data:formdata,
				contentType:false,
				processData:false,//重要，传输文件必须设置为false
				success:function(data){
					$($("#fm .tips")[0]).html(data);
					if(data="上传成功"){
						$("#backprolist-btn").css("display","block");
						$("#submitpro").css("display","none");
					}
				}
			});
		})
		
	</script>
</div>