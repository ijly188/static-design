var galink = function galink(){
	if ($("a").attr('href') == "http://eshop.fayaque.com.tw/"){
		$("a").bind('click',function(){
			ga('send', 'event', 'act', 'click', 'gotoemall');
		});
	}else{
		$("a").bind('click',function(){
			ga('send', 'event', 'act', 'click', 'childrenspeaker');
		});
	}
}

var gotop = function gotop(){
	$("#gotop").click(function(){$("html,body").animate({scrollTop:0},500);});
	};

$(document).ready(function()
{
	galink();
	gotop();
});