import lottie from 'lottie-web';

class Animate {
    constructor(container, path) {
        this.container = container;
        this.path = path;

        const animation = lottie.loadAnimation({
            container: document.querySelector(this.container),
            renderer: 'svg',
            loop: false,
            autoplay: false,
            path: this.path,
        });

        document.addEventListener('scroll', () => {
            const elem = document.querySelector(this.container);
            const targetPosition = {
                top: window.pageYOffset + elem.getBoundingClientRect().top,
                bottom:
                    window.pageYOffset + elem.getBoundingClientRect().bottom,
            };
            const windowPosition = {
                top: window.pageYOffset,
                bottom:
                    window.pageYOffset + document.documentElement.clientHeight,
            };

            if (
                targetPosition.bottom - 200 > windowPosition.top &&
                targetPosition.top + 300 < windowPosition.bottom
            ) {
                animation.play();
            }
        });
    }
}

const countries = new Animate(
    '.js-lottie-icon--counties',
    '/img/animates/countries.json'
);

const head = new Animate('.js-lottie-icon--head', '/img/animates/head.json');

const impa = new Animate('.js-lottie-icon--impa', '/img/animates/impa.json');

const flags = new Animate('.js-lottie-icon--flags', '/img/animates/head.json');

const hexagon = new Animate(
    '.js-lottie-icon--hexagon',
    '/img/animates/hexagon.json'
);
