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
'02_img/bg_01.jpg',
'02_img/bg_02.jpg',
'02_img/bg_03.jpg',
'02_img/bg_04.jpg',
'02_img/bg_05.jpg',
'02_img/bg_06.jpg',
'02_img/page/item/item_01.jpg',
'02_img/page/item/item_02.jpg',
'02_img/page/item/item_03.jpg',
'02_img/page/item/item_04.jpg',
'02_img/page/item/item_05.jpg',
'02_img/page/item/item_06.jpg'
);
