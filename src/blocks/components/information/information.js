/* eslint-disable no-param-reassign */
/* eslint-disable no-empty-function */
/* eslint-disable no-useless-constructor */

import Swiper from 'swiper';

class Tabs {
    constructor() {}

    linkActive(link, tabMenus) {
        for (let i = 0; i < tabMenus.length; i++) {
            tabMenus[i].className = 'tab-link';
        }
        link.className = 'tab-link tab-link--active';
    }

    contentActive(link, tabContents) {
        for (let i = 0; i < tabContents.length; i++) {
            tabContents[i].className = 'tab-content';
        }
        document.getElementById(link.dataset.id).className =
            'tab-content tab-content--active';
    }

    init(tabMenus, tabContents) {
        const $this = this;
        if (tabMenus && tabContents) {
            const links = document.querySelectorAll(tabMenus);
            const contents = document.querySelectorAll(tabContents);
            for (let i = 0; i < links.length; i++) {
                links[i].addEventListener('click', function(e) {
                    e.preventDefault();
                    $this.linkActive(this, links);
                    $this.contentActive(this, contents);
                });
            }
        }
    }
}

const tabs = new Tabs().init('.tab-link', '.tab-content');

const helpbox = new Swiper('.helpbox .swiper-container', {
    init: true,
    initialSlide: 0,
    direction: 'horizontal',
    slidesPerView: 1,
    navigation: {
        nextEl: '.helpbox .swiper-navigation .swiper-button-next',
        prevEl: '.helpbox .swiper-navigation .swiper-button-prev',
    },
});

// const incotermsHelps = document.querySelectorAll('.incoterms-item__title');

// incotermsHelps.forEach(incotermsHelp => {
//     const incotermsHelpBtn = incotermsHelp.querySelector('.incoterms-item__hint-icon');
//     const incotermsHelpPopup = incotermsHelp.querySelector('.incoterms-item__hint-popup');

//     incotermsHelpBtn.addEventListener('mouseenter', function() {
//         incotermsHelpPopup.classList.add('.incoterms-item__hint-popup--active');
//         console.log('Hi');
//     });
//     incotermsHelpBtn.addEventListener('mouseleave', function() {
//         incotermsHelpPopup.classList.remove('.incoterms-item__hint-popup--active');
//         console.log("Bue ");
//     });
// });
