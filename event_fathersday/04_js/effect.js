$(document).ready(function()
{
	var h = window.innerHeight
	|| document.documentElement.clientHeight
	|| document.body.clientHeight;
	var w = window.innerWidth
	|| document.documentElement.clientWidth
	|| document.body.clientWidth;
	
	$(".topbanner").fadeOut(0)
	$("#topbanner_1").fadeIn(0)
	
	
	
	var imgh = 689;
	var imgw = 1080;
	var pic_num = 3 ;
	$("#page_wrap").css("width",imgw);
	$("#page_wrap").css("height",pic_num * imgh);
	$("#btn1").click(function(){
		$(".btn").removeClass("circle")
		$("#btn1").addClass("circle")
		$(".topbanner").fadeOut(0)
		$("#topbanner_1").fadeIn(0)
		$("#page_wrap").animate({'margin-top':-imgh*0}, 1000)}
	);
	$("#btn2").click(function(){
		$(".btn").removeClass("circle")
		$("#btn2").addClass("circle")
		$(".topbanner").fadeOut(0)
		$("#topbanner_2").fadeIn(0)
		$("#page_wrap").animate({'margin-top':-imgh*1}, 1000)}
	);
	$("#btn3").click(function(){
		$(".btn").removeClass("circle")
		$("#btn3").addClass("circle")
		$(".topbanner").fadeOut(0)
		$("#topbanner_3").fadeIn(0)
		$("#page_wrap").animate({'margin-top':-imgh*2}, 1000)}
	);	
	
	
	/*topbtn*/
	
	var w_ow = $(window).innerWidth() ;
	var w_ih = $(window).innerHeight();
	var boxih = 0.85 * $(window).innerHeight();

	$("div.box_inner").css({"height":boxih});
	$(window).resize(function() {
		$("div.box_inner").css({"height":boxih});
	});

	$("#rightscroll").css({"height":w_ih});
	
	$("#topbtn").click(function()
	{
		$("div#bank_1").css({"display":"block"});
		$("div#bank_2").css({"display":"none"});	
		$("div.box_wrap").css({"display":"block"});				
		$("html,body").css({"overflow-y" : "hidden", "position":"static"});		
		$("div#bd_wrap").css({"margin-left":"-8.5px","width":"100%"});
		$("div.box_inner").scrollTop(0);
	});
	$("div.boxbg").click(function()
	{
		$("div.box_wrap").css({"display":"none"});
		$("div#bank_1").css({"display":"none"});
		$("div#bank_2").css({"display":"none"});
		$("html,body").css({"overflow-y" : "visible", "position":"static", "width": "100%" });
		$("div#bd_wrap").css({"margin-left":"0px"});
	});
	
	$("div.box_close").click(function()
	{
		$("div.box_wrap").css({"display":"none"});
		$("div#bank_1").css({"display":"none"});
		$("div#bank_2").css({"display":"none"});
		$("html,body").css({"overflow-y" : "visible", "position":"static", "width": "100%" });
		$("div#bd_wrap").css({"margin-left":"0px"});
	});	
	
	function keyFunction() {
	if (event.keyCode==27) {
		$("div.box_wrap").css({"display":"none"});
		$("div#bank_1").css({"display":"none"});
		$("div#bank_2").css({"display":"none"});
		$("html,body").css({"overflow-y" : "visible", "position":"static", "width": "100%" });
		$("div#bd_wrap").css({"margin-left":"0px"});
		return false;
	} 
	}
	document.onkeydown=keyFunction;	
	/*
	$("div.boxbg").click(function()
	{
		$("div.box_wrap").css({"display":"none"});
		$("div#bank_1").css({"display":"none"});
		$("html,body").css({"overflow-y" : "auto", "position":"static", "width": "100%" });		
		$("div#bd_wrap").css({"overflow-y":"hidden","margin-left":"0px"});
		$("div#contain").css({"margin-left":"0px"});
		$("div#bottom").css({"margin-left":"0px"});
	});
	
	$("div.box_close").click(function()
	{
		$("div.box_wrap").css({"display":"none"});
		$("div#bank_1").css({"display":"none"});
		$("html,body").css({"overflow-y" : "auto", "position":"static", "width": "100%" });
		$("div#bd_wrap").css({"overflow-y":"hidden","margin-left":"0px"});
		$("div#contain").css({"margin-left":"0px"});
		$("div#bottom").css({"margin-left":"0px"});
	});
	
	function keyFunction() {
	if (event.keyCode==27) {
		$("div.box_wrap").css({"display":"none"});
		$("div#bank_1").css({"display":"none"});
		$("html,body").css({"overflow-y" : "auto", "position":"static", "width": "100%"});
		$("div#bd_wrap").css({"overflow-y":"hidden","margin-left":"0px"});
		$("div#contain").css({"margin-left":"0px"});
		$("div#bottom").css({"margin-left":"0px"});
		return false;
		}
	}
	document.onkeydown=keyFunction;
	*/
});