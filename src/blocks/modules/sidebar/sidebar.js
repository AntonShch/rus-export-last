import disableScroll from 'disable-scroll';
import anime from 'animejs';

class Fade {
	
	constructor(el) {
		this.el = document.querySelector(el);
		this.flag = false;
	}

	fadeIn(delay, display) {
		disableScroll.on();
		let flag = this.flag;
		flag = true;
		let el = this.el;
		if (flag === false) {
			return false;
		} else {
			anime({
				targets: el,
				opacity: 1,
				easing: 'linear',
				duration: delay,
				begin: function () {
					el.style.display = display;
				},
				complete: function () {
					flag = false;
				},
			});
		}
	}

	fadeOut(delay) {
		disableScroll.off();
		let flag = this.flag;
		flag = true;
		let el = this.el;
		if (flag === false) {
			return false;
		} else {
			anime({
				targets: el,
				opacity: 0,
				easing: 'linear',
				duration: delay,
				complete: function () {
					flag = false;
					el.style.display = 'none';
				},
			});
		}
	}

}

const userPopupLogin = new Fade('.popup--user');
const userPopupRegister = new Fade('.popup--user-register');
const overlayFade = new Fade('.overlay');

const overlay = document.querySelector('.overlay');
const userButtonsLogin = document.querySelectorAll('.button-user');
const userButtonRegister = document.querySelector('.button-user-register');
const userButtonsClose = document.querySelectorAll('.popup__close-user');

if (userButtonsLogin) {
	for (let button of userButtonsLogin) {
		button.addEventListener('click', function () {
			overlayFade.fadeIn(350, 'block');
			userPopupRegister.fadeOut(250);
			userPopupLogin.fadeIn(350, 'flex');
		})
	}	
}

if (userButtonRegister) {
	userButtonRegister.addEventListener('click', function () {
		userPopupLogin.fadeOut(250);
		userPopupRegister.fadeIn(350, 'flex');
	})
}
if (overlay) {
	overlay.addEventListener('click', function () {
		overlayFade.fadeOut(350);
		userPopupLogin.fadeOut(350);
		userPopupRegister.fadeOut(350);
	})
}

if (userButtonsClose) {
	for (let button of userButtonsClose) {
		button.addEventListener('click', function () {
			overlayFade.fadeOut(250);
			userPopupLogin.fadeOut(250);
			userPopupRegister.fadeOut(250);
		})
	}	
}

