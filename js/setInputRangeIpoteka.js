function formatNumber(number) {
    return Number(number).toLocaleString('ru-RU');
}

function setInputsRangeIpoteka(inputSelector, wrapperSelector, outputSelector) {
    const wrappers = document.querySelectorAll(wrapperSelector);

    const changeInput = (rangeInput, wrapper, output) => {
        const value = rangeInput.value;
        const max = rangeInput.max;
        const min = rangeInput.min;
        output.textContent = value;

        // Вычисляем процент заполнения
        const percent = ((value - min) / (max - min)) * 100;

        output.textContent = formatNumber(value);
        wrapper.style.setProperty('--range-progress-width', `${percent}%`);
        rangeInput.style.background = `linear-gradient(to right, $range-progress-color 0%, $range-progress-color ${percent}%, #ddd ${percent}%, #ddd 100%)`;
    };

    wrappers.forEach((wrapper) => {
        const rangeInput = wrapper.querySelector(inputSelector);
        const output = wrapper.querySelector(outputSelector);

        rangeInput.addEventListener('input', function () {
            changeInput(rangeInput, wrapper, output);
        });

        changeInput(rangeInput, wrapper, output);
    });
}
