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
css = $("head").children(":last");

for (var i = 0; i < mobiles.length; i++) {
	if (ua.indexOf(mobiles[i]) > 0) {
	isMobile = true;
	css.attr({rel: "stylesheet",type: "text/css",href: "03_css/layer_m.css"});
	break;
	}
	else {
	css.attr({rel: "stylesheet",type: "text/css",href: "03_css/layer_d.css"});
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