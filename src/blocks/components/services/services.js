import Swiper from 'swiper';

new Swiper('.services-special-offers__slider', {
    speed: 400,
    slidesPerView: 2,
    navigation: {
        nextEl: '.services-special-offers .slider-arrows__right',
        prevEl: '.services-special-offers .slider-arrows__left',
    },
    breakpoints: {
        // when window width is >= 320px
        320: {
            slidesPerView: 1,
            spaceBetween: 24,
        },
        // when window width is >= 640px
        568: {
            slidesPerView: 2,
            spaceBetween: 24,
        },
        // when window width is >= 640px
        992: {
            slidesPerView: 2,
            spaceBetween: 24,
        },
    },
});
