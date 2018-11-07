function gotop(){
	$("#gotop").click(function(){$('html,body').animate({scrollTop:0},500);});
	};

function row1(){
	$("#item_row_1").children().mouseover(function(){$("#item_row_2").css("margin-top","75px");});
	$("#item1").mouseover(function(){$("#item1").css({"background-image":"url(./02_img/page/1_m.png)","height":"416px"});});
	$("#item2").mouseover(function(){$("#item2").css({"background-image":"url(./02_img/page/2_m.png)","height":"416px"});});
	$("#item3").mouseover(function(){$("#item3").css({"background-image":"url(./02_img/page/3_m.png)","height":"416px"});});
	};
	
function row2(){
	$("#item_row_2").children().mouseover(function(){$("#item_row_3").css("margin-top","76px");});
	$("#item4").mouseover(function(){$("#item4").css({"background-image":"url(./02_img/page/4_m.png)","height":"416px"});});
	$("#item5").mouseover(function(){$("#item5").css({"background-image":"url(./02_img/page/5_m.png)","height":"416px"});});
	$("#item6").mouseover(function(){$("#item6").css({"background-image":"url(./02_img/page/6_m.png)","height":"416px"});});
	};
	
function row3(){
	$("#item_row_3").children().mouseover(function(){$("#item_row_4").css("margin-top","77px");});
	$("#item7").mouseover(function(){$("#item7").css({"background-image":"url(./02_img/page/7_m.png)","height":"416px"});});
	$("#item8").mouseover(function(){$("#item8").css({"background-image":"url(./02_img/page/8_m.png)","height":"416px"});});
	$("#item9").mouseover(function(){$("#item9").css({"background-image":"url(./02_img/page/9_m.png)","height":"416px"});});
	};
	
function row4(){
	$("#item10").mouseover(function(){$("#item10").css({"background-image":"url(./02_img/page/10_m.png)","height":"416px"});});
	$("#item11").mouseover(function(){$("#item11").css({"background-image":"url(./02_img/page/11_m.png)","height":"416px"});});
	$("#item12").mouseover(function(){$("#item12").css({"background-image":"url(./02_img/page/12_m.png)","height":"416px"});});
	};

$(document).ready(function()
{
	gotop();
	row1();
	row2();
	row3();
	row4();
	
});