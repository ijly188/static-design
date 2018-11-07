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
'02_img/machine.png',
'02_img/main_ad.png',

'02_img/effect/smoke.gif',
'02_img/effect/which_item_1.gif',
'02_img/effect/which_item_2.gif',
'02_img/effect/which_item_name.gif',

'02_img/item/00.png',
'02_img/item/01.png',
'02_img/item/02.png',
'02_img/item/03.png',
'02_img/item/04.png',
'02_img/item/05.png',
'02_img/item/06.png',
'02_img/item/07.png',
'02_img/item/08.png',
'02_img/item/item_og.png',

'02_img/wheel/prop0.png',
'02_img/wheel/prop1.png',
'02_img/wheel/prop2.png',
'02_img/wheel/prop3.png',
'02_img/wheel/prop4.png',
'02_img/wheel/prop5.png',
'02_img/wheel/prop6.png',
'02_img/wheel/prop7.png',
'02_img/wheel/right_btn.gif',
'02_img/wheel/right_btn_bg.png',
'02_img/wheel/wheel.png'
);
