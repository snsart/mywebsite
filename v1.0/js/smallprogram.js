window.onload=function(){
	var formdata=new FormData();
	formdata.append('page','smallprogram');
	
	$.ajax({
		url:"accessStatistics.php",
		type:"post",
		data:formdata,
	    contentType:false,
	    processData:false,
		success:function(data){
			console.log(data);
		}
	});
}


var data=[];

var formdata=new FormData();
formdata.append('list','list');

$.ajax({
	url:"smallprogram.php",
	type:"post",
	data:formdata,
    contentType:false,
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
	    contentType:false,
	    processData:false,
		success:function(data) {
			$("#player .like")[0].innerText="喜欢("+data+")";
		}
	})
})


function handleData(jsondata){
	data=[];
	for(var i=0;i<jsondata.length;i++){
		var obj={
			"id":jsondata[i].id,
			"index":i,
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
	
	let index=getQueryStringArgs().id;
	if(index){
		updatePlayer(data[index]);
	}else{
		updatePlayer(data[0]);
	}
}



//renderlist(data);

function renderlist(data){
	for(var i=0;i<data.length;i++){
		renderLi(data[i]);
	}
}

function renderLi(data){
	
	var	info=data.info.length>20?data.info.substr(0,20)+"...":data.info;
	var prolistModel="<li>"+
				"<header>"+
					"<a data-index="+data.index+ " data-url="+data.url+">"+
						"<h3><i class='fa fa-gears'></i>"+data.name+"</h3>"+
					"</a>"+
				"</header>"+
				
				"<p class='info'>"+
					info+
				"</p>"+
	"</li>";
	
	$("#pro-list").append(prolistModel);
}

function addEventToList(){
	var listBtns=$("#pro-list a");
	for(var i=0;i<listBtns.length;i++){
		$(listBtns[i]).click(function(e){
			var index=parseInt($(e.currentTarget).attr("data-index"));
			location.search="?id="+index;
		});
	}
}

/*播放器切换内容*/
function updatePlayer(data){
	updateVisits(data.id)
	$($("iframe")[0]).attr("src",data.url);
	$("#player .title")[0].innerText=data.name;
	$("#player .publish")[0].innerText="发布日期："+data.publishdate;
	$("#player .visits")[0].innerText="访问("+data.visits+")";
	$("#player .like")[0].innerText="喜欢("+data.loves+")";
	$("#player .briefinfo")[0].innerText=data.info;
	$("#player .tip")[0].innerText=data.tip;
	$("#player #love").attr("data-id",data.id);
}

//更新访问数量

function updateVisits(id){
	var formdata=new FormData();
	formdata.append("id",id);
	formdata.append("visit","visit");
	
	$.ajax({
		url:"smallprogram.php",
		type:"post",
		data:formdata,
	    contentType:false,
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
			fullScreenHandler();
		}else{
			initScreen();
		}	
	})
}


function fullScreenHandler(){
	$("#mainframe").css("display","none");
	$("#showframe-full").css("display","block");
	var html=$("#showframe").html();
	$("#showframe-full").append(html);
	$("#showframe").empty();
	$($("#fullscreen span")[0]).removeClass();
	$($("#fullscreen span")[0]).addClass("fa fa-compress");
	addfullscreenEvent();
}

function initScreen(){
	$("#mainframe").css("display","block");
	$("#showframe-full").css("display","none");
	var html=$("#showframe-full").html();
	$("#showframe").append(html);
	$("#showframe-full").empty();
	$($("#fullscreen span")[0]).removeClass();
	$($("#fullscreen span")[0]).addClass("fa fa-arrows-alt");
	addfullscreenEvent();
}

/*查询字符串参数*/
function getQueryStringArgs(){
	var qs=(location.search.length>0?location.search.substring(1):""),
	args={},
	items=qs.length?qs.split("&"):[],
	item=null,
	name=null,
	value=null,
	i=0,
	len=items.length;
	for(i=0;i<len;i++){
		item=items[i].split("=");
		name=decodeURIComponent(item[0]);
		value=decodeURIComponent(item[1]);
		if(name.length){
			args[name]=value;
		}
	}
	return args;
}

