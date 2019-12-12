/* eslint-disable no-multi-assign */
/* eslint-disable no-undef */
/* eslint-disable camelcase */
class Map {
    constructor(element) {
        this.list = element;
    }

    mousemove(event) {
        let mouse_x = (mouse_y = 0);
        if (document.attachEvent != null) {
            mouse_x = window.event.clientX;
            mouse_y = window.event.clientY;
        } else if (!document.attachEvent && document.addEventListener) {
            mouse_x = event.clientX;
            mouse_y = event.clientY;
        }
    }

    init() {
        const $this = this;
        const popup = document.querySelector('.address-map-popup');

        $this.list.querySelectorAll('a').forEach(item => {
            item.addEventListener('mousemove', event => {
                const { target } = event;
                const y = target.style.top;
                const x = target.style.left;
                popup.style.top = y;
                popup.style.left = x;
                popup.style.opacity = 1;
            });
        });
    }
}

const list = document.querySelector('.address-map__list');

if (list) {
    const map = new Map(list).init();
}
