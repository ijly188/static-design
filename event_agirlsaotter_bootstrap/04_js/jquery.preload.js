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
'02_img/page/01.png',
'02_img/page/05.png',
'02_img/page/item/Q_logo/01.png',
'02_img/page/item/Q_logo/02.png',
'02_img/page/item/Q_logo/03.png',
'02_img/page/item/Q_logo/04.png',
'02_img/page/item/title/title_1.png',
'02_img/page/item/title/title_2.png',
'02_img/page/item/title/title_3.png',
'02_img/page/item/title/title_4.png',
'02_img/page/item/article/01.png',
'02_img/page/item/article/01item.jpg',
'02_img/page/item/article/02.png',
'02_img/page/item/article/02item.jpg',
'02_img/page/item/article/03.png',
'02_img/page/item/article/03item.jpg',
'02_img/page/item/article/04.png',
'02_img/page/item/article/04item.jpg',
'02_img/page/item/1_music/01.jpg',
'02_img/page/item/1_music/01_m.png',
'02_img/page/item/1_music/02.jpg',
'02_img/page/item/1_music/02_m.png',
'02_img/page/item/1_music/03.jpg',
'02_img/page/item/1_music/03_m.png',
'02_img/page/item/1_music/04.jpg',
'02_img/page/item/1_music/04_m.png',
'02_img/page/item/1_music/05.jpg',
'02_img/page/item/1_music/05_m.png',
'02_img/page/item/1_music/06.jpg',
'02_img/page/item/1_music/06_m.png',
'02_img/page/item/1_music/07.jpg',
'02_img/page/item/1_music/08_m.png',
'02_img/page/item/1_music/09.jpg',
'02_img/page/item/1_music/09_m.png',
'02_img/page/item/1_music/10.jpg',
'02_img/page/item/1_music/10_m.png',
'02_img/page/item/1_music/11.jpg',
'02_img/page/item/1_music/11_m.png',
'02_img/page/item/1_music/12.jpg',
'02_img/page/item/1_music/12_m.png',
'02_img/page/item/2_smart/01.jpg',
'02_img/page/item/2_smart/01_m.png',
'02_img/page/item/2_smart/02.jpg',
'02_img/page/item/2_smart/02_m.png',
'02_img/page/item/2_smart/03.jpg',
'02_img/page/item/2_smart/03_m.png',
'02_img/page/item/2_smart/04.jpg',
'02_img/page/item/2_smart/04_m.png',
'02_img/page/item/2_smart/05.jpg',
'02_img/page/item/2_smart/05_m.png',
'02_img/page/item/2_smart/06.jpg',
'02_img/page/item/2_smart/06_m.png',
'02_img/page/item/2_smart/07.jpg',
'02_img/page/item/2_smart/07_m.png',
'02_img/page/item/2_smart/08.jpg',
'02_img/page/item/2_smart/08_m.png',
'02_img/page/item/3_style/01.jpg',
'02_img/page/item/3_style/01_m.png',
'02_img/page/item/3_style/02.jpg',
'02_img/page/item/3_style/02_m.png',
'02_img/page/item/3_style/03.jpg',
'02_img/page/item/3_style/03_m.png',
'02_img/page/item/3_style/04.jpg',
'02_img/page/item/3_style/04_m.png',
'02_img/page/item/3_style/05.jpg',
'02_img/page/item/3_style/05_m.png',
'02_img/page/item/3_style/06.jpg',
'02_img/page/item/3_style/06_m.png',
'02_img/page/item/3_style/07.jpg',
'02_img/page/item/3_style/07_m.png',
'02_img/page/item/3_style/08.jpg',
'02_img/page/item/3_style/08_m.png'
);
