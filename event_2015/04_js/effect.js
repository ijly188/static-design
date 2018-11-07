$(document).ready(function()
{
	$("#menubtn_1").css({"background-image":"url(02_img/page/menu_m.png)","background-position":"0px 0px"});
	$("#item_wrap_1").css({"display":"block"});
	
	$("#menubtn_1").click(function(){
		$(".topmenubtn").css({"background-image":""});
		$("#menubtn_1").css({"background-image":"url(02_img/page/menu_m.png)","background-position":"0px 0px"});
		$(".item_wrap").css({"display":"none"});
		$("#item_wrap_1").css({"display":"block"});
	});
	$("#menubtn_2").click(function(){
		$(".topmenubtn").css({"background-image":""});
		$("#menubtn_2").css({"background-image":"url(02_img/page/menu_m.png)","background-position":"-246px 0px"});
		$(".item_wrap").css({"display":"none"});
		$("#item_wrap_2").css({"display":"block"});
	});
	$("#menubtn_3").click(function(){
		$(".topmenubtn").css({"background-image":""});
		$("#menubtn_3").css({"background-image":"url(02_img/page/menu_m.png)","background-position":"-492px 0px"});
		$(".item_wrap").css({"display":"none"});
		$("#item_wrap_3").css({"display":"block"});
	});
	$("#menubtn_4").click(function(){
		$(".topmenubtn").css({"background-image":""});
		$("#menubtn_4").css({"background-image":"url(02_img/page/menu_m.png)","background-position":"-738px 0px"});
		$(".item_wrap").css({"display":"none"});
		$("#item_wrap_4").css({"display":"block"});
	});
});