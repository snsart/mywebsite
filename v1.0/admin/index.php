<?php
	require_once('startsession.php');
	if(!isset($_SESSION['user_id'])){
		require_once('login.php');
		exit();
	}else{
		$user_id=$_SESSION['user_id'];
	}
	require_once('header.php');
	require_once('leftnav.php');
?>

<div id="right-content">
	
</div>

<?php
	require_once('footer.php')
?>
				
				

