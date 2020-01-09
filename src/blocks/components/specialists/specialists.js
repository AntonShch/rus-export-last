import lottie from 'lottie-web';

class Animate {
    constructor(icon, speed) {
        this.icon = icon;
        this.speed = speed;

        this.init(icon, speed);
    }

    playOnScroll(icon, speed, animation) {
        this.icon = icon;
        this.speed = speed;
        this.animation = animation;
        document.addEventListener('scroll', () => {
            const elem = document.querySelector(`.js-lottie-icon--${icon}`);

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

    init(icon, speed) {
        this.icon = icon;
        this.speed = speed;
        const animation = lottie.loadAnimation({
            container: document.querySelector(`.js-lottie-icon--${icon}`),
            renderer: 'svg',
            loop: false,
            autoplay: false,
            path: `./img/animations/${icon}.json`,
        });

        this.playOnScroll(icon, speed, animation);
    }
}

const countries = new Animate('countries', 1);

const head = new Animate('head', 1);

const impa = new Animate('impa', 1);

const city = new Animate('city', 1);

const hexagon = new Animate('hexagon', 1.5);
