import Swiper from 'swiper';

const swiperOptions = {
    speed: 1000,
    initialSlide: 0,
    slidesPerView: 1,
    spaceBetween: 59,
    virtualTranslate: true,
    loop: false,
    pagination: {
        el: '.slider-home__counter-current',
        type: 'fraction',
    },
    watchSlidesProgress: true,
    mousewheelControl: true,
    keyboardControl: true,
    grabCursor: true,
    navigation: {
        nextEl: '.slider-home__arrow-next',
        prevEl: '.slider-home__arrow-prev',
    },
    thumbs: {
        swiper: {
            el: '.slider-home__text',
            loop: false,
            speed: 400,
            effect: 'fade',
            noSwiping: false,
            simulateTouch: false,
            autoHeight: true,
            fadeEffect: {
                crossFade: true,
            },
            slidesPerView: 1,
        },
    },
    breakpoints: {
        // when window width is >= 320px
        320: {
            spaceBetween: 49,
        },
        992: {
            spaceBetween: 59,
        },
        // when window width is >= 640px
        1400: {
            spaceBetween: 59,
        },
    },
    on: {
        progress() {
            const swiper = this;
            const spaceBetween = swiper.params.spaceBetween / 100;

            const width =
                swiper.slides[swiper.activeIndex].querySelector(
                    '.slider-home-item__background'
                ).offsetWidth * spaceBetween;
            const height =
                swiper.slides[swiper.activeIndex].querySelector(
                    '.slider-home-item__background'
                ).offsetHeight * spaceBetween;
            for (let i = 0; i < swiper.slides.length; i++) {
                const { progress } = swiper.slides[i];
                const innerTranslateWidth = i * width - progress * width;
                const innerTranslateHeight =
                    -1 * (i * height - progress * height);
                swiper.slides[i].querySelector(
                    '.slider-home-item__image'
                ).style.transform = `translate(${innerTranslateWidth}px, ${innerTranslateHeight}px)`;
                swiper.slides[i].querySelector(
                    '.slider-home-item__background'
                ).style.transform = `translate(${innerTranslateWidth}px, ${innerTranslateHeight}px)`;
            }
        },
        touchStart() {
            const swiper = this;
            for (let i = 0; i < swiper.slides.length; i++) {
                swiper.slides[i].style.transition = '';
            }
        },
    },
};

const mainSwiper = new Swiper('.slider-home__init', swiperOptions);
