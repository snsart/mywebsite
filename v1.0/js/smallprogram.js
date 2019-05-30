window.onresize=function(){
	var width=window.innerWidth;
	
	if(width>1300){
		$("#mainbody").css("width","1300px");
		$("#playercont").css("width","75%");
		$("#sideba").css("width","25%");
	}else if(width>1100){
		$("#mainbody").css("width","1100px");
		$("#playercont").css("width","75%");
		$("#sideba").css("width","25%");
	}else{
		$("#mainbody").css("width","100%");
		$("#playercont").css("width","100%");
		$("#sideba").css("width","100%");
	}
}

var data=[];

var formdata=new FormData();
formdata.append('list','list');

$.ajax({
	url:"smallprogram.php",
	type:"post",
	data:formdata,
	//ajax2.0可以不用设置请求头，但是jq帮我们自动设置了，这样的话需要我们自己取消掉
    contentType:false,
    //取消帮我们格式化数据，是什么就是什么
    processData:false,
	success:function(data){
		handleData(JSON.parse(data));
	}
});


var clickable=true;
$("#love").click(function(e){
	if(!clickable){
		return;
	}else{
		clickable=false;
		setTimeout(function(){
			clickable=true;
		},5000);
	}
	
	var formdata=new FormData();
	var id=parseInt($(e.currentTarget).attr("data-id"));
	formdata.append("id",id);
	formdata.append("love","love");
	
	$.ajax({
		url:"smallprogram.php",
		type:"post",
		data:formdata,
		//ajax2.0可以不用设置请求头，但是jq帮我们自动设置了，这样的话需要我们自己取消掉
	    contentType:false,
	    //取消帮我们格式化数据，是什么就是什么
	    processData:false,
		success:function(data) {
			$("#pro-player .pro-info .like")[0].innerText="喜欢("+data+")";
		}
	})
})


function handleData(jsondata){
	data=[];
	for(var i=0;i<jsondata.length;i++){
		var obj={
			"id":jsondata[i].id,
			"index":i+1,
			"name":jsondata[i].name,
			"type":jsondata[i].type,
			"url":"admin/"+jsondata[i].url,
			"info":jsondata[i].brief,
			"tip":jsondata[i].tip,
			"publishdate":jsondata[i].date,
			"visits":jsondata[i].viewnum,
			"loves":jsondata[i].loves
		};
		data.push(obj);
	}
	renderlist(data);
	addEventToList();
	updatePlayer(data[0]);
}



//renderlist(data);

function renderlist(data){
	for(var i=0;i<data.length;i++){
		renderLi(data[i]);
	}
}

function renderLi(data){
	var prolistModel="<div class='pro-wrap'>"+
		"<a data-index="+data.index+ " data-url="+data.url+">"+
			"<div class='pro-index'>"+
				"<header>"+
					"<i class='fa fa-gears'></i>"+
					data.name+
				"</header>"+
				
				"<p class='info'>"+
					data.info+
				"</p>"+
			"</div>"+
		"</a>"+
	"</div>";
	
	$("#sideba").append(prolistModel);
}

function addEventToList(){
	var listBtns=$("#sideba a");
	for(var i=0;i<listBtns.length;i++){
		$(listBtns[i]).click(function(e){
			var index=parseInt($(e.currentTarget).attr("data-index"));
			updatePlayer(data[index-1]);
		});
	}
}

function updatePlayer(data){
	updateVisits(data.id)
	$($("iframe")[0]).attr("src",data.url);
	$("#pro-player .pro-info .title")[0].innerText=data.name;
	$("#pro-player .pro-info .publish")[0].innerText="发布日期："+data.publishdate;
	$("#pro-player .pro-info .visits")[0].innerText="访问("+data.visits+")";
	$("#pro-player .pro-info .like")[0].innerText="喜欢("+data.loves+")";
	$("#pro-player .pro-info .briefinfo")[0].innerText=data.info;
	$("#pro-player .pro-info .tip")[0].innerText=data.tip;
	$("#pro-player .pro-info #love").attr("data-id",data.id);
}

function updateVisits(id){
	var formdata=new FormData();
	formdata.append("id",id);
	formdata.append("visit","visit");
	console.log("visits");
	
	$.ajax({
		url:"smallprogram.php",
		type:"post",
		data:formdata,
		//ajax2.0可以不用设置请求头，但是jq帮我们自动设置了，这样的话需要我们自己取消掉
	    contentType:false,
	    //取消帮我们格式化数据，是什么就是什么
	    processData:false,
		success:function(data) {
			
		}
	})
}

/*全屏*/
var isFull=false;
addfullscreenEvent();
function addfullscreenEvent(){
	$("#fullscreen").click(function(){
		isFull=!isFull;
		if(isFull){
			console.log("dadada")
			fullScreenHandler();
		}else{
			console.log("xiaoxiao")
			initScreen();
		}	
	})
}


function fullScreenHandler(){
	$("#bottomframe").css("display","none");
	$("#showframe-full").css("display","block");
	var html=$("#showframe").html();
	$("#showframe-full").append(html);
	$("#showframe").empty();
	$("#showframe-full").css("width",innerWidth);
	$("#showframe-full").css("height",innerHeight);
	$($("#fullscreen span")[0]).removeClass();
	$($("#fullscreen span")[0]).addClass("fa fa-compress");
	addfullscreenEvent();
}

function initScreen(){
	$("#bottomframe").css("display","block");
	$("#showframe-full").css("display","none");
	var html=$("#showframe-full").html();
	$("#showframe").append(html);
	$("#showframe-full").empty();
	$($("#fullscreen span")[0]).removeClass();
	$($("#fullscreen span")[0]).addClass("fa fa-arrows-alt");
	addfullscreenEvent();
}

