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
'02_img/page/banner.png',
'02_img/page/item/top.png',
'02_img/page/item/card_b.png',
'02_img/page/item/card_y.png',
'02_img/page/item/01/1.png',
'02_img/page/item/01/2.png',
'02_img/page/item/01/3.png',
'02_img/page/item/01/4.png',
'02_img/page/item/01/title.png',
'02_img/page/item/01/title_tr.png',
'02_img/page/item/02/1.png',
'02_img/page/item/02/2.png',
'02_img/page/item/02/3.png',
'02_img/page/item/02/4.png',
'02_img/page/item/02/title.png',
'02_img/page/item/02/title_tr.png',
'02_img/page/item/03/1.png',
'02_img/page/item/03/2.png',
'02_img/page/item/03/3.png',
'02_img/page/item/03/4.png',
'02_img/page/item/03/title.png',
'02_img/page/item/03/title_tr.png',
'02_img/page/item/04/1.png',
'02_img/page/item/04/2.png',
'02_img/page/item/04/3.png',
'02_img/page/item/04/4.png',
'02_img/page/item/04/title.png',
'02_img/page/item/04/title_tr.png',
'02_img/page/item/05/1.png',
'02_img/page/item/05/2.png',
'02_img/page/item/05/3.png',
'02_img/page/item/05/4.png',
'02_img/page/item/05/title.png',
'02_img/page/item/05/title_tr.png',
'02_img/page/item/06/1.png',
'02_img/page/item/06/2.png',
'02_img/page/item/06/3.png',
'02_img/page/item/06/4.png',
'02_img/page/item/06/title.png',
'02_img/page/item/06/title_tr.png'
);
