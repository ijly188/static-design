$(document).ready(function()
{
	var h = window.innerHeight
	|| document.documentElement.clientHeight
	|| document.body.clientHeight;
	var w = window.innerWidth
	|| document.documentElement.clientWidth
	|| document.body.clientWidth;
	
	if (w < 1601)
		{
			$(".right_wrap").css({"top":"initial","bottom":"-15%","right":"-5%"});
		}
		else
		{
			$(".right_wrap").css({"top":"120%","bottom":"initial","right":"-30%"});
		}
	
	
	
	
	var imgh = 798;
	var imgw = 1097;
	var pic_num = 4 ;
	$("#page_wrap").css("width",imgw);
	$("#page_wrap").css("height",pic_num * imgh);
	$("#rightbtn_1").click(function(){
		$("#bd_wrap").css("background-image","url(02_img/bg_01.jpg)")
		$("#page_wrap").animate({'margin-top':-imgh*0}, 1500)}
	);
	$("#rightbtn_2").click(function(){
		$("#bd_wrap").css("background-image","url(02_img/bg_02.jpg)")
		$("#page_wrap").animate({'margin-top':-imgh*1}, 1500)}
	);
	$("#rightbtn_3").click(function(){
		$("#bd_wrap").css("background-image","url(02_img/bg_03.jpg)")
		$("#page_wrap").animate({'margin-top':-imgh*2}, 1500)}
	);
	$("#rightbtn_4").click(function(){
		$("#bd_wrap").css("background-image","url(02_img/bg_04.jpg)")
		$("#page_wrap").animate({'margin-top':-imgh*3}, 1500)}
	);
	
	
	/*1*/
	$("#rightbtn_1").mouseover(
		function(){
			$("#rightbtn_o_1").animate({'margin-left':'-33px'},0);
			$("#rightbtn_o_1").css("display","block");
			$("#rightbtn_m_1 img").css("display","none");
			}
	);
	$("#rightbtn_1").mouseout(
		function(){
			$("#rightbtn_o_1").animate({'margin-left':'0px'},0);
			$("#rightbtn_o_1").css("display","none");
			$("#rightbtn_m_1 img").css("display","block");
			}
	);
	
	/*2*/
	$("#rightbtn_2").mouseover(
		function(){
			$("#rightbtn_o_2").animate({'margin-left':'-33px'},0);
			$("#rightbtn_o_2").css("display","block");
			$("#rightbtn_m_2 img").css("display","none");
			}
	);
	$("#rightbtn_2").mouseout(
		function(){
			$("#rightbtn_o_2").animate({'margin-left':'0px'},0);
			$("#rightbtn_o_2").css("display","none");
			$("#rightbtn_m_2 img").css("display","block");
			}
	);
	
	/*3*/
	$("#rightbtn_3").mouseover(
		function(){
			$("#rightbtn_o_3").animate({'margin-left':'-33px'},0);
			$("#rightbtn_o_3").css("display","block");
			$("#rightbtn_m_3 img").css("display","none");
			}
	);
	$("#rightbtn_3").mouseout(
		function(){
			$("#rightbtn_o_3").animate({'margin-left':'0px'},0);
			$("#rightbtn_o_3").css("display","none");
			$("#rightbtn_m_3 img").css("display","block");
			}
	);
	
	/*4*/
	$("#rightbtn_4").mouseover(
		function(){
			$("#rightbtn_o_4").animate({'margin-left':'-33px'},0);
			$("#rightbtn_o_4").css("display","block");
			$("#rightbtn_m_4 img").css("display","none");
			}
	);
	$("#rightbtn_4").mouseout(
		function(){
			$("#rightbtn_o_4").animate({'margin-left':'0px'},0);
			$("#rightbtn_o_4").css("display","none");
			$("#rightbtn_m_4 img").css("display","block");
			}
	);
});
