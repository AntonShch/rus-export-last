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
            const textareas = el.querySelectorAll('textarea');
            if (textareas) {
                textareas.forEach(textarea => {
                    textarea.addEventListener('focus', () => {
                        disableScroll.off();
                    });
                    textarea.addEventListener('blur', () => {
                        disableScroll.on();
                    });
                });
            }
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
const overlayFade = new Fade('.overlay');

const popupSuccess = document.querySelector('.popup--success');
const popupSuccessFade = new Fade('.popup--success');
const popupSuccessClose = document.querySelectorAll('.popup--success .button');

const userButtonsLogin = document.querySelectorAll('.button-user');
const userButtonRegister = document.querySelector('.button-user-register');
const userButtonsClose = document.querySelectorAll('.popup__close-user');

const userPopupLogin = new Fade('.popup--user');
const userPopupRegister = new Fade('.popup--user-register');

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
            console.log(overlay);
        });
    });
}

const consultationButtons = document.querySelectorAll(
    '.services-about button.button'
);
const consultationButtonsClose = document.querySelectorAll(
    '.popup__close-consultation'
);
const consultationPopup = new Fade('.popup--consultation');
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

if (overlay) {
    overlay.addEventListener('click', () => {
        overlayFade.fadeOut(350);
        consultationPopup.fadeOut(350);
        popupSuccessFade.fadeOut(350);
    });
}

if (consultationButtonsClose) {
    consultationButtonsClose.forEach(button => {
        button.addEventListener('click', () => {
            overlayFade.fadeOut(250);
            consultationPopup.fadeOut(250);
            popupSuccessFade.fadeOut(250);
        });
    });
}

const partnersButtons = document.querySelectorAll(
    '.partnership__text button.button'
);
const partnersButtonsClose = document.querySelectorAll(
    '.popup__close-partners'
);
const partnersPopup = new Fade('.popup--partners');
const partnersPopupContent = document.querySelector(
    '.popup--partners .popup__wrapper'
);

if (partnersButtons) {
    partnersButtons.forEach(button => {
        button.addEventListener('click', () => {
            overlayFade.fadeIn(350, 'block');
            partnersPopup.fadeIn(350, 'flex');
        });

        if (partnersPopupContent) {
            new PerfectScrollbar(partnersPopupContent);
        }
    });
}

if (overlay) {
    overlay.addEventListener('click', () => {
        overlayFade.fadeOut(350);
        partnersPopup.fadeOut(350);
        popupSuccessFade.fadeOut(350);
    });
}

if (partnersButtonsClose) {
    partnersButtonsClose.forEach(button => {
        button.addEventListener('click', () => {
            overlayFade.fadeOut(250);
            partnersPopup.fadeOut(250);
            popupSuccessFade.fadeOut(250);
        });
    });
}

if (popupSuccess) {
    popupSuccessClose.forEach(button => {
        button.addEventListener('click', () => {
            overlayFade.fadeOut(250);
            popupSuccessFade.fadeOut(250);
        });
    });
}
