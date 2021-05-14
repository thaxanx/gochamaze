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