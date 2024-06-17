function setSliderForFilters(triggerSelector, sliderWrapperSelector) {
    const trigger = document.querySelector(triggerSelector);
    const slider = document.querySelector(sliderWrapperSelector);

    trigger.addEventListener('click', () => {

        if (slider.scrollWidth - slider.scrollLeft <= slider.clientWidth) {
            slider.scrollTo({ left: 0, behavior: 'smooth' })
        } else {
            slider.scrollBy({ left: 146, behavior: 'smooth' })
        }
    });
}