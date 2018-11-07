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
'02_img/page/top.jpg',
'02_img/page/gotop.png',
'02_img/page/mainbtn.png',
'02_img/page/nav.png',

'02_img/page/popover/01popover.png',
'02_img/page/popover/02popover.png',
'02_img/page/popover/03popover.png',

//1
'02_img/page/1/title.png',
'02_img/page/1/1.png',
'02_img/page/1/2.png',
'02_img/page/1/3.png',
'02_img/page/1/4.png',
'02_img/page/1/5.png',

//2
'02_img/page/2/title.png',
'02_img/page/2/1.png',
'02_img/page/2/2.png',
'02_img/page/2/3.png',
'02_img/page/2/4.png',
'02_img/page/2/5.png',

//3
'02_img/page/3/title.png',
'02_img/page/3/1.png',
'02_img/page/3/2.png',
'02_img/page/3/3.png',
'02_img/page/3/4.png',
'02_img/page/3/5.png',

//4
'02_img/page/4/title.png',
'02_img/page/4/1.png',
'02_img/page/4/2.png',
'02_img/page/4/3.png',
'02_img/page/4/4.png',
'02_img/page/4/5.png',

//5
'02_img/page/5/title.png',
'02_img/page/5/1.png',
'02_img/page/5/2.png',
'02_img/page/5/3.png',
'02_img/page/5/4.png',
'02_img/page/5/5.png'

);
