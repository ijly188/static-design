$(document).ready(function()
{
var w_ow = $(window).innerWidth()  ;
var w_iw = w_ow -5 ;
var boxih = 0.85 * $(window).innerHeight();

	$("div.box_inner").css({"height":boxih});
	$(window).resize(function() {
		$("div.box_inner").css({"height":boxih});
	});
	$("html,body").css({"overflow-y" : "auto", "position":"static", "width": "100%" });		
	$("div#wrap").css({"overflow-y":"hidden"});
});


//bank btn
$(document).ready(function()/*bank_1 btn*/
{
	$("div.content2_1").click(function()
	{
		$("div.box_wrap").css({"display":"block"});
		$("div#bank_1").css({"display":"block"});
		$("div#bank_2").css({"display":"none"});
		$("div#bank_3").css({"display":"none"});
		$("div#bank_4").css({"display":"none"});
		$("div#bank_5").css({"display":"none"});
		$("html,body").css({"overflow-y" : "hidden", "position":"static"});		
		$("div#wrap").css({"overflow-y":"scroll"});
		$("div.box_inner").scrollTop(0);
	});
	$("div.boxbg").click(function()
	{
		$("div.box_wrap").css({"display":"none"});
		$("div#bank_1").css({"display":"none"});
		$("div#bank_2").css({"display":"none"});
		$("div#bank_3").css({"display":"none"});
		$("div#bank_4").css({"display":"none"});
		$("div#bank_5").css({"display":"none"});
		$("html,body").css({"overflow-y" : "auto", "position":"static", "width": "100%" });		
		$("div#wrap").css({"overflow-y":"hidden"});
	});
	
	
	function keyFunction() {
	if (event.keyCode==27) {
		$("div.box_wrap").css({"display":"none"});
		$("div#bank_1").css({"display":"none"});
		$("div#bank_2").css({"display":"none"});
		$("div#bank_3").css({"display":"none"});
		$("div#bank_4").css({"display":"none"});
		$("div#bank_5").css({"display":"none"});
		$("html,body").css({"overflow-y" : "auto", "position":"static", "width": "100%" });		
		$("div#wrap").css({"overflow-y":"hidden"});
		return false;
	} 
	}
	document.onkeydown=keyFunction;	
});

$(document).ready(function()/*bank_2 btn*/
{
	$("div.content2_2").click(function()
	{
		$("div.box_wrap").css({"display":"block"});
		$("div#bank_1").css({"display":"none"});
		$("div#bank_2").css({"display":"block"});		
		$("div#bank_3").css({"display":"none"});
		$("div#bank_4").css({"display":"none"});
		$("div#bank_5").css({"display":"none"});
		$("html,body").css({"overflow-y" : "hidden", "position":"static"});		
		$("div#wrap").css({"overflow-y":"scroll"});
		$("div.box_inner").scrollTop(0);
	});
	$("div.boxbg").click(function()
	{
		$("div.box_wrap").css({"display":"none"});
		$("div#bank_1").css({"display":"none"});
		$("div#bank_2").css({"display":"none"});
		$("div#bank_3").css({"display":"none"});
		$("div#bank_4").css({"display":"none"});
		$("div#bank_5").css({"display":"none"});
		$("html,body").css({"overflow-y" : "auto", "position":"static", "width": "100%"});		
		$("div#wrap").css({"overflow-y":"hidden"});
	});
	function keyFunction() {
	if (event.keyCode==27) {
		$("div.box_wrap").css({"display":"none"});
		$("div#bank_1").css({"display":"none"});
		$("div#bank_2").css({"display":"none"});
		$("div#bank_3").css({"display":"none"});
		$("div#bank_4").css({"display":"none"});
		$("div#bank_5").css({"display":"none"});
		$("html,body").css({"overflow-y" : "auto", "position":"static", "width": "100%"});		
		$("div#wrap").css({"overflow-y":"hidden"});
		return false;
	} 
	}
	document.onkeydown=keyFunction;	
});

$(document).ready(function()/*bank_3 btn*/
{

	
	$("div.content2_3").click(function()
	{
		$("div.box_wrap").css({"display":"block"});
		$("div#bank_1").css({"display":"none"});
		$("div#bank_2").css({"display":"none"});		
		$("div#bank_3").css({"display":"block"});
		$("div#bank_4").css({"display":"none"});
		$("div#bank_5").css({"display":"none"});
		$("html,body").css({"overflow-y" : "hidden", "position":"static"});		
		$("div#wrap").css({"overflow-y":"scroll"});
		$("div.box_inner").scrollTop(0);
	});
	$("div.boxbg").click(function()
	{
		$("div.box_wrap").css({"display":"none"});
		$("div#bank_1").css({"display":"none"});
		$("div#bank_2").css({"display":"none"});
		$("div#bank_3").css({"display":"none"});
		$("div#bank_4").css({"display":"none"});
		$("div#bank_5").css({"display":"none"});
		$("html,body").css({"overflow-y" : "auto", "position":"static", "width": "100%"});		
		$("div#wrap").css({"overflow-y":"hidden"});
	});
	function keyFunction() {
	if (event.keyCode==27) {
		$("div.box_wrap").css({"display":"none"});
		$("div#bank_1").css({"display":"none"});
		$("div#bank_2").css({"display":"none"});
		$("div#bank_3").css({"display":"none"});
		$("div#bank_4").css({"display":"none"});
		$("div#bank_5").css({"display":"none"});
		$("html,body").css({"overflow-y" : "auto", "position":"static","width": "100%"});		
		$("div#wrap").css({"overflow-y":"hidden"});
		return false;
	} 
	}
	document.onkeydown=keyFunction;	
});

$(document).ready(function()/*bank_4 btn*/
{	
	$("div.content2_4").click(function()
	{
		$("div.box_wrap").css({"display":"block"});
		$("div#bank_1").css({"display":"none"});
		$("div#bank_2").css({"display":"none"});
		$("div#bank_3").css({"display":"none"});		
		$("div#bank_4").css({"display":"block"});
		$("div#bank_5").css({"display":"none"});
		$("html,body").css({"overflow-y" : "hidden", "position":"static"});		
		$("div#wrap").css({"overflow-y":"scroll"});
		$("div.box_inner").scrollTop(0);
	});
	$("div.boxbg").click(function()
	{
		$("div.box_wrap").css({"display":"none"});
		$("div#bank_1").css({"display":"none"});
		$("div#bank_2").css({"display":"none"});
		$("div#bank_3").css({"display":"none"});
		$("div#bank_4").css({"display":"none"});
		$("div#bank_5").css({"display":"none"});
		$("html,body").css({"overflow-y" : "auto", "position":"static", "width": "100%"});		
		$("div#wrap").css({"overflow-y":"hidden"});
	});
	function keyFunction() {
	if (event.keyCode==27) {
		$("div.box_wrap").css({"display":"none"});
		$("div#bank_1").css({"display":"none"});
		$("div#bank_2").css({"display":"none"});
		$("div#bank_3").css({"display":"none"});
		$("div#bank_4").css({"display":"none"});
		$("div#bank_5").css({"display":"none"});
		$("html,body").css({"overflow-y" : "auto", "position":"static", "width": "100%"});		
		$("div#wrap").css({"overflow-y":"hidden"});
		return false;
	} 
	}
	document.onkeydown=keyFunction;	
});

$(document).ready(function()/*bank_5 btn*/
{
	$("div.content2_5").click(function()
	{
		$("div.box_wrap").css({"display":"block"});
		$("div#bank_1").css({"display":"none"});
		$("div#bank_2").css({"display":"none"});
		$("div#bank_3").css({"display":"none"});
		$("div#bank_4").css({"display":"none"});
		$("div#bank_5").css({"display":"block"});
		$("html,body").css({"overflow-y" : "hidden", "position":"static"});		
		$("div#wrap").css({"overflow-y":"scroll"});
		$("div.box_inner").scrollTop(0);
	});
	$("div.boxbg").click(function()
	{
		$("div.box_wrap").css({"display":"none"});
		$("div#bank_1").css({"display":"none"});
		$("div#bank_2").css({"display":"none"});
		$("div#bank_3").css({"display":"none"});
		$("div#bank_4").css({"display":"none"});
		$("div#bank_5").css({"display":"none"});
		$("html,body").css({"overflow-y" : "auto", "position":"static", "width": "100%"});		
		$("div#wrap").css({"overflow-y":"hidden"});
	});
	function keyFunction() {
	if (event.keyCode==27) {
		$("div.box_wrap").css({"display":"none"});
		$("div#bank_1").css({"display":"none"});
		$("div#bank_2").css({"display":"none"});
		$("div#bank_3").css({"display":"none"});
		$("div#bank_4").css({"display":"none"});
		$("div#bank_5").css({"display":"none"});
		$("html,body").css({"overflow-y" : "auto", "position":"static", "width": "100%"});		
		$("div#wrap").css({"overflow-y":"hidden"});
		return false;
	} 
	}
	document.onkeydown=keyFunction;	
});