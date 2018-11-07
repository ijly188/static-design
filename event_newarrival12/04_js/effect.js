var rbtnposition = function rbtnposition(){											//rightbtn位置 start
	var h = window.innerHeight
	|| document.documentElement.clientHeight
	|| document.body.clientHeight;
	var w = window.innerWidth
	|| document.documentElement.clientWidth
	|| document.body.clientWidth;
	
	if (w < 1601){$(".right_wrap").css({"top":"initial","bottom":"-15%","right":"-6%"});}
	else{$(".right_wrap").css({"top":"120%","bottom":"initial","right":"-30%"});}
	};																				//rightbtn位置 end



var newarrivaleffect = function newarrivaleffect(){									//newarrivaleffect的換頁特效 start
	var imgh = 798;																	//定義每一頁面高
	var imgw = 1097;																//定義每一頁面寬
	var pic_num = $(".item_w").length;												//總共幾個
	$("#page_wrap").css("width",imgw);												//飄移總寬
	$("#page_wrap").css("height",pic_num * imgh);									//飄移總高
	
	
	//mouseenter &mouseleave
	$(".right").mouseenter(function(){
		var num = $(this).index();													//右邊按鈕第幾個(-1)
		$(".right_o").eq(num).animate({'margin-left':'-33px'},0);
		$(".right_o").eq(num).css("display","block");
		$(".right_m").eq(num).css("display","none");
	});
	$(".right").mouseleave(function(){
		var num = $(this).index();													//右邊按鈕第幾個(-1)
		$(".right_o").eq(num).animate({'margin-left':'0px'},0);
		$(".right_o").eq(num).css("display","none");
		$(".right_m").eq(num).css("display","block");
	});
	
	//click event
	$(".right").click(function(){
		var num = $(this).index();													//右邊按鈕第幾個(-1)
		$("#bd_wrap").css("background-image","url(02_img/bg_0"+(num+1)+".jpg)");
		$("#page_wrap").animate({'margin-top':-imgh*num}, 1500);
	});
	};																				//newarrivaleffect的換頁特效 end



var galink = function galink(){														//galink start
	if ($("a").attr('href') == "http://eshop.fayaque.com.tw/"){
		$("a").bind('click',function(){
			ga('send', 'event', 'act', 'click', 'gotoemall');
		});
	}else{
		$("a").bind('click',function(){
			ga('send', 'event', 'act', 'click', 'newarrival_12');
		});
	}
};																					//galink end




$(document).ready(function()
{
	rbtnposition();
	newarrivaleffect();
	galink();
});