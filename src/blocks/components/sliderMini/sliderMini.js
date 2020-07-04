import Swiper from 'swiper';

const sliderMini = new Swiper('.slider-mini .swiper-container', {
    init: true,
    initialSlide: 0,
    direction: 'horizontal',
    slidesPerView: 4,
    spaceBetween: 20,
    navigation: {
        nextEl: '.slider-mini .swiper-button-next',
        prevEl: '.slider-mini .swiper-button-prev',
    },
    breakpoints: {
        1200: {
            slidesPerView: 4,
            spaceBetween: 20,
        },
        1024: {
            slidesPerView: 3,
            spaceBetween: 20,
        },
        768: {
            slidesPerView: 3,
            spaceBetween: 20,
        },
        425: {
            slidesPerView: 2,
            spaceBetween: 10,
        },
        375: {
            slidesPerView: 1,
            spaceBetween: 0,
        },
        320: {
            slidesPerView: 1,
            spaceBetween: 0,
        },
    },
});
