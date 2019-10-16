
class fastLinks {
    constructor(element) {
        this.fastLinksContainer = document.querySelector(element);
				this.fastLinks = this.fastLinksContainer.querySelectorAll('.fast-links-item');
    }

    afterScroll(fastLinksContainer) {
			let target = window.innerHeight || document.documentElement.clientHeight || document.body.clientHeight;
			window.addEventListener("scroll", function(){
				let scrolled = pageYOffset || document.body.scrollTop;
				if (scrolled > target) {
					fastLinksContainer.classList.add('fast-links--mini');
				} else {
					fastLinksContainer.classList.remove('fast-links--mini');
				}
			});
		}

    init() {
        this.afterScroll(this.fastLinksContainer);
    }
}

const fastLinksInit = new fastLinks('.fast-links').init();