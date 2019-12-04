/* eslint-disable no-param-reassign */
/* eslint-disable no-empty-function */
/* eslint-disable no-useless-constructor */
class Tabs {
    constructor() {}

    linkActive(link, tabMenus) {
        for (let i = 0; i < tabMenus.length; i++) {
            tabMenus[i].className = 'tab-link';
        }
        link.className = 'tab-link tab-link--active';
    }

    contentActive(link, tabContents) {
        for (let i = 0; i < tabContents.length; i++) {
            tabContents[i].className = 'tab-content';
        }
        document.getElementById(link.dataset.id).className =
            'tab-content tab-content--active';
    }

    init(tabMenus, tabContents) {
        const $this = this;
        if (tabMenus && tabContents) {
            const links = document.querySelectorAll(tabMenus);
            const contents = document.querySelectorAll(tabContents);
            for (let i = 0; i < links.length; i++) {
                links[i].addEventListener('click', function(e) {
                    e.preventDefault();
                    $this.linkActive(this, links);
                    $this.contentActive(this, contents);
                });
            }
        }
    }
}

const tabs = new Tabs().init('.tab-link', '.tab-content');
