 
class Tabs {

	constructor(){}

	linkActive (link,tabMenus) {
		for (var i = 0; i < tabMenus.length; i++) {
			tabMenus[i].className = 'tab-link';
		}
		link.className = 'tab-link tab-link--active';
	}

	contentActive (link,tabContents) {
		for (var i = 0; i < tabContents.length; i++) {
			tabContents[i].className = 'tab-content';
		}
		document.getElementById(link.dataset.id).className = 'tab-content tab-content--active';
	}

	init (tabMenus,tabContents) {
		let $this = this;
		if (tabMenus && tabContents) {
			let links = document.querySelectorAll(tabMenus);
			let contents = document.querySelectorAll(tabContents);
			for (var i = 0; i < links.length; i++) {
				links[i].addEventListener('click', function(e) {
					e.preventDefault();
					$this.linkActive(this,links)
					$this.contentActive(this,contents)
				});
			}
		}
	}

}

const tabs = new Tabs().init('.tab-link','.tab-content');