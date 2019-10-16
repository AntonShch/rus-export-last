
import PerfectScrollbar from 'perfect-scrollbar';

class Header {
    constructor(element, dropdowns) {
        this.header = document.querySelector(element);
        this.dropdowns = dropdowns;
    }

    toScrollFixHeader(header) {
			let target = header.offsetHeight;
			window.addEventListener("scroll", function(){
				let scrolled = pageYOffset || document.body.scrollTop;
				if (scrolled > target) {
					header.classList.add('header--fixed');
				} else {
					header.classList.remove('header--fixed');
				}
			});
		}

    dropDownOpen(dropdowns) {
        let $this = this;
        for (let dropdown of dropdowns) {
            let dropdownContainer = document.querySelector(dropdown);
            let dropdownButton = dropdownContainer.querySelector('.dropdown-trigger');
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
            dropdownButton.classList.remove('dropdown-trigger--active');
            dropdownMenu.classList.remove('dropdown-menu--active');
        }
		}
		
		perfectScroll(dropdownPhones) {
			new PerfectScrollbar(dropdownPhones, {
				wheelSpeed: 0.3,
				wheelPropagation: false,
			});
		}

    init() {
			const $this = this;
			const header = $this.header;
			const dropdowns = $this.dropdowns;
			$this.dropDownOpen(dropdowns);
			$this.toScrollFixHeader(header);
			$this.perfectScroll('.header-phone-all__wrapper');

    }
}

const header = new Header('.header', ['.header__contacts', '.header__buttons']).init();