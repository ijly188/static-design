var gotop = function gotop(){
		$(".gotop").click(function(){
			$('html,body').animate({scrollTop:0},500);
		});
	};

var gobtn = function gobtn(){
	$(".gobtn").click(function(){
		
	var num = $(this).index();
	var pic_top = $(".item_wrap").eq(num).offset().top - 50;
	
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
			ga('send', 'event', 'act', 'click', 'disney');
		});
	}
}


$(document).ready(function()
{
	gotop();
	gobtn();
	galink();
});