$(document).ready(function()
{
	
	
	$("#gotop").click(function(){$("html body").animate({scrollTop:(0)},400);});
	
	
var w_ow = $(window).innerWidth()  ;
var w_iw = w_ow -4 ;
var boxih = 0.85 * $(window).innerHeight();

	$("div.box_inner").css({"height":boxih});
	$(window).resize(function() {
		$("div.box_inner").css({"height":boxih});
	});
	$("html,body").css({"overflow-y" : "visible", "position":"static", "width": "100%" });		
	$("div#wrap").css({"overflow-y":"hidden"});
});




$(document).ready(function()/*bank_1 btn*/
{
	$("#topbtn_2").click(function()
	{
		$(".box_wrap").css({"display":"block"});
		$(".poppage").css({"display":"none"});
		$("#poppage_1").css({"display":"block"});
		$("div.box_wrap").css({"display":"block","float":"left"});
		$(".box").css({"display":"block"});
		$("html,body").css({"overflow-y" : "hidden", "position":"static"});
		$("html").css({"overflow-y" : "scroll", "position":"static"});
	});
	$("#topbtn_3").click(function()
	{
		$(".box_wrap").css({"display":"block"});
		$(".poppage").css({"display":"none"});
		$("#poppage_2").css({"display":"block"});
		$("div.box_wrap").css({"display":"block","float":"left"});
		$(".box").css({"display":"block"});
		$("html,body").css({"overflow-y" : "hidden", "position":"static"});
		$("html").css({"overflow-y" : "scroll", "position":"static"});
	});
	$(".FBbottom_btn").click(function()
	{
		$(".box_wrap").css({"display":"block"});
		$(".poppage").css({"display":"none"});
		$("#poppage_2").css({"display":"block"});
		$("div.box_wrap").css({"display":"block","float":"left"});
		$(".box").css({"display":"block"});
		$("html,body").css({"overflow-y" : "hidden", "position":"static"});
		$("html").css({"overflow-y" : "scroll", "position":"static"});
	});
});



$(document).ready(function()/*close btn*/
{

	/*box close part start*/
	$("div.boxbg").click(function()
	{
		$(".popwrap").css({"display":"none"});
		$(".popover").css({"display":"none"});
		$("div.box_wrap").css({"display":"none"});
		$(".box").css({"display":"none"});
		$("html,body").css({"overflow-y" : "visible", "position":"static", "width": "100%" });
		$("html body").scrollTop(2020);
	});
	
	$("div.box_close").click(function()
	{
		$(".popwrap").css({"display":"none"});
		$(".popover").css({"display":"none"});
		$("div.box_wrap").css({"display":"none"});
		$(".box").css({"display":"none"});
		$("html,body").css({"overflow-y" : "visible", "position":"static", "width": "100%" });
		$("html body").scrollTop(2020);
	});	
	
	function keyFunction() {
	if (event.keyCode==27) {
		$(".popwrap").css({"display":"none"});
		$(".popover").css({"display":"none"});
		$("div.box_wrap").css({"display":"none"});
		$(".box").css({"display":"none"});
		$("html,body").css({"overflow-y" : "visible", "position":"static", "width": "100%" });
		$("html body").scrollTop(2020);
		return false;
	} 
	}
	document.onkeydown=keyFunction;	
	/*box close part end*/

});