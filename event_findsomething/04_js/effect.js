var gotop = function gotop(){
	if( !$("html,body").is(':animated') ){
		$(".gotop").click(function(){$("html,body").animate({scrollTop:0},500);});
	}
};

var goto = function goto(){
	var gotoT = ($(".item_menu_wrap").offset().top)-125;
	if( !$("html,body").is(':animated') ){
		$(".rightbtn").click(function(){$("html,body").animate({scrollTop:gotoT},500);});
		$(".item_menu_btn").click(function(){$("html,body").animate({scrollTop:gotoT},500);});
	}
	};


var galink = function galink(){
	if ($("a").attr('href') == "http://eshop.fayaque.com.tw/"){
		$("a").bind('click',function(){
			ga('send', 'event', 'act', 'click', 'gotoemall');
		});
	}else{
		$("a").bind('click',function(){
			ga('send', 'event', 'act', 'click', 'findsomething');
		});
	}
}


var menubtn = function menubtn(){
	$(".item_menu_btn, .rightbtn").click(function(){
		num = $(this).index();
		
		$(".item_menu_pic").css({"display" : "none"});
		$(".item_menu_pic").eq(num).css({"display" : "block"});
		
		$(".item_findpic").css({"display" : "none"});
		$(".item_findpic").eq(num+1).css({"display" : "block"});
		
		$(".targetitem").click(function(){		
			$(".targetitem").eq(num).find(".itemlink").css({"display":"block"});
			$(".targetitem").eq(num).parent(".item_findpic").css({"background-image":"url(02_img/item/item/item_"+(num+1)+"_p.png)"});
			$(".item_menu_btn").eq(num).css({"background-image" : "url(02_img/item/topbtn/menubtn_"+(num+1)+"_m.png)"});
		});
	});	
};


var clickeffect = function clickeffect(){
	$("html").click(function(){
		var clickpositionX = event.pageX;
		var clickpositionY = event.pageY;
		if( !$(".clickeffect").is(':animated') ){
			$(".clickeffect").css({"top" : clickpositionY,"left" : clickpositionX});
			$(".clickeffect").fadeIn(300).fadeOut(300);
		};
	});
};




$(document).ready(function()
{
	gotop();
	goto();
	galink();
	menubtn();
	clickeffect();
});