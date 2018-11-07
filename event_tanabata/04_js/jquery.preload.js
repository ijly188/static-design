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
'02_img/page/banner.png',
'02_img/page/title/title_01.png',
'02_img/page/title/title_02.png',
'02_img/page/title/title_03.png',
'02_img/page/more.png',
'02_img/page/title/title_01_b.png',
'02_img/page/title/title_02_b.png',
'02_img/page/title/title_03_b.png',
'02_img/page/item/01_him/01.jpg',
'02_img/page/item/01_him/02.jpg',
'02_img/page/item/01_him/03.jpg',
'02_img/page/item/01_him/04.jpg',
'02_img/page/item/01_him/05.jpg',
'02_img/page/item/01_him/06.jpg',
'02_img/page/item/01_him/07.jpg',
'02_img/page/item/02_her/01.jpg',
'02_img/page/item/02_her/02.jpg',
'02_img/page/item/02_her/03.jpg',
'02_img/page/item/02_her/04.jpg',
'02_img/page/item/02_her/05.jpg',
'02_img/page/item/02_her/06.jpg',
'02_img/page/item/02_her/07.jpg',
'02_img/page/item/03_kid/01.jpg',
'02_img/page/item/03_kid/02.jpg',
'02_img/page/item/03_kid/03.jpg',
'02_img/page/item/03_kid/04.jpg',
'02_img/page/item/03_kid/05.jpg',
'02_img/page/item/03_kid/06.jpg',
'02_img/page/item/03_kid/07.jpg',
'02_img/page/top.png'
);
