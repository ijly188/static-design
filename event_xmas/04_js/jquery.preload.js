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
'02_img/more.png',
'02_img/rightbtn.png',
'02_img/top.png',

'02_img/item/1.png',
'02_img/item/1_m.png',
'02_img/item/2.png',
'02_img/item/2_m.png',
'02_img/item/3.png',
'02_img/item/3_m.png',
'02_img/item/4.png',
'02_img/item/4_m.png',
'02_img/item/5.png',
'02_img/item/5_m.png',
'02_img/item/6.png',
'02_img/item/6_m.png',
'02_img/item/7.png',
'02_img/item/7_m.png',
'02_img/item/8.png',
'02_img/item/8_m.png',
'02_img/item/9.png',
'02_img/item/9_m.png',
'02_img/item/10.png',
'02_img/item/10_m.png',
'02_img/item/11.png',
'02_img/item/11_m.png',
'02_img/item/12.png',
'02_img/item/12_m.png',
'02_img/item/13.png',
'02_img/item/13_m.png',
'02_img/item/14.png',
'02_img/item/14_m.png',
'02_img/item/15.png',
'02_img/item/15_m.png',
'02_img/item/16.png',
'02_img/item/16_m.png',
'02_img/item/17.png',
'02_img/item/17_m.png',
'02_img/item/18.png',
'02_img/item/18_m.png',
'02_img/item/19.png',
'02_img/item/19_m.png',
'02_img/item/20.png',
'02_img/item/20_m.png',
'02_img/item/21.png',
'02_img/item/21_m.png',
'02_img/item/22.png',
'02_img/item/22_m.png',
'02_img/item/23.png',
'02_img/item/23_m.png',
'02_img/item/24.png',
'02_img/item/24_m.png',
'02_img/item/25.png',
'02_img/item/25_m.png',

'02_img/item/price_1.png',
'02_img/item/price_2.png',
'02_img/item/price_3.png',
'02_img/item/price_4.png',
'02_img/item/price_5.png'
);
