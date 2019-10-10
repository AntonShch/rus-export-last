
class Header {
    constructor(element, dropdowns) {
        this.header = document.querySelector(element);
        this.dropdowns = dropdowns;
    }

    dropDownOpen(dropdowns) {
        $this = this;
        for (let dropdown of dropdowns) {
            let dropdownContainer = document.querySelector(dropdown);
            let dropdownButton = dropdownContainer.querySelector('.dropdown-trigger')
            let dropdownMenu = dropdownContainer.querySelector('.dropdown-menu');
            dropdownButton.addEventListener('click', function (e) {
                e.preventDefault();
                if (dropdownMenu.classList.contains('dropdown-menu--active')) {
                    dropdownButton.classList.remove('dropdown-trigger--active');
                    dropdownMenu.classList.remove('dropdown-menu--active');
                } else {
                    $this.dropDownClose(dropdowns);
                    dropdownButton.classList.add('dropdown-trigger--active');
                    dropdownMenu.classList.add('dropdown-menu--active');
                }
            });
        }
    }

    dropDownClose(dropdowns) {
        for (let dropdown of dropdowns) {
            const dropdownContainer = document.querySelector(dropdown);
            const dropdownButton = dropdownContainer.querySelector('.dropdown-trigger')
            const dropdownMenu = dropdownContainer.querySelector('.dropdown-menu');
            dropdownButton.classList.remove('dropdown-trigger--active')
            dropdownMenu.classList.remove('dropdown-menu--active')
        }

    }

    init() {
        this.dropDownOpen(this.dropdowns)
    }
}

const header = new Header('.header', ['.header__contacts', '.header__buttons']).init();