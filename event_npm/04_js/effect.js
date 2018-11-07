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
	
	$(".card").css({"margin-top":"57px"});
	/*$(".card").mouseenter(function(){$(".card").animate({"margin-top":"57px"})});
	$(".card").mouseleave(function(){$(".card").animate({"margin-top":"-40px"});});	*/
});

$(document).ready(function()
{
	$("#bottom").css({"display":"none"});
	$("#contain").css({"display":"none"});
	$("#topbalckbar").css({"display":"none"});
	$("#fronteffect").css({"display":"block"});
	
	
	$("#memorials").delay(1000).fadeIn(1500);
	$("#pen").delay(2000).fadeIn(1500);
	$("#slogan").delay(3500).fadeIn(2000);
	$("#ikown").delay(3500).fadeIn(2000);
	
	
	$("#slogan").delay(3000).fadeOut(1500);
	$("#ikown").delay(3000).fadeOut(1500);	
	$("#pen").delay(4000).fadeOut(3000);
	$("#memorials").delay(5000).fadeOut(3000);
	
	
	$("#fronteffect").delay(6000).fadeOut(3000);
	$("html,body").scrollTop(0);
	$("#bottom").delay(6000).fadeIn(1500);
	$("#contain").delay(6000).fadeIn(1500);
	$("#topbalckbar").delay(6000).fadeIn(1500);
		
});



//bank btn
$(document).ready(function()/*bank_1 btn*/
{
	$(".card").click(function()
	{
		$("div#bank_1").css({"display":"block"});
		$("div.box_wrap").css({"display":"block"});				
		$("html,body").css({"overflow-y" : "hidden"});		
		$("div#bd_wrap").css({"margin-left":"-9px","width":"100%"});
		//$("div#topbalckbar").css({"margin-left":"1.5px"});
		$("div.box_inner").scrollTop(0);
	});
	$("div.boxbg").click(function()
	{
		$("div.box_wrap").css({"display":"none"});
		$("div#bank_1").css({"display":"none"});
		$("html,body").css({"overflow-y" : "visible"});
		$("div#bd_wrap").css({"margin-left":"0px","width":"100%"});
		$("div#topbalckbar").css({"margin-left":"0px"});
		$("div#bd_wrap").css({"margin-left":"0px"});
	});
	
	$("div.box_close").click(function()
	{
		$("div.box_wrap").css({"display":"none"});
		$("div#bank_1").css({"display":"none"});
		$("html,body").css({"overflow-y" : "visible"});
		$("div#bd_wrap").css({"margin-left":"0px","width":"100%"});
		$("div#topbalckbar").css({"margin-left":"0px"});
		$("div#bd_wrap").css({"margin-left":"0px"});
	});	
	
	function keyFunction() {
	if (event.keyCode==27) {
		$("div.box_wrap").css({"display":"none"});
		$("div#bank_1").css({"display":"none"});
		$("html,body").css({"overflow-y" : "visible"});
		$("div#bd_wrap").css({"margin-left":"0px","width":"100%"});
		$("div#topbalckbar").css({"margin-left":"0px"});
		$("div#bd_wrap").css({"margin-left":"0px"});
		return false;
	} 
	}
	document.onkeydown=keyFunction;	
});
/*btn end*/

$(document).ready(function()
{
	$(".topbtn_1").click(function(){$(".dm").css({"display":"none"});$("#dm_1").fadeIn(500);});
	$(".topbtn_2").click(function(){$(".dm").css({"display":"none"});$("#dm_2").fadeIn(500);});
	$(".topbtn_3").click(function(){$(".dm").css({"display":"none"});$("#dm_3").fadeIn(500);});
	$(".topbtn_4").click(function(){$(".dm").css({"display":"none"});$("#dm_4").fadeIn(500);});
	$("#dm_1_l .centerbtn_l").click(function(){$(".dm").css({"display":"none"});$("#dm_2").fadeIn(500);});
	$("#dm_2_l .centerbtn_l").click(function(){$(".dm").css({"display":"none"});$("#dm_3").fadeIn(500);});
	$("#dm_3_l .centerbtn_l").click(function(){$(".dm").css({"display":"none"});$("#dm_4").fadeIn(500);});
	$("#dm_4_l .centerbtn_l").click(function(){$(".dm").css({"display":"none"});$("#dm_1").fadeIn(500);});
	$("#dm_1_r .centerbtn_r").click(function(){$(".dm").css({"display":"none"});$("#dm_2").fadeIn(500);});
	$("#dm_2_r .centerbtn_r").click(function(){$(".dm").css({"display":"none"});$("#dm_3").fadeIn(500);});
	$("#dm_3_r .centerbtn_r").click(function(){$(".dm").css({"display":"none"});$("#dm_4").fadeIn(500);});
	$("#dm_4_r .centerbtn_r").click(function(){$(".dm").css({"display":"none"});$("#dm_1").fadeIn(500);});
});