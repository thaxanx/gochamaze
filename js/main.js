'use strict';

/* ------------------------------------------------------------------- 
 * ## fade-up
 * ------------------------------------------------------------------- */

$(function () {
//    アニメーション呼び出し
    if ($('.js-scroll').length) {
        scrollAnimation();
    }
    
    function scrollAnimation() {
        $(window).scroll(function () {
            $('.js-scroll').each(function () {
                let position = $(this).offset().top,
                    scroll = $(window).scrollTop(),
                    windowHeight = $(window).height();
                
                if (scroll > position - windowHeight + 200) {
                    $(this).addClass('show');
                }
            });
        });
    }
    $(window).trigger('scroll');
    
});

/* ------------------------------------------------------------------- 
 * ## cta
 * ------------------------------------------------------------------- */

$(function () {
  $(window).on('scroll', function(){
    if ($(window).scrollTop() > 1000) {
      $('.cta-home').fadeIn(300);
    } else {
      $('.cta-home').fadeOut(300);
    }
  });
});