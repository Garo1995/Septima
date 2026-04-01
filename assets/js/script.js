$(window).on('scroll', function () {
    let banner = $('.banner-main');
    let scrollTop = $(window).scrollTop();

    if (scrollTop > 90) {
        banner.addClass('is-active');
    } else {
        banner.removeClass('is-active');
    }
});




$(document).ready(function () {
    $('.open-menu').on('click', function () {
        $(this).toggleClass('close-menu');
        if ($(this).hasClass('close-menu')) {
            $('.menu-content-mobile').addClass('transition-menu');
            $('body').addClass('body_fix');
        } else {
            $('body').removeClass('body_fix');
            $('.menu-content-mobile').removeClass('transition-menu');
        }
    });
});











let businessSwiper = new Swiper(".business-slider", {
    slidesPerView: 4,
    spaceBetween: 12,
    loop: true,
    breakpoints: {
        1079: {
            slidesPerView: 4,
            slidesPerGroup: 1,
            spaceBetween: 12,
        },
        1020: {
            slidesPerView: 3,
            slidesPerGroup: 1,
            spaceBetween: 10,
        },
        767: {
            slidesPerView: 2,
            slidesPerGroup: 1,
            spaceBetween: 10,
        },
        320: {
            slidesPerView: 1,
            slidesPerGroup: 1,
            spaceBetween: 10,
        },
    },

});














let reviewsSwiper = new Swiper(".reviews-slider", {
    slidesPerView: 3,
    spaceBetween: 10,
    loop: true,
    pagination: {
        el: ".reviews-pagination",
        clickable: true,
    },
    navigation: {
        nextEl: ".reviews-button-next",
        prevEl: ".reviews-button-prev",
    },
    breakpoints: {
        1079: {
            slidesPerView: 3,
            slidesPerGroup: 1,
            spaceBetween: 10,
        },
        1020: {
            slidesPerView: 2,
            slidesPerGroup: 1,
            spaceBetween: 10,
        },
        767: {
            slidesPerView: 2,
            slidesPerGroup: 1,
            spaceBetween: 10,
        },
        320: {
            slidesPerView: 1,
            slidesPerGroup: 1,
            spaceBetween: 10,
        },
    },

});













let latestSwiper = new Swiper(".latest-news-slider", {
    slidesPerView: 3,
    spaceBetween: 24,
    loop: true,

    navigation: {
        nextEl: ".latest-button-next",
        prevEl: ".latest-button-prev",
    },
    breakpoints: {
        1079: {
            slidesPerView: 3,
            slidesPerGroup: 1,
            spaceBetween: 24,
        },
        1020: {
            slidesPerView: 2.2,
            slidesPerGroup: 1,
            spaceBetween: 10,
        },
        767: {
            slidesPerView: 2.1,
            slidesPerGroup: 1,
            spaceBetween: 10,
        },
        320: {
            slidesPerView: 1.1,
            slidesPerGroup: 1,
            spaceBetween: 10,
        },
    },

});


