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
/*'02_img/header.png',
'02_img/close_circle.png',*/
'02_img/page/menu.png',
'02_img/page/menu_m.png',
'02_img/page/topbanner.png',

'02_img/page/1/1_bg.png',
'02_img/page/1/1.png',
'02_img/page/1/2.png',
'02_img/page/1/3.png',
'02_img/page/1/4.png',
'02_img/page/1/5.png',
'02_img/page/1/6.png',

'02_img/page/2/2_bg.png',
'02_img/page/2/1.png',
'02_img/page/2/2.png',
'02_img/page/2/3.png',
'02_img/page/2/4.png',
'02_img/page/2/5.png',
'02_img/page/2/6.png',

'02_img/page/3/3_bg.png',
'02_img/page/3/1.png',
'02_img/page/3/2.png',
'02_img/page/3/3.png',
'02_img/page/3/4.png',
'02_img/page/3/5.png',
'02_img/page/3/6.png',

'02_img/page/4/4_bg.png',
'02_img/page/4/1.png',
'02_img/page/4/2.png',
'02_img/page/4/3.png',
'02_img/page/4/4.png',
'02_img/page/4/5.png',
'02_img/page/4/6.png'
);
