$(document).ready(function()
{
	var imgw = 838;
	var pic_num = 3 ;
	$("#page_wrap").css("width",imgw*pic_num);
	var pic_p_current = 0 ;
	manageControls(pic_p_current);
	$("#left_btn").bind('click', function(){
		pic_p_current = ($(this).attr('id')=='pic_left') ? pic_p_current+1 : pic_p_current-1;
	});
	$("#right_btn").bind('click', function(){
		pic_p_current = ($(this).attr('id')=='pic_right') ? pic_p_current-1 : pic_p_current+1;
	});	
	$(".btn").bind('click', function(){
		manageControls(pic_p_current);
		$("#page_wrap").animate({'margin-left':imgw*(-pic_p_current)}, 500);
	});	
	
	
	function manageControls(position){
	
	if(position<0){ 
		{pic_p_current = 2}
		$("#page_wrap").animate({'margin-left':imgw*(-pic_p_current)}, 500);
		$("#more_1").css("display","none")
		$("#more_2").css("display","none")
		$("#more_3").css("display","block")
		}else if(pic_p_current == 0){
		$("#more_1").css("display","block")
		$("#more_2").css("display","none")
		$("#more_3").css("display","none")
		}
		else if(pic_p_current == 1){
		$("#more_1").css("display","none")
		$("#more_2").css("display","block")
		$("#more_3").css("display","none")
		}
		else if(pic_p_current == 2){
		$("#more_1").css("display","none")
		$("#more_2").css("display","none")
		$("#more_3").css("display","block")
		}		
		else if(position>2){
		{pic_p_current = 0}
		$("#page_wrap").animate({'margin-left':imgw*(-pic_p_current)}, 500);
		$("#more_1").css("display","block")
		$("#more_2").css("display","none")
		$("#more_3").css("display","none")		
		}
	
	};
	
                        		
});	
