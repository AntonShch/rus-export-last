import PerfectScrollbar from 'perfect-scrollbar';
import Fade from '../popup/popup';

const menuPopupClass = new Fade('.popup--menu');
const overlay = new Fade('.overlay');
const menuPopup = document.querySelector('.popup--menu');
const userButtonsLogin = document.querySelectorAll(
    '.header__buttons .button-menu'
);

if (userButtonsLogin) {
    userButtonsLogin.forEach(button => {
        button.addEventListener('click', function() {
            overlay.fadeOut(350);
            if (!menuPopup.classList.contains('is-active')) {
                menuPopup.classList.add('is-active');
                menuPopupClass.fadeIn(250, 'flex');
            } else {
                menuPopup.classList.remove('is-active');
                menuPopupClass.fadeOut(250);
            }
        });
    });
}

new PerfectScrollbar('.menu__nav');
