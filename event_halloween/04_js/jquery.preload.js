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
'02_img/bg.png',
'02_img/page/topbanner.png',

'02_img/page/1.png',
'02_img/page/1_m.png',
'02_img/page/2.png',
'02_img/page/2_m.png',
'02_img/page/3.png',
'02_img/page/3_m.png',
'02_img/page/4.png',
'02_img/page/4_m.png',
'02_img/page/5.png',
'02_img/page/5_m.png',
'02_img/page/6.png',
'02_img/page/6_m.png',
'02_img/page/7.png',
'02_img/page/7_m.png',
'02_img/page/8.png',
'02_img/page/8_m.png',
'02_img/page/9.png',
'02_img/page/9_m.png',
'02_img/page/10.png',
'02_img/page/10_m.png',
'02_img/page/11.png',
'02_img/page/11_m.png',
'02_img/page/12.png',
'02_img/page/12_m.png'
);
