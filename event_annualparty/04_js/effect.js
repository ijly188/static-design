var gotop = function gotop(){
	$("#gotop").click(function(){$("html,body").animate({scrollTop:0},500);});
	};


var galink = function galink(){
	if ($("a").attr('href') == "http://eshop.fayaque.com.tw/"){
		$("a").bind('click',function(){
			ga('send', 'event', 'act', 'click', 'gotoemall');
		});
	}else{
		$("a").bind('click',function(){
			ga('send', 'event', 'act', 'click', 'chistmas');
		});
	}
}



		//********************************************************************//
		//********************************************************************//
		//                                                                    //
		//          ********    ********     *******     ********             //
		//          ********    **           **          ********             //
		//             **       ********     *******        **                //
		//             **       **                **        **                //
		//             **       ********     *******        **                //
		//                                                                    //
		//********************************************************************//
		//********************************************************************//
																			  //writer by 188
		
		
var sldieshow = function sldieshow(){
				
	//var slidewidth = parseInt($('.slide_pic:first-child').attr('width'));		//slide_pic的寬
	//var slideheight = parseInt($('.slide_pic:first-child').attr('height'));		//slide_pic的高
	var slidewidth = 974;
	var slideheight = 412;
	var slidenum = $('.slide_pic').length / 2;										
	//slide_pic的總數
	piccurrent = 0 ;															//第幾個
	var motionspeed = 600;														//移動速度
	
	$(".slide_pic_wrap").css({"width": slidewidth * slidenum });
	$(".slide_pic_wrap").css({"height": slideheight});
	
	$(".slide_pic").css({"width": slidewidth});
	$(".slide_pic").css({"height": slideheight});
	

	$(".slide_btn_side").bind('click', function(){
		if( !$(".slide_pic_wrap").is(':animated') ){							//判定是否在animate
				
			if($(this).attr('class')=='slide_btn_side slide_btn_left'){
				piccurrent = piccurrent -1;
			}
			else{
				piccurrent = piccurrent +1;
			}
			
			manageControls(piccurrent);
			$(".slide_pic_wrap").animate({'margin-left':slidewidth*(-piccurrent)}, motionspeed);
			$('.effect_layer').delay(500).fadeOut();
			$('.itemeffect').delay(500).fadeOut();
		}
	});
	
	function manageControls(position){	
		if(position<0){ 
			{piccurrent = slidenum-1}
			$(".slide_pic_wrap").animate({'margin-left':slidewidth*(-piccurrent)}, motionspeed);
		}else if(position>slidenum-1){
			{piccurrent = 0}
			$(".slide_pic_wrap").animate({'margin-left':slidewidth*(-piccurrent)}, motionspeed);
		}
	};
}

//all-switch
$(document).ready(function()
{
	wheelrotate();
	gotop();
	galink();
	sldieshow();
});