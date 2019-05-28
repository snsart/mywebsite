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

var data=[
	{
		"id":1,
		"name":"模拟光的反射111",
		"type":"game",
		"url":"https://www.baidu.com",
		"info":"这是一个说明111...",
		"tips":"拖动鼠标111",
		"publishdate":"20190503",
		"visits":10,
		"loves":5
	},
	{
		"id":2,
		"name":"巨人与鬼222",
		"type":"game",
		"url":"dfdf",
		"info":"这是一个说明22...",
		"tips":"拖动鼠标22",
		"publishdate":"20190503",
		"visits":20,
		"loves":5
	},
	{
		"id":3,
		"name":"切割图形333",
		"type":"game",
		"url":"",
		"info":"这是一个说明333...",
		"tips":"拖动鼠标3",
		"publishdate":"20190503",
		"visits":20,
		"loves":5
	},
	{
		"id":4,
		"name":"凸包算法的应用444",
		"type":"game",
		"url":"",
		"info":"这是一个说明44..",
		"tips":"拖动鼠标44",
		"publishdate":"20190503",
		"visits":20,
		"loves":5
	}
];

renderlist(data);

function renderlist(data){
	for(var i=0;i<data.length;i++){
		renderLi(data[i]);
	}
}

function renderLi(data){
	var prolistModel="<div class='pro-wrap'>"+
		"<a data-id="+data.id+ " data-url="+data.url+">"+
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
			var url=$(e.currentTarget).attr("data-url");
			var id=parseInt($(e.currentTarget).attr("data-id"));
			$($("#pro-player iframe")[0]).attr("src",url);
			updatePlayer(data[id-1]);
		});
	}
}

function updatePlayer(data){
	$("#pro-player .pro-info .title")[0].innerText=data.name;
	$("#pro-player .pro-info .publish")[0].innerText="发布日期："+data.publishdate;
	$("#pro-player .pro-info .visits")[0].innerText="访问("+data.visits+")";
	$("#pro-player .pro-info .like")[0].innerText="喜欢("+data.loves+")";
	$("#pro-player .pro-info .briefinfo")[0].innerText=data.info;
	$("#pro-player .pro-info .tip").innerText=data.tips;
	console.log($("#pro-player .pro-info .publish")[0])
}

