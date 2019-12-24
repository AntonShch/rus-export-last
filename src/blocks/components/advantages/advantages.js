import PerfectScrollbar from 'perfect-scrollbar';
import Fade from '../../modules/popup/popup';

new PerfectScrollbar('.popup-advantages__content-wrapper');
new PerfectScrollbar('.popup-advantages__list > ul');

class Cross {
    constructor(link) {
        this.link = link;
    }

    getData(link) {
        this.link = link;
        const linkData = link.dataset.item;

        return linkData;
    }

    clear(link, activeClass) {
        this.link = link;
        this.activeClass = activeClass;

        link.forEach(e => {
            if (e.classList.contains(activeClass)) {
                e.classList.remove(activeClass);
            }
        });
    }
}

const popupAdv = new Fade('.popup--advantages');
const overlayFade = new Fade('.overlay');
const overlay = document.querySelector('.overlay');
const advLinks = document.querySelectorAll('button.advantages-item__wrapper');
const advLinksClose = document.querySelectorAll('.popup__close-advantages');
const popupAdvLinks = document.querySelectorAll('.popup-advantages__link');
const popupAdvContents = document.querySelectorAll(
    '.popup-advantages__content-item'
);

if (advLinks) {
    let advLinkData;
    let popupAdvLinkData;
    let popupAdvContentData;

    advLinks.forEach(advLink => {
        advLink.addEventListener('click', function click() {
            advLinkData = new Cross().getData(advLink);
            popupAdvLinks.forEach(popupAdvLink => {
                popupAdvLinkData = new Cross().getData(popupAdvLink);

                popupAdvContents.forEach(popupAdvContent => {
                    popupAdvContentData = new Cross().getData(popupAdvContent);

                    if (
                        advLinkData === popupAdvLinkData &&
                        popupAdvLinkData === popupAdvContentData
                    ) {
                        popupAdvLink.classList.add(
                            'popup-advantages__link--active'
                        );
                        popupAdvContent.classList.add(
                            'popup-advantages__content-item--active'
                        );
                    }
                });
            });

            popupAdvLinks.forEach(popupAdvLink => {
                popupAdvLink.addEventListener('click', function clickInner(e) {
                    e.preventDefault();
                    popupAdvLinks.forEach(link => {
                        link.classList.remove('popup-advantages__link--active');
                    });
                    this.classList.add('popup-advantages__link--active');
                    popupAdvLinkData = new Cross().getData(popupAdvLink);
                    popupAdvContents.forEach(popupAdvContent => {
                        popupAdvContentData = new Cross().getData(
                            popupAdvContent
                        );
                        if (popupAdvLinkData === popupAdvContentData) {
                            if (
                                !popupAdvContent.classList.contains(
                                    'popup-advantages__content-item--active'
                                )
                            ) {
                                popupAdvContent.classList.add(
                                    'popup-advantages__content-item--active'
                                );
                            }
                        } else {
                            popupAdvContent.classList.remove(
                                'popup-advantages__content-item--active'
                            );
                        }
                    });
                });
            });

            overlayFade.fadeIn(350, 'block');
            popupAdv.fadeIn(350, 'flex');
        });
    });
}

if (overlay) {
    overlay.addEventListener('click', () => {
        overlayFade.fadeOut(350);
        popupAdv.fadeOut(350);
        new Cross().clear(advLinks, 'advantages-item__wrapper--active');
        new Cross().clear(popupAdvLinks, 'popup-advantages__link--active');
        new Cross().clear(
            popupAdvContents,
            'popup-advantages__content-item--active'
        );
    });
}

if (advLinksClose) {
    advLinksClose.forEach(link => {
        link.addEventListener('click', () => {
            overlayFade.fadeOut(250);
            popupAdv.fadeOut(250);
            new Cross().clear(advLinks, 'advantages-item__wrapper--active');
            new Cross().clear(popupAdvLinks, 'popup-advantages__link--active');
            new Cross().clear(
                popupAdvContents,
                'popup-advantages__content-item--active'
            );
        });
    });
}