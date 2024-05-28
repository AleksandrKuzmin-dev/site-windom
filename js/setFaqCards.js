function setFaqCards(cardSelector, triggerSelector, arrowSelector, answerSelector) {
    const cards = document.querySelectorAll(cardSelector);

    const rotateArrow = (answer, arrow) => {
        if (answer.classList.contains('none')) {
            arrow.style.transform = 'rotate(180deg)';
        } else {
            arrow.style.transform = 'rotate(360deg)';
        }
    };

    cards.forEach((card) => {
        const trigger = card.querySelector(triggerSelector);
        const arrow = card.querySelector(arrowSelector);
        const answer = card.querySelector(answerSelector);

        rotateArrow(answer, arrow);

        trigger.addEventListener('click', () => {
            answer.classList.toggle('none');
            rotateArrow(answer, arrow);
        });
    });
}
