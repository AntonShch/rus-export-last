var addressDiv = document.querySelector('.js-address');

if (addressDiv) {
	var address = addressDiv.getAttribute('data-address');
}

console.log(address);

var isMobile = {
	Android: function () { return navigator.userAgent.match(/Android/i); },
	BlackBerry: function () { return navigator.userAgent.match(/BlackBerry/i); },
	iOS: function () { return navigator.userAgent.match(/iPhone|iPad|iPod/i); },
	Opera: function () { return navigator.userAgent.match(/Opera Mini/i); },
	Windows: function () { return navigator.userAgent.match(/IEMobile/i); },
	any: function () {
		return (isMobile.Android() || isMobile.BlackBerry() || isMobile.iOS() || isMobile.Opera() || isMobile.Windows());
	}
};
var map = document.querySelector('#map');

function init() {
	var myMap;
	myMap = new ymaps.Map(map, {
		center: [55.123018, 61.496535],
		zoom: 2,
	});
	myMap.behaviors.disable('scrollZoom');
	if (isMobile.any()) {
		myMap.behaviors.disable('drag');
	}
	coord(address, myMap)
}

function coord(address, map) {
	ymaps.geocode(address, {
		results: 1
	}).then(function (res) {
		var firstGeoObject = res.geoObjects.get(0),
		coords = firstGeoObject.geometry.getCoordinates();
		firstGeoObject.options.set('preset', 'islands#redIcon');
		map.geoObjects.add(firstGeoObject);
		map.setBounds(map.geoObjects.getBounds(), { checkZoomRange: true }).then(function(){ if(map.getZoom() > 16) map.setZoom(16);});
		
	});
}
if (map) {
	ymaps.ready(init);
}