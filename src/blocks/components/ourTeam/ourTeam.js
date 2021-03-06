import Swiper from 'swiper';

new Swiper('.our-team__slider', {
    speed: 400,
    slidesPerView: 4,
    navigation: {
        nextEl: '.our-team .slider-arrows__right',
        prevEl: '.our-team .slider-arrows__left',
    },
    breakpoints: {
        // when window width is >= 320px
        320: {
            slidesPerView: 1,
            spaceBetween: 20,
        },
        // when window width is >= 568px
        568: {
            slidesPerView: 2,
            spaceBetween: 40,
        },
        // when window width is >= 992px
        992: {
            slidesPerView: 3,
            spaceBetween: 40,
        },
        1200: {
            slidesPerView: 4,
            spaceBetween: 40,
        },
    },
});
