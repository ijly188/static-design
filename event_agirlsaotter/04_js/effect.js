$(document).ready(function()
{
	$("#gotop").click(function(){$('html,body').animate({scrollTop:0 },1500);});
	$("#topbtn_1").click(function(){$('html,body').animate({scrollTop:447 },1500);});
	$("#topbtn_2").click(function(){$('html,body').animate({scrollTop:1507 },1500);});
	$("#topbtn_3").click(function(){$('html,body').animate({scrollTop:1910 },1500);});
	$("#topbtn_4").click(function(){$('html,body').animate({scrollTop:2820 },1500);});
	
	
	
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


	$(".popoverbtn").click(function()
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
		$('html,body').animate({scrollTop:3720},0);
	});
	$("div.box_close").click(function()
	{
		$("div.box_wrap").css({"display":"none"});
		$("html,body").css({"overflow-y" : "visible", "position":"static", "width": "100%" });
		$("div#wrap").css({"overflow-y":"hidden","margin-left":"0px"});
		$('html,body').animate({scrollTop:3720},0);
	});	
	
	
	function keyFunction() {
	if (event.keyCode==27) {
		$("div.box_wrap").css({"display":"none"});
		$("html,body").css({"overflow-y" : "visible", "position":"static", "width": "100%" });		
		$("div#wrap").css({"overflow-y":"hidden","margin-left":"0px"});
		$('html,body').animate({scrollTop:3720},0);
		return false;
	} 
	}
	document.onkeydown=keyFunction;	
	/*popoverbtn*/
	
/*item start*/
	/*item_1 start*/
	/*1*/
	$("#item_1_1").mouseenter(function(){$("#item_1_1_m").animate({'margin-top':'0px'},400);});
	$("#item_1_1").mouseleave(function(){$("#item_1_1_m").animate({'margin-top':'54px'},200);});
	/*2*/
	$("#item_1_2").mouseenter(function(){$("#item_1_2_m").animate({'margin-top':'0px'},400);});
	$("#item_1_2").mouseleave(function(){$("#item_1_2_m").animate({'margin-top':'54px'},200);});
	/*3*/
	$("#item_1_3").mouseenter(function(){$("#item_1_3_m").animate({'margin-top':'0px'},400);});
	$("#item_1_3").mouseleave(function(){$("#item_1_3_m").animate({'margin-top':'54px'},200);});
	/*4*/
	$("#item_1_4").mouseenter(function(){$("#item_1_4_m").animate({'margin-top':'0px'},400);});
	$("#item_1_4").mouseleave(function(){$("#item_1_4_m").animate({'margin-top':'54px'},200);});
	/*5*/
	$("#item_1_5").mouseenter(function(){$("#item_1_5_m").animate({'margin-top':'0px'},400);});
	$("#item_1_5").mouseleave(function(){$("#item_1_5_m").animate({'margin-top':'54px'},200);});
	/*6*/
	$("#item_1_6").mouseenter(function(){$("#item_1_6_m").animate({'margin-top':'0px'},400);});
	$("#item_1_6").mouseleave(function(){$("#item_1_6_m").animate({'margin-top':'54px'},200);});
	/*7*/
	$("#item_1_7").mouseenter(function(){$("#item_1_7_m").animate({'margin-top':'0px'},400);});
	$("#item_1_7").mouseleave(function(){$("#item_1_7_m").animate({'margin-top':'54px'},200);});
	/*8*/
	$("#item_1_8").mouseenter(function(){$("#item_1_8_m").animate({'margin-top':'0px'},400);});
	$("#item_1_8").mouseleave(function(){$("#item_1_8_m").animate({'margin-top':'54px'},200);});
	/*9*/
	$("#item_1_9").mouseenter(function(){$("#item_1_9_m").animate({'margin-top':'0px'},400);});
	$("#item_1_9").mouseleave(function(){$("#item_1_9_m").animate({'margin-top':'54px'},200);});
	/*10*/
	$("#item_1_10").mouseenter(function(){$("#item_1_10_m").animate({'margin-top':'0px'},400);});
	$("#item_1_10").mouseleave(function(){$("#item_1_10_m").animate({'margin-top':'54px'},200);});
	/*11*/
	$("#item_1_11").mouseenter(function(){$("#item_1_11_m").animate({'margin-top':'0px'},400);});
	$("#item_1_11").mouseleave(function(){$("#item_1_11_m").animate({'margin-top':'54px'},200);});
	/*12*/
	$("#item_1_12").mouseenter(function(){$("#item_1_12_m").animate({'margin-top':'0px'},400);});
	$("#item_1_12").mouseleave(function(){$("#item_1_12_m").animate({'margin-top':'54px'},200);});
	/*item_1 end*/
	
	/*item_2 start*/
	/*1*/
	$("#item_2_1").mouseenter(function(){$("#item_2_1_m").animate({'margin-top':'0px'},400);});
	$("#item_2_1").mouseleave(function(){$("#item_2_1_m").animate({'margin-top':'54px'},200);});
	/*2*/
	$("#item_2_2").mouseenter(function(){$("#item_2_2_m").animate({'margin-top':'0px'},400);});
	$("#item_2_2").mouseleave(function(){$("#item_2_2_m").animate({'margin-top':'54px'},200);});
	/*3*/
	$("#item_2_3").mouseenter(function(){$("#item_2_3_m").animate({'margin-top':'0px'},400);});
	$("#item_2_3").mouseleave(function(){$("#item_2_3_m").animate({'margin-top':'54px'},200);});
	/*4*/
	$("#item_2_4").mouseenter(function(){$("#item_2_4_m").animate({'margin-top':'0px'},400);});
	$("#item_2_4").mouseleave(function(){$("#item_2_4_m").animate({'margin-top':'54px'},200);});
	/*5*/
	$("#item_2_5").mouseenter(function(){$("#item_2_5_m").animate({'margin-top':'0px'},400);});
	$("#item_2_5").mouseleave(function(){$("#item_2_5_m").animate({'margin-top':'54px'},200);});
	/*6*/
	$("#item_2_6").mouseenter(function(){$("#item_2_6_m").animate({'margin-top':'0px'},400);});
	$("#item_2_6").mouseleave(function(){$("#item_2_6_m").animate({'margin-top':'54px'},200);});
	/*7*/
	$("#item_2_7").mouseenter(function(){$("#item_2_7_m").animate({'margin-top':'0px'},400);});
	$("#item_2_7").mouseleave(function(){$("#item_2_7_m").animate({'margin-top':'54px'},200);});
	/*8*/
	$("#item_2_8").mouseenter(function(){$("#item_2_8_m").animate({'margin-top':'0px'},400);});
	$("#item_2_8").mouseleave(function(){$("#item_2_8_m").animate({'margin-top':'54px'},200);});
	/*item_2 end*/
	
	/*item_3 start*/
	/*1*/
	$("#item_3_1").mouseenter(function(){$("#item_3_1_m").animate({'margin-top':'0px'},400);});
	$("#item_3_1").mouseleave(function(){$("#item_3_1_m").animate({'margin-top':'54px'},200);});
	/*2*/
	$("#item_3_2").mouseenter(function(){$("#item_3_2_m").animate({'margin-top':'0px'},400);});
	$("#item_3_2").mouseleave(function(){$("#item_3_2_m").animate({'margin-top':'54px'},200);});
	/*3*/
	$("#item_3_3").mouseenter(function(){$("#item_3_3_m").animate({'margin-top':'0px'},400);});
	$("#item_3_3").mouseleave(function(){$("#item_3_3_m").animate({'margin-top':'54px'},200);});
	/*4*/
	$("#item_3_4").mouseenter(function(){$("#item_3_4_m").animate({'margin-top':'0px'},400);});
	$("#item_3_4").mouseleave(function(){$("#item_3_4_m").animate({'margin-top':'54px'},200);});
	/*5*/
	$("#item_3_5").mouseenter(function(){$("#item_3_5_m").animate({'margin-top':'0px'},400);});
	$("#item_3_5").mouseleave(function(){$("#item_3_5_m").animate({'margin-top':'54px'},200);});
	/*6*/
	$("#item_3_6").mouseenter(function(){$("#item_3_6_m").animate({'margin-top':'0px'},400);});
	$("#item_3_6").mouseleave(function(){$("#item_3_6_m").animate({'margin-top':'54px'},200);});
	/*7*/
	$("#item_3_7").mouseenter(function(){$("#item_3_7_m").animate({'margin-top':'0px'},400);});
	$("#item_3_7").mouseleave(function(){$("#item_3_7_m").animate({'margin-top':'54px'},200);});
	/*8*/
	$("#item_3_8").mouseenter(function(){$("#item_3_8_m").animate({'margin-top':'0px'},400);});
	$("#item_3_8").mouseleave(function(){$("#item_3_8_m").animate({'margin-top':'54px'},200);});
	/*item_2 end*/
/*item end*/
});