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
'02_img/page_11/bg.png',
'02_img/page_11/gotop.png',
'02_img/page_11/rightbtn.png',
'02_img/page_11/topbanner.png',

/*1*/
'02_img/page_11/1/1_bg.png',
'02_img/page_11/1/item_1.png',
'02_img/page_11/1/item_2.png',
'02_img/page_11/1/item_3.png',
'02_img/page_11/1/item_4.png',
'02_img/page_11/1/item_5.png',
'02_img/page_11/1/title1.png',

/*2*/
'02_img/page_11/2/2_bg.png',
'02_img/page_11/2/item_1.png',
'02_img/page_11/2/item_2.png',
'02_img/page_11/2/item_3.png',
'02_img/page_11/2/item_4.png',
'02_img/page_11/2/item_5.png',
'02_img/page_11/2/title2.png',

/*3*/
'02_img/page_11/3/3_bg.png',
'02_img/page_11/3/item_1.png',
'02_img/page_11/3/item_2.png',
'02_img/page_11/3/item_3.png',
'02_img/page_11/3/item_4.png',
'02_img/page_11/3/item_5.png',
'02_img/page_11/3/title3.png',

/*4*/
'02_img/page_11/4/4_bg.png',
'02_img/page_11/4/item_1.png',
'02_img/page_11/4/item_2.png',
'02_img/page_11/4/item_3.png',
'02_img/page_11/4/item_4.png',
'02_img/page_11/4/item_5.png',
'02_img/page_11/4/title4.png',

/*5*/
'02_img/page_11/5/5_bg.png',
'02_img/page_11/5/item_1.png',
'02_img/page_11/5/item_2.png',
'02_img/page_11/5/item_3.png',
'02_img/page_11/5/item_4.png',
'02_img/page_11/5/item_5.png',
'02_img/page_11/5/title5.png'

);
