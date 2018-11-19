<?php
	require_once('header.php');
?>

			<div id="mainbody">
				<div class="content">
					<div class="bloglist-head">
						<h1 class="title">博文目录<span class="blog-nums">(共25篇)</span><h1>
					</div>
					<div class="bloglist-body">
						<ul>
							<li class="blog-info">
								<h3 class="blog-title">祖先的故事</h3>
								<span class="publish-time">2018-10-15 13:20</span>
								<span class="read-info">(5/102)</span>
							</li>
							<li class="blog-info">
								<h3 class="blog-title">深入理解计算机系统</h3>
								<span class="publish-time">2018-10-15 13:20</span>
								<span class="read-info">(5/102)</span>
							</li>
							<li class="blog-info">
								<h3 class="blog-title">html权威指南</h3>
								<span class="publish-time">2018-10-15 13:20</span>
								<span class="read-info">(5/102)</span>
							</li>
							<li class="blog-info">
								<h3 class="blog-title">如果累了你就歇歇吧</h3>
								<span class="publish-time">2018-10-15 13:20</span>
								<span class="read-info">(5/102)</span>
							</li>
						</ul>
					</div>
					<div class="bloglist-pages-index">
						<ul class="page-num-list">
							<li class="page-num">1</li>
							<li class="page-num">2</li>
							<li class="page-num">3</li>
							<li class="page-num">4</li>
							<li class="page-num">5</li>
							<li class="page-num">6</li>
						</ul>
					</div>
				</div>
			</div>
			
<script>
	$($("#header li.current")[0]).removeClass("current");
	$($("#header .head-blog")[0]).addClass("current");
</script>
<?php
	require_once('footer.php');
?>