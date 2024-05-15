const setSliderBeforeAfter = (sliderSelector, beforeSelector, imageSelector, changeSelector) => {
    const slider = document.querySelector(sliderSelector);
    const before = document.querySelector(beforeSelector);
    const beforeImage = before ? before.querySelector(imageSelector) : null;
    const change = document.querySelector(changeSelector);
    const body = document.body;

    let isActive = false;

    const updateSlider = () => {
        let width = slider.offsetWidth;
        beforeImage.style.width = `${width}px`;
    };

    if (slider && beforeImage && change) {
        document.addEventListener('DOMContentLoaded', updateSlider);
        window.addEventListener('resize', updateSlider);

        change.addEventListener('mousedown', () => {
            isActive = true;
        });

        body.addEventListener('mouseup', () => {
            isActive = false;
        });

        body.addEventListener('mouseleave', () => {
            isActive = false;
        });

        const beforeAfterSlider = (x) => {
            let shift = Math.max(0, Math.min(x, slider.offsetWidth));
            before.style.width = `${shift}px`;
            change.style.left = `${shift}px`;
        };

        const pauseEvents = (e) => {
            e.preventDefault();
            e.stopPropagation();
            return false;
        };

        body.addEventListener('mousemove', (e) => {
            if (!isActive) return;
            let x = e.pageX - slider.getBoundingClientRect().left;
            beforeAfterSlider(x);
            pauseEvents(e);
        });

        change.addEventListener('touchstart', (e) => {
            isActive = true;
            pauseEvents(e);
        }, {passive: false});

        body.addEventListener('touchend', () => {
            isActive = false;
        });

        body.addEventListener('touchcancel', () => {
            isActive = false;
        });

        body.addEventListener('touchmove', (e) => {
            if (!isActive) return;
            if (e.changedTouches && e.changedTouches.length > 0) {
                let x = e.changedTouches[0].pageX - slider.getBoundingClientRect().left;
                beforeAfterSlider(x);
                pauseEvents(e);
            }
        }, {passive: false});
    } else {
        console.error('One or more required elements were not found.');
    }
};


