window.onload=function(){
	var formdata=new FormData();
	formdata.append('page','index');
	
	$.ajax({
		url:"accessStatistics.php",
		type:"post",
		data:formdata,
		//ajax2.0可以不用设置请求头，但是jq帮我们自动设置了，这样的话需要我们自己取消掉
	    contentType:false,
	    //取消帮我们格式化数据，是什么就是什么
	    processData:false,
		success:function(data){
			console.log(data);
		}
	});
}

window.onresize=function(){
	var width=window.innerWidth;
	
	if(width>1300){
		$("#mainbody").css("width","1300px");
		$("#left").css("width","50%");
		$("#right").css("width","50%");
	}else if(width>1100){
		$("#mainbody").css("width","1100px");
		$("#left").css("width","50%");
		$("#right").css("width","50%");
	}else{
		console.log("hah")
		$("#mainbody").css("width","100%");
		$("#left").css("width","100%");
		$("#right").css("width","100%");
	}
}

