var wheelrotate = function wheelrotate(){
	var wheel_radius = 238 * 0.5;	//直接填高度即可
    var wheel_padding = 8;	//物件與轉盤間padding
    var prop_total = $('.wheel_cnt').length;	//物件個數
    var prop_height = parseInt($('.wheel_cnt:first-child').css('height')) * 0.5;	//物件尺寸:高
    var prop_width = parseInt($('.wheel_cnt:first-child').css('width')) * 0.5;	//物件尺寸:寬
    var prop_angle = 2 * Math.PI / prop_total;
    var stop_angle = [];
    var wheel_status = 0;
	for( s=0 ; s<prop_total ; s++ ){
		stop_angle[s] = (s-0.5)*360/prop_total;
	}
	
	$('.wheel_cnt').each(function(){
		var prop_num = $(this).index('.wheel_cnt');
		$(this).rotate( prop_num*360/prop_total );
		$(this).css({
			left: wheel_radius + (wheel_radius-wheel_padding-prop_height) * Math.sin(prop_num*prop_angle) - prop_width , 
			top: wheel_radius - prop_height - (wheel_radius-wheel_padding-prop_height) * Math.cos(prop_num*prop_angle)
			})
	});
	$('.spin_active').bind('click', function(){
            if( wheel_status == 0 ){
                wheel_spin();
				itemeffect_start();
				itemeffect_end();
            }
	});

function wheel_spin(){
	//轉盤狀態
	wheel_status = 1;
	//中獎機率
	var wjdu = [];
	for(s=0 ; s<=prop_total ;s++){
		wjdu[s] = s;
		}
	
	//var wjdu = [0,1,2,3,4,5,6,7];
	//var vn;
	//隨機角度
	//有中的...
		vn =  Math.round( Math.random() * 10 );
		if(vn >= prop_total){
			vn = prop_total;
			vn = vn%prop_total;
			};
		a = stop_angle[wjdu[vn]] + 3 /*+ gh*/ ;
		$('#spin_wheel_wheel').rotate({
			duration: 4000,
			angle: 0,
			animateTo: -3600-a,
			easing:$.easing.easeOutQuart,
			callback: function(){
					wheel_status = 0;
					$(".wheel_cnt").eq(wjdu[vn]).css({'background-image':'url("02_img/wheel/prop'+wjdu[vn]+'.png")'});
				}
		});
		
		var slidewidth = parseInt($('.slide_pic:first-child').css('width'));		//slide_pic的寬
		var slidenum = $('.slide_pic').length;										//slide_pic的總數
		var motionspeed = 600;														//移動速度
	
		$(".slide_pic_wrap").delay(3000).animate({'margin-left':slidewidth*(-vn)}, motionspeed);
		piccurrent = vn;
	}
	
/*effect start*/
function itemeffect_start(){
	$('.effect_layer').css({'display':'block'});
	$('.itemeffect').css({'display':'block'});
	$('.effect_layer').children('img').attr('src','02_img/item/item_og.png');
	}
function itemeffect_end(){
	$('.effect_layer').delay(3500).fadeOut();
	$('.itemeffect').delay(3500).fadeOut();
	}
/*effect end*/

}