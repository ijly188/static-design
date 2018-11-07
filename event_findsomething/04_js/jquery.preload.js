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
'02_img/clickeffect.png',
'02_img/more.png',
'02_img/rightbtn.png',

'02_img/item/item_bg.png',

'02_img/item/item/item_0.png',
'02_img/item/item/item_1.png',
'02_img/item/item/item_1_p.png',
'02_img/item/item/item_2.png',
'02_img/item/item/item_2_p.png',
'02_img/item/item/item_3.png',
'02_img/item/item/item_3_p.png',
'02_img/item/item/item_4.png',
'02_img/item/item/item_4_p.png',

'02_img/item/topbtn/menubtn_1.png',
'02_img/item/topbtn/menubtn_1_m.png',
'02_img/item/topbtn/menubtn_1_p.png',
'02_img/item/topbtn/menubtn_2.png',
'02_img/item/topbtn/menubtn_2_m.png',
'02_img/item/topbtn/menubtn_2_p.png',
'02_img/item/topbtn/menubtn_3.png',
'02_img/item/topbtn/menubtn_3_m.png',
'02_img/item/topbtn/menubtn_3_p.png',
'02_img/item/topbtn/menubtn_4.png',
'02_img/item/topbtn/menubtn_4_m.png',
'02_img/item/topbtn/menubtn_4_p.png'
);
