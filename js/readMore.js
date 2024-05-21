function setReadMore(triggerSelector, hideElementsSelector, visibleElementsSelector) {
    const trigger = document.querySelector(triggerSelector),
        hideElements = document.querySelectorAll(hideElementsSelector),
        visibleElements = document.querySelectorAll(visibleElementsSelector);

    trigger.addEventListener('click', (e) => {
        e.preventDefault();
        
        trigger.style.display = 'none';

        hideElements.forEach(hideElement => hideElement.style.display = 'none');
        visibleElements.forEach(visibleElement => visibleElement.style.display = 'block');
    });
}
