import PerfectScrollbar from 'perfect-scrollbar';
import Fade from '../popup/popup';

const menuPopupClass = new Fade('.popup--menu');
const overlay = new Fade('.overlay');
const header = document.querySelector('.header');
const menuPopup = document.querySelector('.popup--menu');
const menuButton = document.querySelector('.header__buttons .button-menu');

if (menuButton) {
    menuButton.addEventListener('click', () => {
        overlay.fadeOut(350);
        if (!menuPopup.classList.contains('is-active')) {
            header.classList.add('header--fixed');
            menuButton.classList.add('button-menu--active');
            menuPopup.classList.add('is-active');
            menuPopupClass.fadeIn(250, 'flex');
        } else {
            header.classList.remove('header--fixed');
            menuButton.classList.remove('button-menu--active');
            menuPopup.classList.remove('is-active');
            menuPopupClass.fadeOut(250);
        }
    });
}

new PerfectScrollbar('.menu__nav');
