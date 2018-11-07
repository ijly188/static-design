/*! Copyright 2011, Ben Lin (http://dreamerslab.com/)
* Licensed under the MIT License (LICENSE.txt).
*
* Version: 1.0.3
*
* Requires: jQuery 1.2.3+
*/
;( function( $ ){
  $.preload = function(){
    var imgs = Object.prototype.toString.call( arguments[ 0 ]) === '[object Array]'
      ? arguments[ 0 ] : arguments;

    var tmp = [];
    var i   = imgs.length;

    // reverse loop run faster
    for( ; i-- ; ) tmp.push( $( '<img />' ).attr( 'src', imgs[ i ]));
  };
})( jQuery );

$.preload(
'02_img/bg.jpg',
'02_img/page/gotop.png',
'02_img/page/introbtn.png',
'02_img/page/item_enter.png',
'02_img/page/item_leave.png',
'02_img/page/item_enter.png',

'02_img/page/page1.png',
'02_img/page/page1_bg.png',
'02_img/page/page2.png',
'02_img/page/page2_bg.png',
'02_img/page/page3.png',
'02_img/page/page3_bg.png',
'02_img/page/page4.png',
'02_img/page/page4_bg.png',
'02_img/page/page5.png',
'02_img/page/page5_bg.png',
'02_img/page/page6.png',
'02_img/page/page6_bg.png',
'02_img/page/page7.png',
'02_img/page/page7_bg.png',
'02_img/page/page8.png',
'02_img/page/page8_bg.png',

'02_img/page/topbanner.png',
''
);
