import lottie from 'lottie-web';

class Animate {
    constructor(container, pathToSVG, speed) {
        // this.icon = icon;
        this.speed = speed;

        const animation = lottie.loadAnimation({
            container: document.querySelector(container),
            renderer: 'svg',
            loop: false,
            autoplay: false,
            path: pathToSVG,
        });

        document.addEventListener('scroll', () => {
            const elem = document.querySelector(container);

            if (elem) {
                const targetPosition = {
                    top: window.pageYOffset + elem.getBoundingClientRect().top,
                    bottom:
                        window.pageYOffset +
                        elem.getBoundingClientRect().bottom,
                };
                const windowPosition = {
                    top: window.pageYOffset,
                    bottom:
                        window.pageYOffset +
                        document.documentElement.clientHeight,
                };

                if (
                    targetPosition.bottom - 200 > windowPosition.top &&
                    targetPosition.top + 300 < windowPosition.bottom
                ) {
                    animation.play();
                    animation.setSpeed(speed);
                }
            }
        });
    }
}

const countries = new Animate(
    '.js-lottie-icon--countries2',
    './img/animations/countries2.json',
    1
);

const head = new Animate(
    '.js-lottie-icon--head',
    './img/animations/head.json',
    1
);

const impa = new Animate(
    '.js-lottie-icon--impa',
    './img/animations/impa.json',
    1
);

const city = new Animate(
    '.js-lottie-icon--city',
    './img/animations/city.json',
    1
);

const hexagon = new Animate(
    '.js-lottie-icon--hexagon1',
    './img/animations/hexagon1.json',
    1.5
);
// hexagon.speed(2);
