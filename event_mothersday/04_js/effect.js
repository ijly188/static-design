var boxih = 0.8 * $(window).innerHeight()

$(document).ready(function()
{
	$("div.box_inner").css({"height":boxih});
	$(window).resize(function() {
		$("div.box_inner").css({"height":boxih});
	});
	
});

$(document).ready(function()/*left btn*/
{
	$("div.content0_2").click(function()
	{
		$("div.box_wrap").css({"display":"block"});
		$('html,body').css({"overflow-y" : "hidden"});		
		$("div#wrap").css({"overflow-y":"scroll","margin-left":"-18px"});		
		$("div#right_icon").css({"margin-left":"1009px"});
		$("div.box_inner").scrollTop(0);
	});
	$("div.content0_3").click(function()
	{
		$("div.box_wrap").css({"display":"block"});
		$('html,body').css({"overflow-y" : "hidden"});		
		$("div#wrap").css({"overflow-y":"scroll","margin-left":"-18px"});
		$("div#right_icon").css({"margin-left":"1009px"});
		$("div.box_inner").scrollTop(2040);
	});
	$("div.boxbg").click(function()
	{
		$("div.box_wrap").css({"display":"none"});
		$('html,body').css({"overflow-y" : "visible"});		
		$("div#wrap").css({"overflow-y":"hidden","margin-left":"0px"});
		$("div#right_icon").css({"margin-left":"1000px"});
	});
	$("div.box_close").click(function()
	{
		$("div.box_wrap").css({"display":"none"});
		$('html,body').css({"overflow-y" : "visible"});		
		$("div#wrap").css({"overflow-y":"hidden","margin-left":"0px"});
		$("div#right_icon").css({"margin-left":"1000px"});
	});
	
	
	function keyFunction() {
	if (event.keyCode==27) {
		$("div.box_wrap").css({"display":"none"});
		$('html,body').css({"overflow-y" : "visible"});		
		$("div#wrap").css({"overflow-y":"hidden","margin-left":"0px"});
		$("div#right_icon").css({"margin-left":"1000px"});
		return false;
	} 
	}
	document.onkeydown=keyFunction;
	
	
});


$(document).ready(function()
{
	$("#icon_1").click(function(){$('html,body').animate({scrollTop:565},500);	});
	$("#icon_2").click(function(){$('html,body').animate({scrollTop:1227},500);	});
	$("#icon_3").click(function(){$('html,body').animate({scrollTop:1890},500);	});
	$("#icon_4").click(function(){$('html,body').animate({scrollTop:0},500);	});
});