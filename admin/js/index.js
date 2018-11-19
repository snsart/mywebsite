$("#leftnav .navlist")[0].addEventListener("click",function(e){
	var btn=e.target;
	$($("#leftnav .select")[0]).removeClass("select");
	$(btn).addClass("select");
	var url=$(btn).attr("data-url")+".php";
	var httpRequest=new XMLHttpRequest();
	httpRequest.onreadystatechange=handleResponse;
	httpRequest.open("GET",url);
	httpRequest.send();
})

function handleResponse(e){
	if(e.target.readyState==XMLHttpRequest.DONE&&e.target.status==200){
		$("#right-content").html(e.target.responseText);
	}
}

