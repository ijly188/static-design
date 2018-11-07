$(document).ready(function()
{
	var h = window.innerHeight
	|| document.documentElement.clientHeight
	|| document.body.clientHeight;
	var w = window.innerWidth
	|| document.documentElement.clientWidth
	|| document.body.clientWidth;
	
	/*ready go*/
	$("#btn_m_1").css("display","block");
	$("#page1").css("display","block");

	
	
	/*Mouseover area start*/
	/*1*/
	$("#btn_1").mouseover(
		function(){
			$(".btn_m").css("display","none");
			$("#btn_m_1").css("display","block");
			}
	);
	$("#btn_1").mouseout(
		function(){
			$(".btn_m").css("display","none");
		}
	);	
	/*2*/
	$("#btn_2").mouseover(
		function(){
			$(".btn_m").css("display","none");
			$("#btn_m_2").css("display","block");
			}
	);
	$("#btn_2").mouseout(
		function(){
			$(".btn_m").css("display","none");
			}
	);
	
	
	/*3*/
	$("#btn_3").mouseover(
		function(){
			$(".btn_m").css("display","none");
			$("#btn_m_3").css("display","block");
			}
	);
	$("#btn_3").mouseout(
		function(){
			$(".btn_m").css("display","none");
			}
	);
	
	/*4*/
	$("#btn_4").mouseover(
		function(){
			$(".btn_m").css("display","none");
			$("#btn_m_4").css("display","block");
			}
	);
	$("#btn_4").mouseout(
		function(){
			$(".btn_m").css("display","none");
			}
	);
	
	/*5*/
	$("#btn_5").mouseover(
		function(){
			$(".btn_m").css("display","none");
			$("#btn_m_5").css("display","block");
			}
	);
	$("#btn_5").mouseout(
		function(){
			$(".btn_m").css("display","none");
			}
	);
	
	/*6*/
	$("#btn_6").mouseover(
		function(){
			$(".btn_m").css("display","none");
			$("#btn_m_6").css("display","block");
			}
	);
	$("#btn_6").mouseout(
		function(){
			$(".btn_m").css("display","none");
			}
	);
	/*Mouseover area end*/
	/*click area start*/
	$("#btn_1").click(
		function(){
			$("#bd_wrap").css("background-image","url(02_img/bg_01.jpg)");	
			$("#btn_m_1").removeClass("btn_m");
			$("#btn_m_1").parent().siblings().children().addClass("btn_m");
			$(".btn_m").css("display","none");			
			$("#btn_1").mouseout(function(){$(".btn_m").css("display","none");$("#btn_m_1").css("display","block");});
			$(".page").css("display","none");
			$("#page1").fadeIn(1500);
	});
	$("#btn_2").click(
		function(){
			$("#bd_wrap").css("background-image","url(02_img/bg_02.jpg)");	
			$("#btn_m_2").removeClass("btn_m");
			$("#btn_m_2").parent().siblings().children().addClass("btn_m");
			$(".btn_m").css("display","none");
			$("#btn_2").mouseout(function(){$(".btn_m").css("display","none");$("#btn_m_2").css("display","block");});
			$(".page").css("display","none");
			$("#page2").fadeIn(1500);
	});
	$("#btn_3").click(
		function(){
			$("#bd_wrap").css("background-image","url(02_img/bg_03.jpg)");	
			$("#btn_m_3").removeClass("btn_m");
			$("#btn_m_3").parent().siblings().children().addClass("btn_m");
			$(".btn_m").css("display","none");			
			$("#btn_3").mouseout(function(){$(".btn_m").css("display","none");$("#btn_m_3").css("display","block");});
			$(".page").css("display","none");
			$("#page3").fadeIn(1500);
	});
	$("#btn_4").click(
		function(){
			$("#bd_wrap").css("background-image","url(02_img/bg_04.jpg)");	
			$("#btn_m_4").removeClass("btn_m");
			$("#btn_m_4").parent().siblings().children().addClass("btn_m");
			$(".btn_m").css("display","none");
			$("#btn_4").mouseout(function(){$(".btn_m").css("display","none");$("#btn_m_4").css("display","block");});
			$(".page").css("display","none");
			$("#page4").fadeIn(1500);
	});
	$("#btn_5").click(
		function(){
			$("#bd_wrap").css("background-image","url(02_img/bg_05.jpg)");	
			$("#btn_m_5").removeClass("btn_m");
			$("#btn_m_5").parent().siblings().children().addClass("btn_m");
			$(".btn_m").css("display","none");			
			$("#btn_5").mouseout(function(){$(".btn_m").css("display","none");$("#btn_m_5").css("display","block");});
			$(".page").css("display","none");
			$("#page5").fadeIn(1500);
	});
	$("#btn_6").click(
		function(){
			$("#bd_wrap").css("background-image","url(02_img/bg_06.jpg)");	
			$("#btn_m_6").removeClass("btn_m");
			$("#btn_m_6").parent().siblings().children().addClass("btn_m");
			$(".btn_m").css("display","none");
			$("#btn_6").mouseout(function(){$(".btn_m").css("display","none");$("#btn_m_6").css("display","block");});
			$(".page").css("display","none");
			$("#page6").fadeIn(1500);
	});
	/*click area end*/
});
