class Tabs {
    static FIRST_TABS_ITEM = 0;
    static NAV_CLASS = 'nav-item';
    static ACTIVE_NAV_CLASS = 'nav-item-active';
    static CONTENT_CLASS = 'content-item';
    static ACTIVE_CONTENT_CLASS = 'content-item-active';

    constructor(rootEl, defaultOpenIndex = Tabs.FIRST_TABS_ITEM) {
        this.rootEl = rootEl;
        this.tabsItems = Array.from(this.rootEl.children);
        this.tabsNavs = Array.from(this.tabsItems[0].children);
        this.tabsContents = Array.from(this.tabsItems[1].children);

        this.bindStyles();
        this.bindEvents();
        this.openContentByIndex(defaultOpenIndex);
    }

    bindStyles() {
        this.tabsNavs.forEach((item) => {
            item.classList.add(Tabs.NAV_CLASS);
        })
        this.tabsContents.forEach((item) => {
            item.classList.add(Tabs.CONTENT_CLASS);
        })
    }

    bindEvents() {
        this.rootEl.addEventListener('click', this.onRootElClick.bind(this))
    }

    onRootElClick(e) {
        const navEl = e.target.closest('.' + Tabs.NAV_CLASS);
        if (!navEl) return;

        const navOpenEl = this.getOpenNavEl(e.target);

        let index;
        if (navOpenEl && navEl !== navOpenEl) {
            index = this.tabsNavs.indexOf(navOpenEl);
            this.navClose(navOpenEl);
            this.contentClose(this.tabsContents[index]);
        }

        this.navOpen(e.target);
        index = this.tabsNavs.indexOf(e.target);
        this.contentOpen(this.tabsContents[index])
    }

    contentOpen(contentEl) {
        contentEl.classList.add(Tabs.ACTIVE_CONTENT_CLASS);
    }

    contentClose(contentEl) {
        contentEl.classList.remove(Tabs.ACTIVE_CONTENT_CLASS);
    }

    getOpenNavEl() {
        return this.rootEl.querySelector('.' + Tabs.ACTIVE_NAV_CLASS);
    }

    navOpen(contentEl) {
        contentEl.classList.add(Tabs.ACTIVE_NAV_CLASS);
    }

    navClose(navEl) {
        navEl.classList.remove(Tabs.ACTIVE_NAV_CLASS);
    }

    openContentByIndex(index) {
        const contentEl = this.tabsContents[index];
        const navEl = this.tabsNavs[index];
        this.contentOpen(contentEl);
        this.navOpen(navEl);
    }
}