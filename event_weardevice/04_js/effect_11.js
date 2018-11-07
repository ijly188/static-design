var piccurrent = function piccurrent(){
	
	var num = 0;
	var position = 0;
	var piccurrent_all = $(".piccurrent").length;
	
	var imgw = 635;
	var imgh = 295;
	var pic_num = $(".piccurrent").eq(num).children(".itempage").length;
	var pic_num_l = $(".piccurrent").eq(num).children(".itempage:last").index();
	
	//先把格子打出來
	$(".item_demo").css({"width" : imgw, "height":imgh});
	$(".itempage").css({"width" : imgw, "height":imgh});
	$(".piccurrent").css({"width":imgw*pic_num,"height":imgh,"float":"left"});
	
	
	//按鍵
	$(".leftbtn").click(function()
	{
		
		position == position--;
		if( position < 0){
			position = pic_num_l;
			$(this).siblings(".item_demo").children(".piccurrent").animate({'margin-left':-imgw *position}, 300);
		}else if( position > pic_num_l ){
			position = 0;
			$(this).siblings(".item_demo").children(".piccurrent").animate({'margin-left':-imgw *position}, 300);
		}else if( 0 <= position <= pic_num_l ){
			$(this).siblings(".item_demo").children(".piccurrent").animate({'margin-left':-imgw *position}, 300);
		}
		
	});
	$(".rightbtn").click(function()
	{
		
		position == position++;
		if( position < 0 ){
			position = pic_num_l;
			$(this).siblings(".item_demo").children(".piccurrent").animate({'margin-left':-imgw *position}, 300);
		}else if( position > pic_num_l ){
			position = 0;
			$(this).siblings(".item_demo").children(".piccurrent").animate({'margin-left':-imgw *position}, 300);
		}else if( 0 <= position <= pic_num_l){
			$(this).siblings(".item_demo").children(".piccurrent").animate({'margin-left':-imgw *position}, 300);
		}
		
	});
	
	
	
};

var gobtn = function gobtn(){
	$(".topbtn").click(function(){
		
	var num = $(this).index();
	var pic_top = $(".item_demo").eq(num-1).offset().top - 20;
	
	$('html,body').animate({scrollTop:pic_top},500);
		});	
	};
	
var galink = function galink(){
	if ($("a").attr('href') == "http://eshop.fayaque.com.tw/"){
		$("a").bind('click',function(){
			ga('send', 'event', 'act', 'click', 'gotoemall');
		});
	}else{
		$("a").bind('click',function(){
			ga('send', 'event', 'act', 'click', 'weardevice');
		});
	}
}



$(document).ready(function()
{
	piccurrent();
	gobtn();
	galink();
});