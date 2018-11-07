$(document).ready(function()
{

	
	/*iw = $(".item img").attr("width");
	$(".item").css({"height":iw});*/
	
	
	var x1 = $("#article_1").offset();
		x1_top = x1.top;
		x1_top_m = x1_top - 54;
		
		x2 = $("#article_2").offset();
		x2_top = x2.top;
		x2_top_m = x2_top - 54;
		
		x3 = $("#article_3").offset();
		x3_top = x3.top;
		x3_top_m = x3_top - 54;
		
		x4 = $("#article_4").offset();
		x4_top = x4.top;
		x4_top_m = x4_top - 54;
	
	$("#gotop").click(function(){$('html,body').animate({scrollTop:0 },1500);});
	
	$("#topbtn_1").click(function(){$('html,body').animate({scrollTop:x1_top },1500);});
	$("#Q_logo_1").click(function(){$('html,body').animate({scrollTop:x1_top_m },1500);});
	$("#writer_name1").click(function(){$('html,body').animate({scrollTop:x1_top_m },1500);});
	
	$("#topbtn_2").click(function(){$('html,body').animate({scrollTop:x2_top },1500);});
	$("#Q_logo_2").click(function(){$('html,body').animate({scrollTop:x2_top_m },1500);});
	$("#writer_name2").click(function(){$('html,body').animate({scrollTop:x2_top_m },1500);});
	
	$("#topbtn_3").click(function(){$('html,body').animate({scrollTop:x3_top },1500);});
	$("#Q_logo_3").click(function(){$('html,body').animate({scrollTop:x3_top_m },1500);});
	$("#writer_name3").click(function(){$('html,body').animate({scrollTop:x3_top_m },1500);});
	
	$("#topbtn_4").click(function(){$('html,body').animate({scrollTop:x4_top },1500);});
	$("#Q_logo_4").click(function(){$('html,body').animate({scrollTop:x4_top_m },1500);});
	$("#writer_name4").click(function(){$('html,body').animate({scrollTop:x4_top_m },1500);});
	
	/*popoverbtn*/
	
	var wdinnerw = $(window).innerWidth();	
	var boxih = 0.8 * $(window).innerHeight();

	$("div.box_inner").css({"height":boxih});
	$(window).resize(function() {
		$("div.box_inner").css({"height":boxih});
	});
	


	$("#title_5").click(function()
	{
		
		$("div.box_wrap").css({"display":"block","float":"left"});
		$("html,body").css({"overflow-y" : "hidden", "position":"static"});
		$("html").css({"overflow-y" : "scroll", "position":"static"});
	});
	$("div.boxbg").click(function()
	{		
		$("div.box_wrap").css({"display":"none"});
		$("html,body").css({"overflow-y" : "visible", "position":"static", "width": "100%" });
		$('html,body').animate({scrollTop:100000},0);
	});
	$("div.box_close").click(function()
	{
		$("div.box_wrap").css({"display":"none"});
		$("html,body").css({"overflow-y" : "visible", "position":"static", "width": "100%" });
		$('html,body').animate({scrollTop:100000},0);
	});	
	
	
	function keyFunction() {
	if (event.keyCode==27) {
		$("div.box_wrap").css({"display":"none"});
		$("html,body").css({"overflow-y" : "visible", "position":"static", "width": "100%" });
		$('html,body').animate({scrollTop:100000},0);
		return false;
	} 
	}
	document.onkeydown=keyFunction;	

	/*popoverbtn*/
	
/*item start*/
	/*item_1 start*/

	/*$(".item").mouseenter(function(){$(".item").children(".item_m").animate({'margin-top':'-47px'},400);});
	$(".item").mouseleave(function(){$(".item").children(".item_m").animate({'margin-top':'0px'},200);});
	/*1*/
	/*$("#item_1_1").mouseenter(function(){$("#item_1_1_m").animate({'margin-top':'0px'},400);});
	$("#item_1_1").mouseleave(function(){$("#item_1_1_m").animate({'margin-top':'0px'},200);});
	/*2*/
	/*$("#item_1_2").mouseenter(function(){$("#item_1_2_m").animate({'margin-top':'0px'},400);});
	$("#item_1_2").mouseleave(function(){$("#item_1_2_m").animate({'margin-top':'0px'},200);});
	/*3*/
	/*$("#item_1_3").mouseenter(function(){$("#item_1_3_m").animate({'margin-top':'0px'},400);});
	$("#item_1_3").mouseleave(function(){$("#item_1_3_m").animate({'margin-top':'0px'},200);});
	/*4*/
	/*$("#item_1_4").mouseenter(function(){$("#item_1_4_m").animate({'margin-top':'0px'},400);});
	$("#item_1_4").mouseleave(function(){$("#item_1_4_m").animate({'margin-top':'0px'},200);});
	/*5*/
	/*$("#item_1_5").mouseenter(function(){$("#item_1_5_m").animate({'margin-top':'0px'},400);});
	$("#item_1_5").mouseleave(function(){$("#item_1_5_m").animate({'margin-top':'0px'},200);});
	/*6*/
	/*$("#item_1_6").mouseenter(function(){$("#item_1_6_m").animate({'margin-top':'0px'},400);});
	$("#item_1_6").mouseleave(function(){$("#item_1_6_m").animate({'margin-top':'0px'},200);});
	/*7*/
	/*$("#item_1_7").mouseenter(function(){$("#item_1_7_m").animate({'margin-top':'0px'},400);});
	$("#item_1_7").mouseleave(function(){$("#item_1_7_m").animate({'margin-top':'0px'},200);});
	/*8*/
	/*$("#item_1_8").mouseenter(function(){$("#item_1_8_m").animate({'margin-top':'0px'},400);});
	$("#item_1_8").mouseleave(function(){$("#item_1_8_m").animate({'margin-top':'0px'},200);});
	/*9*/
	/*$("#item_1_9").mouseenter(function(){$("#item_1_9_m").animate({'margin-top':'0px'},400);});
	$("#item_1_9").mouseleave(function(){$("#item_1_9_m").animate({'margin-top':'0px'},200);});
	/*10*/
	/*$("#item_1_10").mouseenter(function(){$("#item_1_10_m").animate({'margin-top':'0px'},400);});
	$("#item_1_10").mouseleave(function(){$("#item_1_10_m").animate({'margin-top':'0px'},200);});
	/*11*/
	/*$("#item_1_11").mouseenter(function(){$("#item_1_11_m").animate({'margin-top':'0px'},400);});
	$("#item_1_11").mouseleave(function(){$("#item_1_11_m").animate({'margin-top':'0px'},200);});
	/*12*/
	/*$("#item_1_12").mouseenter(function(){$("#item_1_12_m").animate({'margin-top':'0px'},400);});
	$("#item_1_12").mouseleave(function(){$("#item_1_12_m").animate({'margin-top':'0px'},200);});
	/*item_1 end*/
	
/*item end*/
});