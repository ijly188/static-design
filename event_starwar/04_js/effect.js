$(document).ready(function()
{
	var imgw_1 = 910;
	var pic_num_1 = 2 ;
	$("#page_wrap_1").css("width",imgw_1*pic_num_1);
	var pic_p_current_1 = 0 ;
	manageControls(pic_p_current_1);
	$("#left_btn_1").bind('click', function(){
		pic_p_current_1 = ($(this).attr('id')=='pic_left') ? pic_p_current_1+1 : pic_p_current_1-1;
	});
	$("#right_btn_1").bind('click', function(){
		pic_p_current_1 = ($(this).attr('id')=='pic_right') ? pic_p_current_1-1 : pic_p_current_1+1;
	});	
	$(".btn").bind('click', function(){
		manageControls(pic_p_current_1);
		$("#page_wrap_1").animate({'margin-left':imgw_1*(-pic_p_current_1)}, 300);
	});	
	
	
	function manageControls(position_1){
	
	if(position_1<0){ 
		{pic_p_current_1 = 1}
		$("#page_wrap_1").animate({'margin-left':imgw_1*(-pic_p_current_1)}, 300);
		}else if(pic_p_current_1 == 0){
		}
		else if(pic_p_current_1 == 1){
		}			
		else if(position_1>1){
		{pic_p_current_1 = 0}
		$("#page_wrap_1").animate({'margin-left':imgw_1*(-pic_p_current_1)}, 300);
		}
	
	};
	
                        		
});	

$(document).ready(function()
{
	var imgw_2 = 910;
	var pic_num_2 = 2 ;
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
	
	if(position_2<0){ 
		{pic_p_current_2 = 1}
		$("#page_wrap_2").animate({'margin-left':imgw_2*(-pic_p_current_2)}, 300);
		}else if(pic_p_current_2 == 0){
		}
		else if(pic_p_current_2 == 1){
		}			
		else if(position_2>1){
		{pic_p_current_2 = 0}
		$("#page_wrap_2").animate({'margin-left':imgw_2*(-pic_p_current_2)}, 300);
		}
	
	};
	
                        		
});
