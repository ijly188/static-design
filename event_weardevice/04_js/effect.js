$(document).ready(function()
{
	var imgw_2 = 635;
	var pic_num_2 = 3 ;
	$("#page_wrap_2").css("width",imgw_2*pic_num_2);
	var pic_p_current_2 = 0 ;
	manageControls(pic_p_current_2);
	$("#left_btn_2").bind('click', function(){
		pic_p_current_2 = ($(this).attr('id')=='pic_left') ? pic_p_current_2+1 : pic_p_current_2-1;
	});
	$("#right_btn_2").bind('click', function(){
		pic_p_current_2 = ($(this).attr('id')=='pic_right') ? pic_p_current_2-1 : pic_p_current_2+1;
	});	
	$(".btn").bind('click', function(){
		manageControls(pic_p_current_2);
		$("#page_wrap_2").animate({'margin-left':imgw_2*(-pic_p_current_2)}, 300);
	});	
	
	
	function manageControls(position_2){
	
	if(position_2 < 0){ 
		{pic_p_current_2 = 2}
		$("#page_wrap_2").animate({'margin-left':imgw_2*(-pic_p_current_2)}, 300);
		}else if(pic_p_current_2 == 0){
		}
		else if(pic_p_current_2 == 1){
		}
		else if(pic_p_current_2 == 2){
		}		
		else if(position_2 > 2){
		{pic_p_current_2 = 0}
		$("#page_wrap_2").animate({'margin-left':imgw_2*(-pic_p_current_2)}, 300);
		}
	
	};
	
                        		
});	

$(document).ready(function()
{
	var imgw_3 = 635;
	var pic_num_3 = 3 ;
	$("#page_wrap_3").css("width",imgw_3*pic_num_3);
	var pic_p_current_3 = 0 ;
	manageControls(pic_p_current_3);
	$("#left_btn_3").bind('click', function(){
		pic_p_current_3 = ($(this).attr('id')=='pic_left') ? pic_p_current_3+1 : pic_p_current_3-1;
	});
	$("#right_btn_3").bind('click', function(){
		pic_p_current_3 = ($(this).attr('id')=='pic_right') ? pic_p_current_3-1 : pic_p_current_3+1;
	});	
	$(".btn").bind('click', function(){
		manageControls(pic_p_current_3);
		$("#page_wrap_3").animate({'margin-left':imgw_3*(-pic_p_current_3)}, 300);
	});	
	
	
	function manageControls(position_3){
	
	if(position_3 < 0){ 
		{pic_p_current_3 = 2}
		$("#page_wrap_3").animate({'margin-left':imgw_3*(-pic_p_current_3)}, 300);
		}else if(pic_p_current_3 == 0){
		}
		else if(pic_p_current_3 == 1){
		}
		else if(pic_p_current_3 == 2){
		}		
		else if(position_3 > 2){
		{pic_p_current_3 = 0}
		$("#page_wrap_3").animate({'margin-left':imgw_3*(-pic_p_current_3)}, 300);
		}
	
	};
	
                        		
});	

$(document).ready(function()
{
	$("#topbtn_1").click(function(){$('html,body').animate({scrollTop:451},500);});
	$("#topbtn_2").click(function(){$('html,body').animate({scrollTop:859},500);});
	$("#topbtn_3").click(function(){$('html,body').animate({scrollTop:1271},500);});
});