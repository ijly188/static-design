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
'02_img/bg-image.png',
'02_img/page/1.png',
'02_img/page/2.png',
'02_img/page/3.png',
'02_img/page/4.png',
'02_img/page/5.png',
'02_img/page/6.png',
'02_img/page/7.png',
'02_img/page/8.png',
'02_img/page/9.png',
'02_img/page/10.png',
'02_img/page/12.png',
'02_img/page/13.png',
'02_img/page/14.png',
'02_img/page/15.png',
'02_img/page/16.png',

'02_img/page/more_1.png',
'02_img/page/more_2.png',
'02_img/page/more_3.png',
'02_img/page/more_4.png',

'02_img/page/1.jpg',
'02_img/page/2.jpg',
'02_img/page/3.jpg',
'02_img/page/4.jpg',

'02_img/page/FBgift.jpg',
'02_img/page/topbanner.png',
'02_img/page/topbtn1.png',
'02_img/page/topbtn2.png',
'02_img/page/topbtn3.png'
);
