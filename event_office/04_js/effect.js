$(document).ready(function()
{	

	
	$("#gotop").click(function(){$('html,body').animate({scrollTop:0 },400);});
	
	var click_times = 0;
	
	$(".count_btn").click(function(){
		e = $(this).attr("class");
		$("#skipfirst").css({"display":"none"});//display:none skipfirst
		$("#skip").css({"display":"block"});//display:none skipfirst
		//1st time click start
		if(e == "count_btn countup_btn castle"){//1
			click_times = click_times + 1;
			$(".castle").removeClass("countup_btn");
			/*13 start*/
			if(click_times != 13){
				$(".castle .situation").css({"display":"block","background-image":"url(02_img/page/found.png)"});
				//alert("被發現了啊");
			}
			else if(click_times = 13){
				$(".castle .situation").css({"display":"block","background-image":"url(02_img/page/found.png)"});
				$(".youwin").css({"display":"block","background-image":"url(02_img/page/youwin.png)"});
				$("#skip").css({"display":"none"});
				$("#skipfirst").css({"display":"none"});
				//alert("你贏惹啊啊啊");
			}
			/*13 end*/
		}
		else if(e == "count_btn countup_btn dvd"){//2
			click_times = click_times + 1;
			$(".dvd").removeClass("countup_btn");
			/*13 start*/
			if(click_times != 13){
				$(".dvd .situation").css({"display":"block","background-image":"url(02_img/page/found.png)"});
			}
			else if(click_times = 13){
				$(".dvd .situation").css({"display":"block","background-image":"url(02_img/page/found.png)"});
				$(".youwin").css({"display":"block","background-image":"url(02_img/page/youwin.png)"});
				$("#skip").css({"display":"none"});
				$("#skipfirst").css({"display":"none"});
			}
			/*13 end*/
		}
		else if(e == "count_btn countup_btn coffeecup"){//3
			click_times = click_times + 1;
			$(".coffeecup").removeClass("countup_btn");
			/*13 start*/
			if(click_times != 13){
				$(".coffeecup .situation").css({"display":"block","background-image":"url(02_img/page/found.png)"});
			}
			else if(click_times = 13){
				$(".coffeecup .situation").css({"display":"block","background-image":"url(02_img/page/found.png)"});
				$(".youwin").css({"display":"block","background-image":"url(02_img/page/youwin.png)"});
				$("#skip").css({"display":"none"});
				$("#skipfirst").css({"display":"none"});
			}
			/*13 end*/
		}
		else if(e == "count_btn countup_btn carbu"){//4
			click_times = click_times + 1;
			$(".carbu").removeClass("countup_btn");
			/*13 start*/
			if(click_times != 13){
				$(".carbu .situation").css({"display":"block","background-image":"url(02_img/page/found.png)"});
			}
			else if(click_times = 13){
				$(".carbu .situation").css({"display":"block","background-image":"url(02_img/page/found.png)"});
				$(".youwin").css({"display":"block","background-image":"url(02_img/page/youwin.png)"});
				$("#skip").css({"display":"none"});
				$("#skipfirst").css({"display":"none"});
			}
			/*13 end*/
		}
		else if(e == "count_btn countup_btn lightsword"){//5
			click_times = click_times + 1;
			$(".lightsword").removeClass("countup_btn");
			/*13 start*/
			if(click_times != 13){
				$(".lightsword .situation").css({"display":"block","background-image":"url(02_img/page/found.png)"});
			}
			else if(click_times = 13){
				$(".lightsword .situation").css({"display":"block","background-image":"url(02_img/page/found.png)"});
				$(".youwin").css({"display":"block","background-image":"url(02_img/page/youwin.png)"});
				$("#skip").css({"display":"none"});
				$("#skipfirst").css({"display":"none"});
			}
			/*13 end*/
		}
		else if(e == "count_btn countup_btn colorbook"){//6
			click_times = click_times + 1;
			$(".colorbook").removeClass("countup_btn");
			/*13 start*/
			if(click_times != 13){
				$(".colorbook .situation").css({"display":"block","background-image":"url(02_img/page/found.png)"});
			}
			else if(click_times = 13){
				$(".colorbook .situation").css({"display":"block","background-image":"url(02_img/page/found.png)"});
				$(".youwin").css({"display":"block","background-image":"url(02_img/page/youwin.png)"});
				$("#skip").css({"display":"none"});
				$("#skipfirst").css({"display":"none"});
			}
			/*13 end*/
		}
		else if(e == "count_btn countup_btn headphone"){//7
			click_times = click_times + 1;
			$(".headphone").removeClass("countup_btn");
			/*13 start*/
			if(click_times != 13){
				$(".headphone .situation").css({"display":"block","background-image":"url(02_img/page/found.png)"});
			}
			else if(click_times = 13){
				$(".headphone .situation").css({"display":"block","background-image":"url(02_img/page/found.png)"});
				$(".youwin").css({"display":"block","background-image":"url(02_img/page/youwin.png)"});
				$("#skip").css({"display":"none"});
				$("#skipfirst").css({"display":"none"});
			}
			/*13 end*/
		}
		else if(e == "count_btn countup_btn microsoft"){//8
			click_times = click_times + 1;
			$(".microsoft").removeClass("countup_btn");
			/*13 start*/
			if(click_times != 13){
				$(".microsoft .situation").css({"display":"block","background-image":"url(02_img/page/found.png)"});
			}
			else if(click_times = 13){
				$(".microsoft .situation").css({"display":"block","background-image":"url(02_img/page/found.png)"});
				$(".youwin").css({"display":"block","background-image":"url(02_img/page/youwin.png)"});
				$("#skip").css({"display":"none"});
				$("#skipfirst").css({"display":"none"});
			}
			/*13 end*/
		}
		else if(e == "count_btn countup_btn stationery"){//9
			click_times = click_times + 1;
			$(".stationery").removeClass("countup_btn");
			/*13 start*/
			if(click_times != 13){
				$(".stationery .situation").css({"display":"block","background-image":"url(02_img/page/found.png)"});
			}
			else if(click_times = 13){
				$(".stationery .situation").css({"display":"block","background-image":"url(02_img/page/found.png)"});
				$(".youwin").css({"display":"block","background-image":"url(02_img/page/youwin.png)"});
				$("#skip").css({"display":"none"});
				$("#skipfirst").css({"display":"none"});
			}
			/*13 end*/
		}
		else if(e == "count_btn countup_btn cup"){//10
			click_times = click_times + 1;
			$(".cup").removeClass("countup_btn");
			/*13 start*/
			if(click_times != 13){
				$(".cup .situation").css({"display":"block","background-image":"url(02_img/page/found.png)"});
			}
			else if(click_times = 13){
				$(".cup .situation").css({"display":"block","background-image":"url(02_img/page/found.png)"});
				$(".youwin").css({"display":"block","background-image":"url(02_img/page/youwin.png)"});
				$("#skip").css({"display":"none"});
				$("#skipfirst").css({"display":"none"});
			}
			/*13 end*/
		}
		else if(e == "count_btn countup_btn laserkeyboard"){//11
			click_times = click_times + 1;
			$(".laserkeyboard").removeClass("countup_btn");
			/*13 start*/
			if(click_times != 13){
				$(".laserkeyboard .situation").css({"display":"block","background-image":"url(02_img/page/found.png)"});
			}
			else if(click_times = 13){
				$(".laserkeyboard .situation").css({"display":"block","background-image":"url(02_img/page/found.png)"});
				$(".youwin").css({"display":"block","background-image":"url(02_img/page/youwin.png)"});
				$("#skip").css({"display":"none"});
				$("#skipfirst").css({"display":"none"});
			}
			/*13 end*/
		}
		else if(e == "count_btn countup_btn usb"){//12
			click_times = click_times + 1;
			$(".usb").removeClass("countup_btn");
			/*13 start*/
			if(click_times != 13){
				$(".usb .situation").css({"display":"block","background-image":"url(02_img/page/found.png)"});
			}
			else if(click_times = 13){
				$(".usb .situation").css({"display":"block","background-image":"url(02_img/page/found.png)"});
				$(".youwin").css({"display":"block","background-image":"url(02_img/page/youwin.png)"});
				$("#skip").css({"display":"none"});
				$("#skipfirst").css({"display":"none"});
			}
			/*13 end*/
		}
		else if(e == "count_btn countup_btn pillow"){//13
			click_times = click_times + 1;
			$(".pillow").removeClass("countup_btn");
			/*13 start*/
			if(click_times != 13){
				$(".pillow .situation").css({"display":"block","background-image":"url(02_img/page/found.png)"});
			}
			else if(click_times = 13){
				$(".pillow .situation").css({"display":"block","background-image":"url(02_img/page/found.png)"});
				$(".youwin").css({"display":"block","background-image":"url(02_img/page/youwin.png)"});
				$("#skip").css({"display":"none"});
				$("#skipfirst").css({"display":"none"});
			}
			/*13 end*/
		}
		//1st time click end
		//2ed time click start
		else if(e == "count_btn castle circle" || e == "count_btn castle"){//1
			click_times = click_times;
			/*13 start*/
			if(click_times != 13){
				$(".castle .situation").css({"display":"block","background-image":"url(02_img/page/already.png)"});
				//alert("你已經發現五哥，五哥表示不要再搓我了");
			}
			else if(click_times = 13){
				$(".castle .situation").css({"display":"block","background-image":"url(02_img/page/again.png)"});
				$("#skip").css({"display":"none"});
				//alert("老闆不能這樣戳了又戳戳了又戳啊");
			}
			/*13 end*/
		}
		else if(e == "count_btn dvd circle" || e == "count_btn dvd"){//2
			click_times = click_times;
			/*13 start*/
			if(click_times != 13){
				$(".dvd .situation").css({"display":"block","background-image":"url(02_img/page/already.png)"});
			}
			else if(click_times = 13){
				$(".dvd .situation").css({"display":"block","background-image":"url(02_img/page/again.png)"});
				$("#skip").css({"display":"none"});
			}
			/*13 end*/
		}
		else if(e == "count_btn coffeecup circle" || e == "count_btn coffeecup"){//3
			click_times = click_times;
			/*13 start*/
			if(click_times != 13){
				$(".coffeecup .situation").css({"display":"block","background-image":"url(02_img/page/already.png)"});
			}
			else if(click_times = 13){
				$(".coffecup .situation").css({"display":"block","background-image":"url(02_img/page/again.png)"});
				$("#skip").css({"display":"none"});
			}
			/*13 end*/
		}
		else if(e == "count_btn carbu circle" || e == "count_btn carbu"){//4
			click_times = click_times;
			/*13 start*/
			if(click_times != 13){
				$(".carbu .situation").css({"display":"block","background-image":"url(02_img/page/already.png)"});
			}
			else if(click_times = 13){
				$(".carbu .situation").css({"display":"block","background-image":"url(02_img/page/again.png)"});
				$("#skip").css({"display":"none"});
			}
			/*13 end*/
		}
		else if(e == "count_btn lightsword circle" || e == "count_btn lightsword"){//5
			click_times = click_times;
			/*13 start*/
			if(click_times != 13){
				$(".lightsword .situation").css({"display":"block","background-image":"url(02_img/page/already.png)"});
			}
			else if(click_times = 13){
				$(".lightsword .situation").css({"display":"block","background-image":"url(02_img/page/again.png)"});
				$("#skip").css({"display":"none"});
			}
			/*13 end*/
		}
		else if(e == "count_btn colorbook circle" || e == "count_btn colorbook"){//6
			click_times = click_times;
			/*13 start*/
			if(click_times != 13){
				$(".colorbook .situation").css({"display":"block","background-image":"url(02_img/page/already.png)"});
			}
			else if(click_times = 13){
				$(".colorbook .situation").css({"display":"block","background-image":"url(02_img/page/again.png)"});
				$("#skip").css({"display":"none"});
			}
			/*13 end*/
		}
		else if(e == "count_btn headphone circle" || e == "count_btn headphone"){//7
			click_times = click_times;
			/*13 start*/
			if(click_times != 13){
				$(".headphone .situation").css({"display":"block","background-image":"url(02_img/page/already.png)"});
			}
			else if(click_times = 13){
				$(".headphone .situation").css({"display":"block","background-image":"url(02_img/page/again.png)"});
				$("#skip").css({"display":"none"});
			}
			/*13 end*/
		}
		else if(e == "count_btn microsoft circle" || e == "count_btn microsoft"){//8
			click_times = click_times;
			/*13 start*/
			if(click_times != 13){
				$(".microsoft .situation").css({"display":"block","background-image":"url(02_img/page/already.png)"});
			}
			else if(click_times = 13){
				$(".microsoft .situation").css({"display":"block","background-image":"url(02_img/page/again.png)"});
				$("#skip").css({"display":"none"});
			}
			/*13 end*/
		}
		else if(e == "count_btn stationery circle" || e == "count_btn stationery"){//9
			click_times = click_times;
			/*13 start*/
			if(click_times != 13){
				$(".stationery .situation").css({"display":"block","background-image":"url(02_img/page/already.png)"});
			}
			else if(click_times = 13){
				$(".stationery .situation").css({"display":"block","background-image":"url(02_img/page/again.png)"});
				$("#skip").css({"display":"none"});
			}
			/*13 end*/
		}
		else if(e == "count_btn cup circle" || e == "count_btn cup"){//10
			click_times = click_times;
			/*13 start*/
			if(click_times != 13){
				$(".cup .situation").css({"display":"block","background-image":"url(02_img/page/already.png)"});
			}
			else if(click_times = 13){
				$(".cup .situation").css({"display":"block","background-image":"url(02_img/page/again.png)"});
				$("#skip").css({"display":"none"});
			}
			/*13 end*/
		}
		else if(e == "count_btn laserkeyboard circle" || e == "count_btn laserkeyboard"){//11
			click_times = click_times;
			/*13 start*/
			if(click_times != 13){
				$(".laserkeyboard .situation").css({"display":"block","background-image":"url(02_img/page/already.png)"});
			}
			else if(click_times = 13){
				$(".laserkeyboard .situation").css({"display":"block","background-image":"url(02_img/page/again.png)"});
				$("#skip").css({"display":"none"});
			}
			/*13 end*/
		}
		else if(e == "count_btn usb circle" || e == "count_btn usb"){//12
			click_times = click_times;
			/*13 start*/
			if(click_times != 13){
				$(".usb .situation").css({"display":"block","background-image":"url(02_img/page/already.png)"});
			}
			else if(click_times = 13){
				$(".usb .situation").css({"display":"block","background-image":"url(02_img/page/again.png)"});
				$("#skip").css({"display":"none"});
			}
			/*13 end*/
		}
		else if(e == "count_btn pillow circle" || e == "count_btn pillow"){//13
			click_times = click_times;
			/*13 start*/
			if(click_times != 13){
				$(".pillow .situation").css({"display":"block","background-image":"url(02_img/page/already.png)"});
			}
			else if(click_times = 13){
				$(".pillow .situation").css({"display":"block","background-image":"url(02_img/page/again.png)"});
				$("#skip").css({"display":"none"});
			}
			/*13 end*/
		}
		//2ed time click end
		//score start
		if(click_times == 0){
			$(".scroe").css({"background-image":"url(02_img/page/score/0.png)"});
		}//0
		else if(click_times == 1){
			$(".scroe").css({"background-image":"url(02_img/page/score/1.png)"});
		}//1
		else if(click_times == 2){
			$(".scroe").css({"background-image":"url(02_img/page/score/2.png)"});
		}//2
		else if(click_times == 3){
			$(".scroe").css({"background-image":"url(02_img/page/score/3.png)"});
		}//3
		else if(click_times == 4){
			$(".scroe").css({"background-image":"url(02_img/page/score/4.png)"});
		}//4
		else if(click_times == 5){
			$(".scroe").css({"background-image":"url(02_img/page/score/5.png)"});
		}//5
		else if(click_times == 6){
			$(".scroe").css({"background-image":"url(02_img/page/score/6.png)"});
		}//6
		else if(click_times == 7){
			$(".scroe").css({"background-image":"url(02_img/page/score/7.png)"});
		}//7
		else if(click_times == 8){
			$(".scroe").css({"background-image":"url(02_img/page/score/8.png)"});
		}//8
		else if(click_times == 9){
			$(".scroe").css({"background-image":"url(02_img/page/score/9.png)"});
		}//9
		else if(click_times == 10){
			$(".scroe").css({"background-image":"url(02_img/page/score/10.png)"});
		}//10
		else if(click_times == 11){
			$(".scroe").css({"background-image":"url(02_img/page/score/11.png)"});
		}//11
		else if(click_times == 12){
			$(".scroe").css({"background-image":"url(02_img/page/score/12.png)"});
		}//12
		else if(click_times == 13){
			$(".scroe").css({"background-image":"url(02_img/page/score/13.png)"});
		}//13
		//score end
		
	});
	/*skipfirst btn function start*/
	$("#skipfirst").click(function(){
		$("div.box_wrap").css({"display":"block","float":"left"});
		$(".skipcheckbox").css({"display":"block"});
		$(".status").css({"background-image":"url(02_img/page/skip/defeat.png)"});
		$(".box").css({"display":"none"});
		$("html,body").css({"overflow-y" : "hidden", "position":"static"});
		$("html").css({"overflow-y" : "scroll", "position":"static"});
		//alert("還有"+ 13 +"個沒找到，你要放棄了嗎");		
	});
	
		/*yesbtn start*/
		$(".yesbtn").click(function()
		{
			click_times = 13 ;
			$(".scroe").css({"background-image":"url(02_img/page/score/13.png)"});
			$(".youwin").css({"display":"block","background-image":"url(02_img/page/youlose.png)"});
			$("#skip").css({"display":"none"});
			$("#skipfirst").css({"display":"none"});
				/*item start*/
				$(".castle").addClass("circle");
					$(".castle").removeClass("countup_btn");
				$(".dvd").addClass("circle");
					$(".dvd").removeClass("countup_btn");
				$(".coffeecup").addClass("circle");
					$(".coffeecup").removeClass("countup_btn");
				$(".carbu").addClass("circle");
					$(".carbu").removeClass("countup_btn");
				$(".lightsword").addClass("circle");
					$(".lightsword").removeClass("countup_btn");
				$(".colorbook").addClass("circle");
					$(".colorbook").removeClass("countup_btn");
				$(".headphone").addClass("circle");
					$(".headphone").removeClass("countup_btn");
				$(".microsoft").addClass("circle");
					$(".microsoft").removeClass("countup_btn");
				$(".stationery").addClass("circle");
					$(".stationery").removeClass("countup_btn");
				$(".cup").addClass("circle");
					$(".cup").removeClass("countup_btn");
				$(".laserkeyboard").addClass("circle");
					$(".laserkeyboard").removeClass("countup_btn");
				$(".usb").addClass("circle");
					$(".usb").removeClass("countup_btn");
				$(".pillow").addClass("circle");
					$(".pillow").removeClass("countup_btn");//
				$(".countup_btn").removeClass("countup_btn");
				/*item end*/
			$(".popwrap").css({"display":"none"});
			$(".popover").css({"display":"none"});
			$("div.box_wrap").css({"display":"none"});
			$(".box").css({"display":"none"});
			$("html,body").css({"overflow-y" : "visible", "position":"static", "width": "100%" });
			$(".situation").fadeOut(3000);
		});
		$(".nobtn").click(function()
		{
			click_times = click_times;
			$(".popwrap").css({"display":"none"});
			$(".popover").css({"display":"none"});
			$("div.box_wrap").css({"display":"none"});
			$(".box").css({"display":"none"});
			$("html,body").css({"overflow-y" : "visible", "position":"static", "width": "100%" });
			$(".situation").fadeOut(3000);
		});
		/*yesbtn end*/
	/*skipfirst btn function end*/
	/*skip start*/		
	$("#skip").click(function(){
		if(0 < click_times < 13){
			$("div.box_wrap").css({"display":"block","float":"left"});
			$(".skipcheckbox").css({"display":"block"});
			$(".status").css({"background-image":"url(02_img/page/skip/howmuch.png)"});
			$(".num").css({"display":"block","background-image":"url(02_img/page/skip/num/"+ ( 13 - click_times) +".png)"});
			$(".box").css({"display":"none"});
			$("html,body").css({"overflow-y" : "hidden", "position":"static"});
			$("html").css({"overflow-y" : "scroll", "position":"static"});
			//alert("還有"+ (13 - click_times) +"個沒找到，你要放棄了嗎");
		}
		else if(click_times = 13){
			$("#skip").css({"display":"none"});
			$("#skipfirst").css({"display":"none"});
			//alert("都贏了還要skip個屁");
		}
	});
	/*skip end*/
	
	/*popoverbtn*/
	
	var wdinnerw = $(window).innerWidth();	
	var boxih = 0.75 * $(window).innerHeight();

	$("div.box_inner").css({"height":boxih});
	$(window).resize(function() {
		$("div.box_inner").css({"height":boxih});
	});
/*	$("html,body").css({"overflow-y" : "visible", "position":"static", "width": "100%" });*/
	
	
	var w_ow = $(window).innerWidth()  ;
	var w_iw = w_ow -5 ;
	var scrollnum = $('html').scrollTop();

	/*castle start*/
	$(".castle").click(function()
	{
		$(".castle").addClass("circle");
		$("#popwrap_9").css({"display":"block"});
		$("#popover_9").css({"display":"block"});
		$("div.box_wrap").css({"display":"block","float":"left"});
		$(".box").css({"display":"block"});
		$("html,body").css({"overflow-y" : "hidden", "position":"static"});
		$("html").css({"overflow-y" : "scroll", "position":"static"});
	});
	/*castle end*/
	
	/*dvd start*/
	$(".dvd").click(function()
	{
		$(".dvd").addClass("circle");
		$("#popwrap_12").css({"display":"block"});
		$("#popover_12").css({"display":"block"});
		$("div.box_wrap").css({"display":"block","float":"left"});
		$(".box").css({"display":"block"});
		$("html,body").css({"overflow-y" : "hidden", "position":"static"});
		$("html").css({"overflow-y" : "scroll", "position":"static"});
	});
	/*dvd end*/
	
	/*coffeecup start*/
	$(".coffeecup").click(function()
	{
		$(".coffeecup").addClass("circle");
		$("#popwrap_7").css({"display":"block"});
		$("#popover_7").css({"display":"block"});
		$("div.box_wrap").css({"display":"block","float":"left"});
		$(".box").css({"display":"block"});
		$("html,body").css({"overflow-y" : "hidden", "position":"static"});
		$("html").css({"overflow-y" : "scroll", "position":"static"});
	});
	/*coffeecup end*/
	
	/*carbu start*/
	$(".carbu").click(function()
	{
		$(".carbu").addClass("circle");
		$("#popwrap_8").css({"display":"block"});
		$("#popover_8").css({"display":"block"});
		$("div.box_wrap").css({"display":"block","float":"left"});
		$(".box").css({"display":"block"});
		$("html,body").css({"overflow-y" : "hidden", "position":"static"});
		$("html").css({"overflow-y" : "scroll", "position":"static"});
	});
	/*carbu end*/
	
	/*lightsword start*/
	$(".lightsword").click(function()
	{
		$(".lightsword").addClass("circle");
		$("#popwrap_10").css({"display":"block"});
		$("#popover_10").css({"display":"block"});
		$("div.box_wrap").css({"display":"block","float":"left"});
		$(".box").css({"display":"block"});
		$("html,body").css({"overflow-y" : "hidden", "position":"static"});
		$("html").css({"overflow-y" : "scroll", "position":"static"});
	});
	/*lightsword end*/
	
	/*colorbook start*/
	$(".colorbook").click(function()
	{
		$(".colorbook").addClass("circle");
		$("#popwrap_2").css({"display":"block"});
		$("#popover_2").css({"display":"block"});
		$("div.box_wrap").css({"display":"block","float":"left"});
		$(".box").css({"display":"block"});
		$("html,body").css({"overflow-y" : "hidden", "position":"static"});
		$("html").css({"overflow-y" : "scroll", "position":"static"});
	});
	/*colorbook end*/
	
	/*headphone start*/
	$(".headphone").click(function()
	{
		$(".headphone").addClass("circle");
		$("#popwrap_1").css({"display":"block"});
		$("#popover_1").css({"display":"block"});
		$("div.box_wrap").css({"display":"block","float":"left"});
		$(".box").css({"display":"block"});
		$("html,body").css({"overflow-y" : "hidden", "position":"static"});
		$("html").css({"overflow-y" : "scroll", "position":"static"});
	});
	/*headphone end*/
	
	/*microsoft start*/
	$(".microsoft").click(function()
	{
		$(".microsoft").addClass("circle");
		$("#popwrap_3").css({"display":"block"});
		$("#popover_3").css({"display":"block"});
		$("div.box_wrap").css({"display":"block","float":"left"});
		$(".box").css({"display":"block"});
		$("html,body").css({"overflow-y" : "hidden", "position":"static"});
		$("html").css({"overflow-y" : "scroll", "position":"static"});
	});
	/*microsoft end*/
	
	/*stationery start*/
	$(".stationery").click(function()
	{
		$(".stationery").addClass("circle");
		$("#popwrap_6").css({"display":"block"});
		$("#popover_6").css({"display":"block"});
		$("div.box_wrap").css({"display":"block","float":"left"});
		$(".box").css({"display":"block"});
		$("html,body").css({"overflow-y" : "hidden", "position":"static"});
		$("html").css({"overflow-y" : "scroll", "position":"static"});
	});
	/*stationery end*/
	
	/*cup start*/
	$(".cup").click(function()
	{
		$(".cup").addClass("circle");
		$("#popwrap_13").css({"display":"block"});
		$("#popover_13").css({"display":"block"});
		$("div.box_wrap").css({"display":"block","float":"left"});
		$(".box").css({"display":"block"});
		$("html,body").css({"overflow-y" : "hidden", "position":"static"});
		$("html").css({"overflow-y" : "scroll", "position":"static"});
	});
	/*cup end*/
	
	/*laserkeyboard start*/
	$(".laserkeyboard").click(function()
	{
		$(".laserkeyboard").addClass("circle");
		$("#popwrap_11").css({"display":"block"});
		$("#popover_11").css({"display":"block"});
		$("div.box_wrap").css({"display":"block","float":"left"});
		$(".box").css({"display":"block"});
		$("html,body").css({"overflow-y" : "hidden", "position":"static"});
		$("html").css({"overflow-y" : "scroll", "position":"static"});
	});
	/*laserkeyboard end*/
	
	/*usb start*/
	$(".usb").click(function()
	{
		$(".usb").addClass("circle");
		$("#popwrap_4").css({"display":"block"});
		$("#popover_4").css({"display":"block"});
		$("div.box_wrap").css({"display":"block","float":"left"});
		$(".box").css({"display":"block"});
		$("html,body").css({"overflow-y" : "hidden", "position":"static"});
		$("html").css({"overflow-y" : "scroll", "position":"static"});
	});
	/*usb end*/
	
	/*pillow start*/
	$(".pillow").click(function()
	{
		$(".pillow").addClass("circle");
		$("#popwrap_5").css({"display":"block"});
		$("#popover_5").css({"display":"block"});
		$("div.box_wrap").css({"display":"block","float":"left"});
		$(".box").css({"display":"block"});
		$("html,body").css({"overflow-y" : "hidden", "position":"static"});
		$("html").css({"overflow-y" : "scroll", "position":"static"});
	});
	/*pillow end*/
	
	
	
	
	/*box close part start*/
	$("div.boxbg").click(function()
	{
		$(".popwrap").css({"display":"none"});
		$(".popover").css({"display":"none"});
		$("div.box_wrap").css({"display":"none"});
		$(".box").css({"display":"none"});
		$("html,body").css({"overflow-y" : "visible", "position":"static", "width": "100%" });
		$(".situation").fadeOut(3000);
	});
	
	$("div.box_close").click(function()
	{
		$(".popwrap").css({"display":"none"});
		$(".popover").css({"display":"none"});
		$("div.box_wrap").css({"display":"none"});
		$(".box").css({"display":"none"});
		$("html,body").css({"overflow-y" : "visible", "position":"static", "width": "100%" });
		$(".situation").fadeOut(3000);
	});	
	
	function keyFunction() {
	if (event.keyCode==27) {
		$(".popwrap").css({"display":"none"});
		$(".popover").css({"display":"none"});
		$("div.box_wrap").css({"display":"none"});
		$(".box").css({"display":"none"});
		$("html,body").css({"overflow-y" : "visible", "position":"static", "width": "100%" });
		$(".situation").fadeOut(3000);
		return false;
	} 
	}
	document.onkeydown=keyFunction;	
	/*box close part end*/
	
	/*popoverbtn*/
	
	
	/*check mobile start*/
	var mobiles = new Array
	(
		"midp", "j2me", "avant", "docomo", "novarra", "palmos", "palmsource",
		"240x320", "opwv", "chtml", "pda", "windows ce", "mmp/",
		"blackberry", "mib/", "symbian", "wireless", "nokia", "hand", "mobi",
		"phone", "cdm", "up.b", "audio", "sie-", "sec-", "samsung", "htc",
		"mot-", "mitsu", "sagem", "sony", "alcatel", "lg", "eric", "vx",
		"NEC", "philips", "mmm", "xx", "panasonic", "sharp", "wap", "sch",
		"rover", "pocket", "benq", "java", "pt", "pg", "vox", "amoi",
		"bird", "compal", "kg", "voda", "sany", "kdd", "dbt", "sendo",
		"sgh", "gradi", "jb", "dddi", "moto", "iphone", "android",
		"iPod", "incognito", "webmate", "dream", "cupcake", "webos",
		"s8000", "bada", "googlebot-mobile"
	)
	var ua = navigator.userAgent.toLowerCase();
	var isMobile = false;
	$("head").append("<link>");
	css_1 = $("head").children(":last");
	
	for (var i = 0; i < mobiles.length; i++) {
		if (ua.indexOf(mobiles[i]) > 0) {
		isMobile = true;
		css_1.attr({rel: "stylesheet",type: "text/css",href: "03_css/layer_m.css"});
		$("div.box_inner").css({"height":"auto"});
		break;
		}
		else {
		}
	}
	var h = window.innerHeight
	|| document.documentElement.clientHeight
	|| document.body.clientHeight;
	var w = window.innerWidth
	|| document.documentElement.clientWidth
	|| document.body.clientWidth;
	$(document).ready(function()
	{
	/*	$("div").after(
		'OS: '+navigator.platform+
		'<br>Navigator: '+navigator.userAgent+
		'<br>Device Height: '+h+
		'<br>Device Width: '+w+
		'<br>Device: '+isMobile+
		'<br>'+css.attr("href"));*/
	});
	/*check mobile end*/
});