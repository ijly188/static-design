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
'02_img/page/buybtn/topfontbg.gif',
'02_img/page/logo/logo_1.png',
'02_img/page/logo/logo_2.png',
'02_img/page/logo/logo_3.png',
'02_img/page/logo/logo_4.png',
'02_img/page/logo/logo_5.png',
'02_img/page/logo/logo_6.png',
'02_img/page/logo/logo_7.png',
'02_img/page/logo/logo_8.png',
'02_img/page/logo/logo_9.png',
'02_img/bg.jpg'
);
