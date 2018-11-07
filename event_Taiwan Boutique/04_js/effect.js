var gotop = function gotop(){
	$("#gotop").click(function(){$("html,body").animate({scrollTop:0},500);});
	};


var gobottom = function gobottom(){
	$(".introbtn").click(function(){$("html,body").animate({scrollTop:767},500);});
	};


var clickpopbtn = function clickpopbtn(){
	$(".item").click(function(){
		var itemid = $(this).index('.item');
		$(".box_wrap").css({"display":"block"});
		$(".poppage").css({"display":"none"});
		$(".poppage").eq(itemid).css({"display":"block"});
		$(".poppage").eq(itemid).children("a").children(".poppage_content").css({"background-image":"url(02_img/page/page" + (itemid+1) + ".png)","display":"block"});
		$(".box").css({"background-image":"url(02_img/page/page" + (itemid+1) + "_bg.png)","display":"block"});
		
		$("html,body").css({"overflow" : "hidden"});
		$("body").css({"margin-left" : "-17px"});
	});
};

var closepopbtn = function closepopbtn(){
	/*box close part start*/
	function closepopover(){
		$(".popwrap").css({"display":"none"});
		$(".popover").css({"display":"none"});
		$(".box_wrap").css({"display":"none"});
		$(".box").css({"display":"none"});
		$("html,body").css({"overflow" : "auto"});
		$("body").css({"margin-left" : "0px"});
		};
	$(".boxbg, .box_close").click(function()
	{
		closepopover();
	});
	
	function keyFunction() {
	if (event.keyCode==27) {
		closepopover();
		return false;
	} 
	}
	document.onkeydown=keyFunction;	
	/*box close part end*/
};

$(document).ready(function()
{
	$("html,body").css({"overflow-x" : "visible","overflow-y" : "initial"});
	gotop();
	gobottom();
	clickpopbtn();
	closepopbtn();
});