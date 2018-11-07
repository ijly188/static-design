$(document).ready(function()
{
	var h = window.innerHeight
	|| document.documentElement.clientHeight
	|| document.body.clientHeight;
	var w = window.innerWidth
	|| document.documentElement.clientWidth
	|| document.body.clientWidth;
	var imgw = 1920;
	var s = -(imgw-w)/2
	$(".wrap").css("width",w);
	$(".pic_list_wrap").css("width","1920px");
	$("#pic_left").css("left",(w-980)/2);
	$("#pic_right").css("right",(w-980)/2);
	$("#btn_1st").css("right",(w-980)/2);
	$(".pic_list").css("left",s);
	$(".pic_list_wrap").css("overflow","hidden");
	var pic_list_height = 1050 ;
	var pic_num = 6 ;
	$(".pic_list").css("width",imgw*pic_num);
	var pic_p_current = 0 ;
	manageControls(pic_p_current);
	$('.control').bind('click', function(){
		pic_p_current = ($(this).attr('id')=='pic_right') ? pic_p_current+1 : pic_p_current-1;
		if($(this).attr("id")=="btn1")
		{pic_p_current = 1}
		else if($(this).attr("id")=="btn_1st")
		{pic_p_current = 1}
		else if($(this).attr("id")=="btn2")
		{pic_p_current = 2}
		else if($(this).attr("id")=="btn3")
		{pic_p_current = 3}
		else if($(this).attr("id")=="btn4")
		{pic_p_current = 4}
		else if($(this).attr("id")=="btn5")
		{pic_p_current = 5}
		manageControls(pic_p_current);
		$(".pic_list").animate({'margin-left':imgw*(-pic_p_current)}, 500);
	});	
	function manageControls(position){
	if(position==0){ 
		$('#pic_left').fadeOut(0)
		$('#btn_1st').fadeIn(0)
		} else{ 
		$('#pic_left').fadeIn(0)
		$('#btn_1st').fadeOut(0)
		}		
	if(position==0){ 
		$('.item_wrap').fadeOut(0)
		}
		else if(position==1){
			$('.page1').css("display","block");
			$('.page2').css("display","none");
			$('.page3').css("display","none");
			$('.page4').css("display","none");
			$('.page5').css("display","none");
		}
		else if(position==2){
			$('.page1').css("display","none");
			$('.page2').css("display","block");
			$('.page3').css("display","none");
			$('.page4').css("display","none");
			$('.page5').css("display","none");
		}
		else if(position==3){
			$('.page1').css("display","none");
			$('.page2').css("display","none");
			$('.page3').css("display","block");
			$('.page4').css("display","none");
			$('.page5').css("display","none");
		}
		else if(position==4){
			$('.page1').css("display","none");
			$('.page2').css("display","none");
			$('.page3').css("display","none");
			$('.page4').css("display","block");
			$('.page5').css("display","none");
		}
		else if(position==5){
			$('.page1').css("display","none");
			$('.page2').css("display","none");
			$('.page3').css("display","none");
			$('.page4').css("display","none");
			$('.page5').css("display","block");
		}
    if(position==pic_num-1 || position == 0)
	{
		$('#pic_right').fadeOut(0)
		} else{
		$('#pic_right').fadeIn(0)
		}
	}
	$(window).resize(function() {
	var h = window.innerHeight
	|| document.documentElement.clientHeight
	|| document.body.clientHeight;
	var w = window.innerWidth
	|| document.documentElement.clientWidth
	|| document.body.clientWidth;
	var s = -(imgw-w)/2
	$(".wrap").css("width",w);
	$("#pic_left").css("left",(w-980)/2);
	$("#pic_right").css("right",(w-980)/2);
	$("#btn_1st").css("right",(w-980)/2);
	$("#btn_1st").css("margin-right","-14px");
	$(".pic_list").css("left",s);
	});
});	