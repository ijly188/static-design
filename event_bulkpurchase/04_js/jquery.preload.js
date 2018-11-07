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
'02_img/page/gotop.png',
'02_img/page/more.png',

'02_img/page/1/1.jpg',
/*'02_img/page/1/1.png',*/
'02_img/page/1/2.jpg',
'02_img/page/1/2.png',
'02_img/page/1/3.jpg',
'02_img/page/1/3.png',
'02_img/page/1/4.jpg',
'02_img/page/1/4.png',
'02_img/page/1/5.jpg',
'02_img/page/1/5.png',
'02_img/page/1/6.jpg',
'02_img/page/1/6.png',
'02_img/page/1/7.jpg',
'02_img/page/1/7.png',
'02_img/page/1/8.jpg',
'02_img/page/1/8.png',

'02_img/page/2/1.jpg',
'02_img/page/2/1.png',
'02_img/page/2/2.jpg',
'02_img/page/2/2.png',
'02_img/page/2/3.jpg',
'02_img/page/2/3.png',
'02_img/page/2/4.jpg',
/*'02_img/page/2/4.png',*/
'02_img/page/2/5.jpg',
'02_img/page/2/5.png',
'02_img/page/2/6.jpg',
'02_img/page/2/6.png',
'02_img/page/2/7.jpg',
'02_img/page/2/7.png',
'02_img/page/2/8.jpg',
'02_img/page/2/8.png',

'02_img/page/3/1.jpg',
/*'02_img/page/3/1.png',*/
'02_img/page/3/2.jpg',
'02_img/page/3/2.png',
'02_img/page/3/3.jpg',
'02_img/page/3/3.png',
'02_img/page/3/4.jpg',
'02_img/page/3/4.png',
'02_img/page/3/5.jpg',
'02_img/page/3/5.png',
'02_img/page/3/6.jpg',
'02_img/page/3/6.png',
'02_img/page/3/7.jpg',
'02_img/page/3/7.png',
'02_img/page/3/8.jpg',
'02_img/page/3/8.png',

'02_img/page/4/1.jpg',
'02_img/page/4/1.png',
'02_img/page/4/2.jpg',
'02_img/page/4/2.png',
'02_img/page/4/3.jpg',
'02_img/page/4/3.png',
'02_img/page/4/4.jpg',
/*'02_img/page/4/4.png',*/
'02_img/page/4/5.jpg',
'02_img/page/4/5.png',
'02_img/page/4/6.jpg',
'02_img/page/4/6.png',
'02_img/page/4/7.jpg',
'02_img/page/4/7.png',
'02_img/page/4/8.jpg',
'02_img/page/4/8.png'

);
