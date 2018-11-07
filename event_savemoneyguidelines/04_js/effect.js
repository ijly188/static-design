var gotop = function gotop(){
	$("#gotop").click(function(){$('html,body').animate({scrollTop:0},500);});
	};

var popover = function popover(){
	$("li").mouseenter(function(){
	if( !$(this).is(':animated') ){//判定是否在animate
		$(this).children("div").fadeIn(500);
		}
	});
	$("li").mouseleave(function(){
		$(this).children("div").stop(true).fadeOut(500);//.stop(true)停止動畫
	});
	};
	
var galink = function galink(){
	if ($("a").attr('href') == "http://eshop.fayaque.com.tw/"){
		$("a").bind('click',function(){
			ga('send', 'event', 'act', 'click', 'gotoemall');
		});
	}else{
		$("a").$(this).bind('click',function(){
			ga('send', 'event', 'act', 'click', 'savemoneyguidelines');
		});
	}
}

$(document).ready(function()
{
	gotop();
	popover();
	galink();
});