$(document).ready(function()
{
var wdinnerw = $(window).innerWidth();	
var boxih = 0.85 * $(window).innerHeight();

	$("div.box_inner").css({"height":boxih});
	$(window).resize(function() {
		$("div.box_inner").css({"height":boxih});		
		$("div#wrap").css({"width":"100%"});
	});
	$("html,body").css({"overflow-y" : "auto", "position":"static", "width": "100%" });		
	/*$("div#wrap").css({"overflow-y":"hidden"});*/
});

$(document).ready(function()
{
	var boxheight = $('html').innerHeight();
	var allheight = $("div#wrap").innerHeight();
	$('html,body').css({"height":allheight});
	$("div.content0_1").click(function(){$('html,body').animate({scrollTop:530 },1500);});
	$("div.content0_2").click(function(){$('html,body').animate({scrollTop:1376},1500);});
	$("div.content0_3").click(function(){$('html,body').animate({scrollTop:2230},1500);});
	$("div.content0_4").click(function(){$('html,body').animate({scrollTop:3080},1500);});
	$("div.content6_1").click(function(){$('html,body').animate({scrollTop:0},1500);});

var w_ow = $(window).innerWidth()  ;
var w_iw = w_ow -5 ;
var scrollnum = $('html').scrollTop();


	$("div.content0_5").click(function()
	{
		$("div.box_wrap").css({"display":"block","float":"left"});
		$("html,body").css({"overflow-y" : "hidden", "position":"static"});		
		$("div#wrap").css({"overflow-y":"scroll","margin-left":"-17px"});
		$('html,body').css({"height":boxheight});
		$("div.box_inner").scrollTop(0);
	});
	$("div.boxbg").click(function()
	{
		$("div.box_wrap").css({"display":"none"});
		$("html,body").css({"overflow-y" : "auto", "position":"static", "width": "100%" });		
		$("div#wrap").css({"overflow-y":"hidden","margin-left":"0px"});
	});
	
	
	function keyFunction() {
	if (event.keyCode==27) {
		$("div.box_wrap").css({"display":"none"});
		$("html,body").css({"overflow-y" : "auto", "position":"static", "width": "100%" });		
		$("div#wrap").css({"overflow-y":"hidden","margin-left":"0px"});
		return false;
	} 
	}
	document.onkeydown=keyFunction;	
});

