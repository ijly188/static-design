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
$(document).ready(function()
{
$.preload(
'02_img/item/01.jpg',
'02_img/item/02.jpg',
'02_img/item/03.jpg',
'02_img/item/04.jpg',
'02_img/item/05.jpg',
'02_img/item/06.jpg',
'02_img/item/07.jpg',
'02_img/item/08.jpg',
'02_img/item/09.jpg',
'02_img/item/10.jpg'
);
});