import Swiper from 'swiper';

const ourPartners = new Swiper('.our-partners__wrapper', {
    slidesPerView: 6,
    slidesPerColumn: 3,
    slidesPerGroup: 6,
    spaceBetween: 20,
    navigation: {
        prevEl: '.our-partners__navigation-button--prev',
        nextEl: '.our-partners__navigation-button--next',
    },
    breakpoints: {
        1024: {
            slidesPerView: 6,
            slidesPerGroup: 6,
            spaceBetween: 20,
        },
        992: {
            slidesPerView: 4,
            slidesPerGroup: 4,
            spaceBetween: 20,
        },
        768: {
            slidesPerView: 3,
            slidesPerGroup: 3,
            spaceBetween: 20,
        },
        600: {
            slidesPerView: 2,
            slidesPerGroup: 2,
            spaceBetween: 20,
        },
        320: {
            slidesPerView: 1,
            slidesPerGroup: 1,
            spaceBetween: 0,
        },
    },
});
