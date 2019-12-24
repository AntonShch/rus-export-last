// /* eslint-disable no-restricted-syntax */
/* eslint-disable consistent-return */
import disableScroll from 'disable-scroll';
import PerfectScrollbar from 'perfect-scrollbar';
import anime from 'animejs';

export default class Fade {
    constructor(el) {
        this.el = document.querySelector(el);
        this.flag = false;
    }

    fadeIn(delay, display) {
        disableScroll.on();
        let { flag } = this;
        flag = true;
        const { el } = this;
        if (flag !== false) {
            const popups = document.querySelectorAll('.popup');
            popups.forEach(e => {
                e.style.display = 'none';
            });
            anime({
                targets: el,
                opacity: 1,
                easing: 'linear',
                duration: delay,
                begin() {
                    el.style.display = display;
                },
                complete() {
                    flag = false;
                },
            });
        } else {
            return false;
        }
    }

    fadeOut(delay) {
        disableScroll.off();
        let { flag } = this;
        flag = true;
        const { el } = this;
        if (flag !== false) {
            anime({
                targets: el,
                opacity: 0,
                easing: 'linear',
                duration: delay,
                complete() {
                    flag = false;
                    el.style.display = 'none';
                },
            });
        } else {
            return false;
        }
    }
}

const overlay = document.querySelector('.overlay');
const userButtonsLogin = document.querySelectorAll('.button-user');
const userButtonRegister = document.querySelector('.button-user-register');
const userButtonsClose = document.querySelectorAll('.popup__close-user');

const userPopupLogin = new Fade('.popup--user');
const userPopupRegister = new Fade('.popup--user-register');
const overlayFade = new Fade('.overlay');

if (userButtonsLogin) {
    userButtonsLogin.forEach(button => {
        button.addEventListener('click', () => {
            overlayFade.fadeIn(350, 'block');
            userPopupRegister.fadeOut(250);
            userPopupLogin.fadeIn(350, 'flex');
        });
    });
}

if (userButtonRegister) {
    userButtonRegister.addEventListener('click', () => {
        userPopupLogin.fadeOut(250);
        userPopupRegister.fadeIn(350, 'flex');
    });
}
if (overlay) {
    overlay.addEventListener('click', () => {
        overlayFade.fadeOut(350);
        userPopupLogin.fadeOut(350);
        userPopupRegister.fadeOut(350);
    });
}

if (userButtonsClose) {
    userButtonsClose.forEach(button => {
        button.addEventListener('click', () => {
            overlayFade.fadeOut(250);
            userPopupLogin.fadeOut(250);
            userPopupRegister.fadeOut(250);
        });
    });
}

const consultationButtons = document.querySelectorAll(
    '.services-about button.button'
);
const consultationSuccessButtons = document.querySelectorAll(
    '.popup--consultation button[type="button"]'
);
const consultationButtonsClose = document.querySelectorAll(
    '.popup__close-consultation'
);
const consultationPopup = new Fade('.popup--consultation');
const consultationSuccessPopup = new Fade('.popup.popup--consultation-success');
const consultationPopupContent = document.querySelector(
    '.popup--consultation .popup__wrapper'
);

if (consultationButtons) {
    consultationButtons.forEach(button => {
        button.addEventListener('click', () => {
            overlayFade.fadeIn(350, 'block');
            consultationPopup.fadeIn(350, 'flex');
        });

        if (consultationPopupContent) {
            new PerfectScrollbar(consultationPopupContent);
        }
    });
}

if (consultationSuccessButtons) {
    consultationSuccessButtons.forEach(button => {
        button.addEventListener('click', () => {
            consultationPopup.fadeOut(250);
            consultationSuccessPopup.fadeIn(350, 'flex');
        });

        if (consultationPopupContent) {
            new PerfectScrollbar(consultationPopupContent);
        }
    });
}

if (overlay) {
    overlay.addEventListener('click', () => {
        overlayFade.fadeOut(350);
        consultationPopup.fadeOut(350);
        consultationSuccessPopup.fadeOut(350);
    });
}

if (consultationButtonsClose) {
    consultationButtonsClose.forEach(button => {
        button.addEventListener('click', () => {
            overlayFade.fadeOut(250);
            consultationPopup.fadeOut(250);
            consultationSuccessPopup.fadeOut(250);
        });
    });
}
