import Swiper from 'swiper';
var mySwiper = new Swiper('.our-team__slider', {
    speed: 400,
    slidesPerView: 3,
    spaceBetween: 40,
      navigation: {
		nextEl: '.our-team .slider-arrows__right',
		prevEl: '.our-team .slider-arrows__left',
	  },
});