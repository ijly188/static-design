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
		$("html,body").css({"overflow-y" : "hidden", "position":"static"});		
		$("div#wrap").css({"overflow-y":"scroll","margin-left":"-17px"});		
		$("div.box_inner").scrollTop(0);
	});
	$("div.boxbg").click(function()
	{
		$("div.box_wrap").css({"display":"none"});
		$("html,body").css({"overflow-y" : "auto", "position":"static"});		
		$("div#wrap").css({"overflow-y":"hidden","margin-left":"0px"});
	});
	
	
	function keyFunction() {
	if (event.keyCode==27) {
		$("div.box_wrap").css({"display":"none"});
		$("html,body").css({"overflow-y" : "auto", "position":"static"});		
		$("div#wrap").css({"overflow-y":"hidden","margin-left":"0px"});
		return false;
	} 
	}
	document.onkeydown=keyFunction;
	
	
});




$(document).ready(function()/*right btn*/
{
	$("div.content0_3").click(function()
	{
		$("div.box_wrap").css({"display":"block"});
		$("html,body").css({"overflow-y" : "hidden", "position":"static"});		
		$("div#wrap").css({"overflow-y":"scroll","margin-left":"-17px"});
		$("div.box_inner").scrollTop(2050);
	});
	$("div.boxbg").click(function()
	{
		$("div.box_wrap").css({"display":"none"});
		$("html,body").css({"overflow-y" : "auto", "position":"static"});		
		$("div#wrap").css({"overflow-y":"hidden","margin-left":"0px"});
	});
	function keyFunction() {
	if (event.keyCode==27) {
		$("div.box_wrap").css({"display":"none"});
		$("html,body").css({"overflow-y" : "auto", "position":"static"});		
		$("div#wrap").css({"overflow-y":"hidden","margin-left":"0px"});
		return false;
	} 
	}
	document.onkeydown=keyFunction;
	
});


$(document).ready(function()
{
	$("div.content3_1").click(function()
	{
	$('html,body').animate({scrollTop:0},500);
	});
});