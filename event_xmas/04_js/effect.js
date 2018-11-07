var gotop = function gotop(){
	$("#gotop").click(function(){$("html,body").animate({scrollTop:0},500);});
	};


var clickpopbtn = function clickpopbtn(){
	$(".rightbtn").click(function(){
		var itemid = 0;
		$(".box_wrap").css({"display":"block"});
		$(".poppage").css({"display":"none"});
		$(".poppage").eq(itemid).css({"display":"block"});
		/*$(".poppage").eq(itemid).children("a").children(".poppage_content").css({"background-image":"url(02_img/page/page" + (itemid+1) + ".png)","display":"block"});*/
		$(".box").css({"display":"block"});
		/*$(".box").css({"background-image":"url(02_img/page/page" + (itemid+1) + "_bg.png)","display":"block"});*/
		
		$("html,body").css({"overflow" : "hidden"});
		$("body").css({"margin-left" : "-17px"});
	});
};

var closepopbtn = function closepopbtn(){
	/*box close part start*/
	$("div.boxbg").click(function()
	{
		$(".popwrap").css({"display":"none"});
		$(".popover").css({"display":"none"});
		$(".box_wrap").css({"display":"none"});
		$(".box").css({"display":"none"});
		$("html,body").css({"overflow" : "auto"});
		$("body").css({"margin-left" : "0px"});
	});
	
	$("div.box_close").click(function()
	{
		$(".popwrap").css({"display":"none"});
		$(".popover").css({"display":"none"});
		$(".box_wrap").css({"display":"none"});
		$(".box").css({"display":"none"});
		$("html,body").css({"overflow" : "auto"});
		$("body").css({"margin-left" : "0px"});
	});	
	
	function keyFunction() {
	if (event.keyCode==27) {
		$(".popwrap").css({"display":"none"});
		$(".popover").css({"display":"none"});
		$(".box_wrap").css({"display":"none"});
		$(".box").css({"display":"none"});
		$("html,body").css({"overflow" : "auto"});
		$("body").css({"margin-left" : "0px"});
		return false;
	} 
	}
	document.onkeydown=keyFunction;	
	/*box close part end*/
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


var itemeffect = function itemeffect(){
	$(".item").mouseenter(function(){
		var itemnum = $(this).index(".item");
		$(".item").eq(itemnum).css({"background-image":"url(02_img/item/"+(itemnum+1)+"_m.png"});
	});
}


$(document).ready(function()
{
	$("html,body").css({"overflow-x" : "visible","overflow-y" : "initial"});
	gotop();
	galink();
	clickpopbtn();
	closepopbtn();
	itemeffect();
});