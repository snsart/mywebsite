window.onload=function(){
	
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

