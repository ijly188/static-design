$(document).ready(function()
{	
	
	$("#gotop").click(function(){$('html,body').animate({scrollTop:0 },1500);});

	
		/*popoverbtn*/
	
	var wdinnerw = $(window).innerWidth();	
	var boxih = 0.85 * $(window).innerHeight();

	$("div.box_inner").css({"height":boxih});
	$(window).resize(function() {
		$("div.box_inner").css({"height":boxih});		
		$("div#wrap").css({"width":"100%"});
	});
	$("html,body").css({"overflow-y" : "visible", "position":"static", "width": "100%" });
	
	
	var w_ow = $(window).innerWidth()  ;
	var w_iw = w_ow -5 ;
	var scrollnum = $('html').scrollTop();


	$(".topbtn").click(function()
	{
		
		$("div.box_wrap").css({"display":"block","float":"left"});
		
		$("html,body").css({"overflow-y" : "hidden", "position":"static"});
		$("html").css({"overflow-y" : "scroll", "position":"static"});
		
		$("div#wrap").css({"overflow-y":"scroll","margin-left":"-17px"});
	});
	$("div.boxbg").click(function()
	{		
		$("div.box_wrap").css({"display":"none"});
		$("html,body").css({"overflow-y" : "visible", "position":"static", "width": "100%" });		
		$("div#wrap").css({"overflow-y":"hidden","margin-left":"0px"});
	});
	$("div.box_close").click(function()
	{
		$("div.box_wrap").css({"display":"none"});
		$("html,body").css({"overflow-y" : "visible", "position":"static", "width": "100%" });
		$("div#wrap").css({"overflow-y":"hidden","margin-left":"0px"});
	});	
	
	
	function keyFunction() {
	if (event.keyCode==27) {
		$("div.box_wrap").css({"display":"none"});
		$("html,body").css({"overflow-y" : "visible", "position":"static", "width": "100%" });		
		$("div#wrap").css({"overflow-y":"hidden","margin-left":"0px"});
		return false;
	} 
	}
	document.onkeydown=keyFunction;	
	/*popoverbtn*/

});