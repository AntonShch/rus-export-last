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
		nextEl: ".slider-home__arrow-next",
		prevEl: ".slider-home__arrow-prev"
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
				crossFade: true
			},
			slidesPerView: 1,
		}
  },
  breakpoints: {
	// when window width is >= 320px
	320: {
	  spaceBetween: 59
	},
	// when window width is >= 640px
	1400: {
	  spaceBetween: 59
	},
  },
	on: {
		progress: function () {
			const swiper = this;
			let spaceBetween = swiper.params['spaceBetween'] / 100;
			
			let width = swiper.slides[swiper.activeIndex].querySelector('.slider-home-item__background').offsetWidth * spaceBetween,
					height = swiper.slides[swiper.activeIndex].querySelector('.slider-home-item__background').offsetHeight * spaceBetween;
			for (let i = 0; i < swiper.slides.length; i++) {
				let progress =  swiper.slides[i].progress, 
						innerTranslateWidth = (i * width) - (progress * width),
						innerTranslateHeight = -1 * ((i * height) - (progress * height));
				swiper.slides[i].querySelector(".slider-home-item__image").style.transform = "translate(" + innerTranslateWidth + "px, " + innerTranslateHeight + "px)";
				swiper.slides[i].querySelector(".slider-home-item__background").style.transform = "translate(" + innerTranslateWidth + "px, " + innerTranslateHeight + "px)";
			}
		},
		touchStart: function () {
			const swiper = this;
			for (let i = 0; i < swiper.slides.length; i++) {
				swiper.slides[i].style.transition = "";
			}
		},
	}
};

const mainSwiper = new Swiper(".slider-home__init", swiperOptions);
