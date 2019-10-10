import Swiper from 'swiper';

let interleaveOffset = 0.5;

const swiperOptions = {
	speed: 1000,
	initialSlide: 0,
	slidesPerView: 1,
	loop: true,
	spaceBetween: 50,
	pagination: {
		el: '.slider-home__counter-current',
		type: 'fraction',
	},
	watchSlidesProgress: true,
	mousewheelControl: true,
	keyboardControl: true,
	navigation: {
		nextEl: ".slider-home__actions-next",
		prevEl: ".slider-home__actions-prev"
	},
	breakpoints: {
    767: {
				speed: 600,
    }
	},
};

const mainSwiper = new Swiper(".slider-home__content", swiperOptions);
