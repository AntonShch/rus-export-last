import lottie from 'lottie-web';

class Animate {
    constructor(icon, speed) {
        this.icon = icon;
        // this.speed = speed || 1;
        this.speed = speed;

        const animation = lottie.loadAnimation({
            container: document.querySelector(`.js-lottie-icon--${this.icon}`),
            renderer: 'svg',
            loop: false,
            autoplay: false,
            path: `/img/animations/${this.icon}.json`,
        });

        document.addEventListener('scroll', () => {
            const elem = document.querySelector(
                `.js-lottie-icon--${this.icon}`
            );
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
                animation.setSpeed(speed);
            }
        });
    }
}

const countries = new Animate('countries2', 1);

const head = new Animate('head', 1);

const impa = new Animate('impa', 1);

const city = new Animate('city', 1);

const hexagon = new Animate('hexagon1', 1.5);
// hexagon.speed(2);
