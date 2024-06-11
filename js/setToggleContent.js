function setToggleContent(tabsSelector, activeTabSelector, contentSelector, activeContentSelector = null) {
    const tabsElements = document.querySelectorAll(tabsSelector),
        contentElements = document.querySelectorAll(contentSelector);

    let lastContent = contentElements[0];
    let lastTab = tabsElements[0];

    tabsElements.forEach((item, index) => {
        contentElements[index].classList.add('fadeOutFromNone');
        item.addEventListener('click', () => {
            lastContent.classList.remove(activeContentSelector);
            lastTab.classList.remove(activeTabSelector);

            tabsElements[index].classList.add(activeTabSelector);
            contentElements[index].classList.add(activeContentSelector);

            lastTab = tabsElements[index];
            lastContent = contentElements[index];
        });
    });
}
