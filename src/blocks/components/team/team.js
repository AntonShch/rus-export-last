import Swiper from 'swiper';

const swiperOptions = {
    speed: 1000,
    initialSlide: 0,
    slidesPerView: 1,
    spaceBetween: 59,
    autoplay: {
        delay: 5000,
    },
    loop: false,
    watchSlidesProgress: true,
    mousewheelControl: true,
    keyboardControl: true,
    grabCursor: true,
    autoHeight: false,
    navigation: {
        nextEl: '.team-slider-arrows__right',
        prevEl: '.team-slider-arrows__left',
    },
    thumbs: {
        swiper: {
            el: '.team-slider-thumbs',
            loop: false,
            speed: 400,
            spaceBetween: 19,
            slidesPerView: 4,
        },
    },
    breakpoints: {
        320: {
            spaceBetween: 49,
        },
        992: {
            spaceBetween: 59,
        },
        1400: {
            spaceBetween: 59,
        },
    },
};

const mainSwiper = new Swiper('.team-slider', swiperOptions);
