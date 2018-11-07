var dfsit = function dfsit(){
	var w_ow = $(window).innerWidth();
	var w_iw = w_ow -4;
	var boxih = 0.85 * $(window).innerHeight();

	$("div.box_inner").css({"height":boxih});
	$(window).resize(function(){
		$("div.box_inner").css({"height":boxih});
		});
};


var galink = function galink(){
	if ($("a").attr('href') == "http://eshop.fayaque.com.tw/"){
		$("a").bind('click',function(){
			ga('send', 'event', 'act', 'click', 'gotoemall');
		});
	}else{
		$("a").bind('click',function(){
			ga('send', 'event', 'act', 'click', 'bank');
		});
	}
}

var popovereffect = function popovereffect(){
	/*open*/
	$(".bankbtn").bind("click",function(){
		var num = $(this).index();
		$(".box_wrap").css({"display":"block","overflow-y":"scroll"});
		$(".bank").css({"display":"none"}).eq(num).css({"display":"block"});
		$("html,body").css({"overflow-y" : "hidden"});
		$("#wrap").css({"overflow-y":"scroll","margin-left":"-18px"});
		$("#footer").css({"margin-left":"18px"});
		$("#top").css({"margin-left":"-3px"});
		$(".box_inner").scrollTop(0);
		});
	/*close*/
	function closeeffect(){
		$(".box_wrap, .bank").css({"display":"none"});
		$("html,body").css({"overflow-y" : "auto", "position":"static", "width": "100%"});
		$("#wrap").css({"overflow-y":"hidden","margin-left":"0px"});
		$("#footer").css({"margin-left":"0px"});
		$("#top").css({"margin-left":"-12px"});
		};
	$(".boxbg, .box_close").bind("click",function(){
		closeeffect();
		});
	function keyFunction(){
		if (event.keyCode==27){
			closeeffect();
			return false;
		}};
	document.onkeydown=keyFunction;
};

$(document).ready(function(){
	dfsit();
	galink();
	popovereffect();
});