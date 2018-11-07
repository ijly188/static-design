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
'02_img/page/01.gif',
'02_img/page/more.png',

'02_img/page/item/01/1.jpg',
'02_img/page/item/01/2.jpg',
'02_img/page/item/01/3.jpg',
'02_img/page/item/01/logo.jpg',
'02_img/page/item/01/1.png',
'02_img/page/item/01/3.png',

'02_img/page/item/02/1.jpg',
'02_img/page/item/02/2.jpg',
'02_img/page/item/02/3.jpg',
'02_img/page/item/02/logo.jpg',
'02_img/page/item/02/1.png',
'02_img/page/item/02/2.png',
'02_img/page/item/02/3.png',

'02_img/page/item/03/1.jpg',
'02_img/page/item/03/2.jpg',
'02_img/page/item/03/3.jpg',
'02_img/page/item/03/logo.jpg',
'02_img/page/item/03/1.png',
'02_img/page/item/03/2.png',
'02_img/page/item/03/3.png',

'02_img/page/item/04/1.jpg',
'02_img/page/item/04/2.jpg',
'02_img/page/item/04/3.jpg',
'02_img/page/item/04/logo.jpg',
'02_img/page/item/04/1.png',
'02_img/page/item/04/2.png',
'02_img/page/item/04/3.png',

'02_img/page/item/05/1.jpg',
'02_img/page/item/05/2.jpg',
'02_img/page/item/05/3.jpg',
'02_img/page/item/05/logo.jpg',
'02_img/page/item/05/1.png',
'02_img/page/item/05/2.png',

'02_img/page/item/06/1.jpg',
'02_img/page/item/06/2.jpg',
'02_img/page/item/06/3.jpg',
'02_img/page/item/06/logo.jpg',
'02_img/page/item/06/1.png',
'02_img/page/item/06/3.png',

'02_img/page/item/07/1.jpg',
'02_img/page/item/07/2.jpg',
'02_img/page/item/07/3.jpg',
'02_img/page/item/07/logo.jpg',
'02_img/page/item/07/1.png',
'02_img/page/item/07/2.png',
'02_img/page/item/07/3.png',

'02_img/page/item/08/1.jpg',
'02_img/page/item/08/2.jpg',
'02_img/page/item/08/3.jpg',
'02_img/page/item/08/logo.jpg',
'02_img/page/item/08/1.png',
'02_img/page/item/08/2.png',
'02_img/page/item/08/3.png'
);
