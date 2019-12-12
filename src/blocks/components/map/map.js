/* eslint-disable no-shadow */
/* eslint-disable no-use-before-define */
/* eslint-disable prefer-const */
/* eslint-disable no-undef */
/* eslint-disable block-scoped-var */
/* eslint-disable no-var */
/* eslint-disable vars-on-top */

const addressDiv = document.querySelector('.js-address');

if (addressDiv) {
    var address = addressDiv.getAttribute('data-address');
}

var isMobile = {
    Android() {
        return navigator.userAgent.match(/Android/i);
    },
    BlackBerry() {
        return navigator.userAgent.match(/BlackBerry/i);
    },
    iOS() {
        return navigator.userAgent.match(/iPhone|iPad|iPod/i);
    },
    Opera() {
        return navigator.userAgent.match(/Opera Mini/i);
    },
    Windows() {
        return navigator.userAgent.match(/IEMobile/i);
    },
    any() {
        return (
            isMobile.Android() ||
            isMobile.BlackBerry() ||
            isMobile.iOS() ||
            isMobile.Opera() ||
            isMobile.Windows()
        );
    },
};
const map = document.querySelector('#map');

function init() {
    let myMap;
    myMap = new ymaps.Map(map, {
        center: [55.123018, 61.496535],
        zoom: 2,
    });
    myMap.behaviors.disable('scrollZoom');
    if (isMobile.any()) {
        myMap.behaviors.disable('drag');
    }
    coord(address, myMap);
}

function coord(address, map) {
    ymaps
        .geocode(address, {
            results: 1,
        })
        .then(function(res) {
            const firstGeoObject = res.geoObjects.get(0);
            const coords = firstGeoObject.geometry.getCoordinates();
            firstGeoObject.options.set('preset', 'islands#redIcon');
            map.geoObjects.add(firstGeoObject);
            map.setBounds(map.geoObjects.getBounds(), {
                checkZoomRange: true,
            }).then(function() {
                if (map.getZoom() > 16) map.setZoom(16);
            });
        });
}
if (map) {
    ymaps.ready(init);
}
