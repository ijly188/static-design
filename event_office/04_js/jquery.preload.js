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

'02_img/page/again.png',
'02_img/page/already.png',
'02_img/page/click.png',
'02_img/page/found.png',
'02_img/page/youlose.png',
'02_img/page/youwin.png',

'02_img/page/popover/1.jpg',
'02_img/page/popover/2.jpg',
'02_img/page/popover/3.jpg',
'02_img/page/popover/4.jpg',
'02_img/page/popover/5.jpg',
'02_img/page/popover/6.jpg',
'02_img/page/popover/7.jpg',
'02_img/page/popover/8.jpg',
'02_img/page/popover/9.jpg',
'02_img/page/popover/10.jpg',
'02_img/page/popover/11.jpg',
'02_img/page/popover/12.jpg',
'02_img/page/popover/13.jpg',

'02_img/page/score/0.png',
'02_img/page/score/1.png',
'02_img/page/score/2.png',
'02_img/page/score/3.png',
'02_img/page/score/4.png',
'02_img/page/score/5.png',
'02_img/page/score/6.png',
'02_img/page/score/7.png',
'02_img/page/score/8.png',
'02_img/page/score/9.png',
'02_img/page/score/10.png',
'02_img/page/score/11.png',
'02_img/page/score/12.png',
'02_img/page/score/13.png',

'02_img/page/skip/comment_bg.png',
'02_img/page/skip/defeat.png',
'02_img/page/skip/howmuch.png',
'02_img/page/skip/nobtn_bg.png',
'02_img/page/skip/retry.png',
'02_img/page/skip/yesbtn_bg.png',

'02_img/page/skip/num/1.png',
'02_img/page/skip/num/2.png',
'02_img/page/skip/num/3.png',
'02_img/page/skip/num/4.png',
'02_img/page/skip/num/5.png',
'02_img/page/skip/num/6.png',
'02_img/page/skip/num/7.png',
'02_img/page/skip/num/8.png',
'02_img/page/skip/num/9.png',
'02_img/page/skip/num/10.png',
'02_img/page/skip/num/11.png',
'02_img/page/skip/num/12.png',
'02_img/page/skip/num/13.png'
);
