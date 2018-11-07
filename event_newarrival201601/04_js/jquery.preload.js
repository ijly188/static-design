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
'02_img/gotop.png',
'02_img/nav.png',

'02_img/item/00/item_0.png',
'02_img/item/00/item_1.png',
'02_img/item/00/item_2.png',
'02_img/item/00/item_3.png',
'02_img/item/00/more_0.png',

'02_img/item/01/item_0.png',
'02_img/item/01/item_1.png',
'02_img/item/01/item_2.png',
'02_img/item/01/item_3.png',
'02_img/item/01/more_1.png',

'02_img/item/02/item_0.png',
'02_img/item/02/item_1.png',
'02_img/item/02/item_2.png',
'02_img/item/02/item_3.png',
'02_img/item/02/more_2.png',

'02_img/item/03/item_0.png',
'02_img/item/03/item_1.png',
'02_img/item/03/item_2.png',
'02_img/item/03/item_3.png',
'02_img/item/03/more_3.png'
);
