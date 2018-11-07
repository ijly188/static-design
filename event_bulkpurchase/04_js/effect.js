$(document).ready(function()
{	
	/*gotop start*/
	$("#gotop").click(function(){
		$('html,body').animate({scrollTop:0 },1500);
	});
	/*gotop end*/
	/*mouseenter start*/
	$(".item_w").mouseenter(function(){$(this).find(".item_m").animate({'margin-top':'-239px'},400);});
	$(".item_w").mouseleave(function(){$(this).find(".item_m").animate({'margin-top':'-166px'},200);});
	return false;
	/*mouseleave end*/
	

});