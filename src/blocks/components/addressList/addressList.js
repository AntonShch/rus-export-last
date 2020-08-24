const allAddressItems = document.querySelectorAll('.address-item');

for (const address of allAddressItems) {
    address.addEventListener('click', function (e) {
        e.preventDefault();
        const addressURL = address.getAttribute('data-link');
        for (const addressItem of allAddressItems) addressItem.classList.remove('address-item--active');
        address.classList.add('address-item--loading');
        setTimeout(function () {
            address.classList.remove('address-item--loading');
            address.classList.add('address-item--active');
            setTimeout(function () {
                window.location.href = addressURL;
            }, 500);
        }, 2500);
    });
}