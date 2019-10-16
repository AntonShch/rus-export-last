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

const overlay = new Fade('.overlay');

const userPopupLogin = new Fade('.popup--user');
const userPopupRegister = new Fade('.popup--user-register');

const userButtonsLogin = document.querySelectorAll('.button-user');
const userButtonRegister = document.querySelector('.button-user-register');
const userButtonsClose = document.querySelectorAll('.popup__close-user');

for (let button of userButtonsLogin) {
	button.addEventListener('click', function () {
		overlay.fadeIn(350, 'block');
		userPopupRegister.fadeOut(250);
		userPopupLogin.fadeIn(350, 'flex');
	})
}

userButtonRegister.addEventListener('click', function () {
	userPopupLogin.fadeOut(250);
	userPopupRegister.fadeIn(350, 'flex');
})

for (let button of userButtonsClose) {
	button.addEventListener('click', function () {
		overlay.fadeOut(250);
		userPopupLogin.fadeOut(250);
		userPopupRegister.fadeOut(250);
	})
}
