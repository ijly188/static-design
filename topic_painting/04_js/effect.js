$(document).ready(function()
{
	$('html').css({"min-width":"980px"});
	$("#bd").css({"background":"top center url(02_img/bg.jpg)","background-repeat":"no-repeat"});
	$(".pic img").css({"max-width":box_w});
	$(".pic img").css({"max-height":box_h});
	
	
	var saH = $('body').innerHeight();/*screen value*/
	var saW = $('body').innerWidth();/*screen value*/
	var sv = 980;/*solid value*/
	var box_w = sv;/*box value*/
	var box_h = box_w * 0.69388;
	
	
	
	/*
	alert (saW);
	


	if ( saW >= 980 ) {
		$(".box .box_monitor .pic img").css({"width":box_w})
		$(".box .box_monitor .pic img").css({"height":box_h})
		}else if( saW <= 980 ){
			
		$(".box .box_monitor .box_inner .pic img").css({"width":"80%"});
		$(".box .box_monitor .box_inner .pic img").css({"height":"80%"});
		} 
	*/
});

$(document).ready(function()
{
	$("#slidebox_1").click(function()
	{
		$("div.box_wrap").css({"display":"block"});
		$('html,body').css({"overflow-y" : "hidden","height":"100%","width":"100%"});		
		$("#bd").css({"overflow-y":"scroll","margin-left":"-18px"});
		$(".headline").css({"margin-left":"9px"});
		$("div.box_inner").css({"margin-top": "0px"});
	});
	$("#slidebox_2").click(function()
	{
		$("div.box_wrap").css({"display":"block"});
		$('html,body').css({"overflow-y" : "hidden","height":"100%","width":"100%"});		
		$("#bd").css({"overflow-y":"scroll","margin-left":"-18px"});
		$(".headline").css({"margin-left":"9px"});
		$("div.box_inner").css({"margin-top": "-680px" });
	});
	$("#slidebox_3").click(function()
	{
		$("div.box_wrap").css({"display":"block"});
		$('html,body').css({"overflow-y" : "hidden","height":"100%","width":"100%"});		
		$("#bd").css({"overflow-y":"scroll","margin-left":"-18px"});
		$(".headline").css({"margin-left":"9px"});
		$("div.box_inner").css({"margin-top": "-1360px" });
	});
	$("#slidebox_4").click(function()
	{
		$("div.box_wrap").css({"display":"block"});
		$('html,body').css({"overflow-y" : "hidden","height":"100%","width":"100%"});		
		$("#bd").css({"overflow-y":"scroll","margin-left":"-18px"});
		$(".headline").css({"margin-left":"9px"});
		$("div.box_inner").css({"margin-top":"-2040px"});
	});
	$("#slidebox_5").click(function()
	{
		$("div.box_wrap").css({"display":"block"});
		$('html,body').css({"overflow-y" : "hidden","height":"100%","width":"100%"});		
		$("#bd").css({"overflow-y":"scroll","margin-left":"-18px"});
		$(".headline").css({"margin-left":"9px"});
		$("div.box_inner").css({"margin-top":"-2720px"});
	});
	$("#slidebox_6").click(function()
	{
		$("div.box_wrap").css({"display":"block"});
		$('html,body').css({"overflow-y" : "hidden","height":"100%","width":"100%"});		
		$("#bd").css({"overflow-y":"scroll","margin-left":"-18px"});
		$(".headline").css({"margin-left":"9px"});
		$("div.box_inner").css({"margin-top":"-3400px"});
	});
	$("#slidebox_7").click(function()
	{
		$("div.box_wrap").css({"display":"block"});
		$('html,body').css({"overflow-y" : "hidden","height":"100%","width":"100%"});		
		$("#bd").css({"overflow-y":"scroll","margin-left":"-18px"});
		$(".headline").css({"margin-left":"9px"});
		$("div.box_inner").css({"margin-top":"-4080px"});
	});
	$("#slidebox_8").click(function()
	{
		$("div.box_wrap").css({"display":"block"});
		$('html,body').css({"overflow-y" : "hidden","height":"100%","width":"100%"});		
		$("#bd").css({"overflow-y":"scroll","margin-left":"-18px"});
		$(".headline").css({"margin-left":"9px"});
		$("div.box_inner").css({"margin-top":"-4760px"});
	});
	$("div.boxbg").click(function()
	{
		$("div.box_wrap").css({"display":"none"});
		$('html,body').css({"overflow-y" : "visible","height":"100%","width":"100%"});		
		$("#bd").css({"overflow-y":"hidden","margin-left":"0px"});
		$(".headline").css({"margin-left":"0px"});
	});
	$("div.box_close").click(function()
	{
		$("div.box_wrap").css({"display":"none"});
		$('html,body').css({"overflow-y" : "visible","height":"100%","width":"100%"});		
		$("#bd").css({"overflow-y":"hidden","margin-left":"0px"});
		$(".headline").css({"margin-left":"0px"});
	});
	
	
	function keyFunction() {
	if (event.keyCode==27) {
		$("div.box_wrap").css({"display":"none"});
		$('html,body').css({"overflow-y" : "visible","height":"100%","width":"100%"});		
		$("#bd").css({"overflow-y":"hidden","margin-left":"0px"});
		$(".headline").css({"margin-left":"0px"});
		return false;
	} 
	}
	document.onkeydown=keyFunction;
	
	
});
/*
$(document).ready(function()
{
	$("#icon_1").click(function(){$('html,body').animate({scrollTop:565},500);	});
	$("#icon_2").click(function(){$('html,body').animate({scrollTop:1227},500);	});
	$("#icon_3").click(function(){$('html,body').animate({scrollTop:1890},500);	});
	$("#icon_4").click(function(){$('html,body').animate({scrollTop:0},500);	});
});*/


$(document).ready(function()
{	
	$(".content1_0").mouseenter(function(){	$("#slidebox_1").animate({"margin-top":"0px"},500);	});
	$(".content1_0").mouseleave(function(){	$("#slidebox_1").animate({"margin-top":"327px"},500);});

	$(".content1_1").mouseenter(function(){	$("#slidebox_2").animate({"margin-top":"0px"},500);	});
	$(".content1_1").mouseleave(function(){	$("#slidebox_2").animate({"margin-top":"196px"},500);});
	
	$(".content1_2").mouseenter(function(){	$("#slidebox_3").animate({"margin-top":"0px"},500);	});
	$(".content1_2").mouseleave(function(){	$("#slidebox_3").animate({"margin-top":"285px"},500);});
	
	$(".content1_3").mouseenter(function(){	$("#slidebox_4").animate({"margin-top":"0px"},500);	});
	$(".content1_3").mouseleave(function(){	$("#slidebox_4").animate({"margin-top":"218px"},500);});
	
	$(".content1_4").mouseenter(function(){	$("#slidebox_5").animate({"margin-top":"0px"},500);	});
	$(".content1_4").mouseleave(function(){	$("#slidebox_5").animate({"margin-top":"231px"},500);});
	
	$(".content1_5").mouseenter(function(){	$("#slidebox_6").animate({"margin-top":"0px"},500);	});
	$(".content1_5").mouseleave(function(){	$("#slidebox_6").animate({"margin-top":"247px"},500);});
	
	$(".content1_6").mouseenter(function(){	$("#slidebox_7").animate({"margin-top":"0px"},500);	});
	$(".content1_6").mouseleave(function(){	$("#slidebox_7").animate({"margin-top":"338px"},500);});
	
	$(".content1_7").mouseenter(function(){	$("#slidebox_8").animate({"margin-top":"0px"},500);	});
	$(".content1_7").mouseleave(function(){	$("#slidebox_8").animate({"margin-top":"381px"},500);});	
});