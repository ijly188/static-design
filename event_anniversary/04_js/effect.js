


/*pic 1 effect start*/
var x = 0;
	function changepic()
	{
		x = x+1
		if (x>9 | x<0)
		{
			x=1;
			document.am.displayBox.value=x
			setTimeout('changepic($("#pickline").attr("src","02_img/page/logo/logo_" + x + ".png"))', 200)			
		}
		else
		{
			document.am.displayBox.value=x
			setTimeout('changepic($("#pickline").attr("src","02_img/page/logo/logo_" + x + ".png"))', 200)			
		}
	}
	
/*pic 1 effect end*/


$(document).ready(function()
{
var w_ow = $(window).innerWidth() ;
var w_ih = $(window).innerHeight();
var boxih = 0.85 * $(window).innerHeight();

	$("div.box_inner").css({"height":boxih});
	$(window).resize(function() {
		$("div.box_inner").css({"height":boxih});
	});

	$("#rightscroll").css({"height":w_ih});
	
	$("#tagbtnbg_1").css({"display":"block"});
	$("#dmlist_1").css({"display":"block"});	
	$("#more_item_1").css({"display":"block"});
});


//bank btn
$(document).ready(function()/*bank_1 btn*/
{
	$("#rightbtn_2").click(function()
	{
		$("div#bank_1").css({"display":"block"});
		$("div#bank_2").css({"display":"none"});	
		$("div.box_wrap").css({"display":"block"});				
		$("html,body").css({"overflow-y" : "hidden", "position":"static"});		
		$("div#bd_wrap").css({"overflow-y" : "hidden","margin-left":"-8.5px","width":"100%"});
		$("div.box_inner").scrollTop(0);
	});
	$("div.boxbg").click(function()
	{
		$("div.box_wrap").css({"display":"none"});
		$("div#bank_1").css({"display":"none"});
		$("div#bank_2").css({"display":"none"});
		$("html,body").css({"overflow-y" : "static", "position":"static", "width": "100%" });
		$("div#bd_wrap").css({"margin-left":"0px"});
	});
	
	$("div.box_close").click(function()
	{
		$("div.box_wrap").css({"display":"none"});
		$("div#bank_1").css({"display":"none"});
		$("div#bank_2").css({"display":"none"});
		$("html,body").css({"overflow-y" : "auto", "position":"static", "width": "100%" });
		$("div#bd_wrap").css({"margin-left":"0px"});
	});	
	
	function keyFunction() {
	if (event.keyCode==27) {
		$("div.box_wrap").css({"display":"none"});
		$("div#bank_1").css({"display":"none"});
		$("div#bank_2").css({"display":"none"});
		$("html,body").css({"overflow-y" : "auto", "position":"static", "width": "100%" });
		$("div#bd_wrap").css({"margin-left":"0px"});
		return false;
	} 
	}
	document.onkeydown=keyFunction;	
});

$(document).ready(function()/*bank_2 btn*/
{
	$("#rightbtn_3").click(function()
	{
		$("div#bank_1").css({"display":"none"});
		$("div#bank_2").css({"display":"block"});	
		$("div.box_wrap").css({"display":"block"});				
		$("html,body").css({"overflow-y" : "hidden", "position":"static"});		
		$("div#bd_wrap").css({"overflow-y" : "hidden","margin-left":"-8.5px","width":"100%"});
		$("div.box_inner").scrollTop(0);
	});
	$("div.boxbg").click(function()
	{
		$("div.box_wrap").css({"display":"none"});
		$("div#bank_1").css({"display":"none"});
		$("div#bank_2").css({"display":"none"});
		$("html,body").css({"overflow-y" : "auto", "position":"static", "width": "100%"});
		$("div#bd_wrap").css({"margin-left":"0px"});
	});
	$("div.box_close").click(function()
	{
		$("div.box_wrap").css({"display":"none"});
		$("div#bank_1").css({"display":"none"});
		$("div#bank_2").css({"display":"none"});
		$("html,body").css({"overflow-y" : "auto", "position":"static", "width": "100%"});
		$("div#bd_wrap").css({"margin-left":"0px"});
	});
	function keyFunction() {
	if (event.keyCode==27) {
		$("div.box_wrap").css({"display":"none"});
		$("div#bank_1").css({"display":"none"});
		$("div#bank_2").css({"display":"none"});
		$("html,body").css({"overflow-y" : "auto", "position":"static", "width": "100%"});
		$("div#bd_wrap").css({"margin-left":"0px"});
		return false;
	} 
	}
	document.onkeydown=keyFunction;	
});

/*btn end*/

$(document).ready(function()/*bank_1 btn*/
{
	$("#buybtn").mouseover(function(){$("#buybtn_color").css({"display":"block"})});
	$("#buybtn").mouseout(function(){$("#buybtn_color").css({"display":"none"});});	
	
	$("#tagbtn_1").mouseover(function(){$("#tagbtn_1").css({"background-image":"url(02_img/page/tagbtn/btn0.png)"})});
	$("#tagbtn_1").mouseout(function(){$("#tagbtn_1").css({"background-image":""});});
	$("#tagbtn_2").mouseover(function(){$("#tagbtn_2").css({"background-image":"url(02_img/page/tagbtn/btn1.png)"})});
	$("#tagbtn_2").mouseout(function(){$("#tagbtn_2").css({"background-image":""});});
	$("#tagbtn_3").mouseover(function(){$("#tagbtn_3").css({"background-image":"url(02_img/page/tagbtn/btn2.png)"})});
	$("#tagbtn_3").mouseout(function(){$("#tagbtn_3").css({"background-image":""});});
	$("#tagbtn_4").mouseover(function(){$("#tagbtn_4").css({"background-image":"url(02_img/page/tagbtn/btn3.png)"})});
	$("#tagbtn_4").mouseout(function(){$("#tagbtn_4").css({"background-image":""});});
	
	$("#tagbtn_1").click(function(){
		$("#tagbtnbg_1").css({"display":"block"});
		$("#tagbtnbg_1").parent().siblings().children().css({"display":"none"});
		$(".more_item").css({"display":"none"});
		$("#more_item_1").css({"display":"block"});
		$(".item").css({"display":"none"});
		$("#dmlist_1").css({"display":"block"});
	});
	$("#tagbtn_2").click(function(){
		$("#tagbtnbg_2").css({"display":"block"});
		$("#tagbtnbg_2").parent().siblings().children().css({"display":"none"});
		$(".more_item").css({"display":"none"});
		$("#more_item_2").css({"display":"block"});
		$(".item").css({"display":"none"});
		$("#dmlist_2").css({"display":"block"});
	});
	$("#tagbtn_3").click(function(){
		$("#tagbtnbg_3").css({"display":"block"});
		$("#tagbtnbg_3").parent().siblings().children().css({"display":"none"});
		$(".more_item").css({"display":"none"});
		$("#more_item_3").css({"display":"block"});
		$(".item").css({"display":"none"});
		$("#dmlist_3").css({"display":"block"});
	});
	$("#tagbtn_4").click(function(){
		$("#tagbtnbg_4").css({"display":"block"});
		$("#tagbtnbg_4").parent().siblings().children().css({"display":"none"});
		$(".more_item").css({"display":"none"});
		$("#more_item_4").css({"display":"block"});
		$(".item").css({"display":"none"});
		$("#dmlist_4").css({"display":"block"});
	});
});