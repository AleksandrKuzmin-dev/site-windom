function setModal(triggerSelector, modalSelector, closeSelector, timerValue) {
    const trigger = document.querySelector(triggerSelector),
          modal = document.querySelector(modalSelector),
          close = document.querySelector(closeSelector),
          body = document.querySelector('body'),
          video = modal.querySelector('video');
    
    let isOpen = false;
    let timeOut = null;

    const showModal = () => {
        modal.classList.remove('none');
        isOpen = true;
        body.style.overflow = 'hidden';
        timeOut = null;
        video && video.play();
    };

    const closeModal = () => {
        modal.classList.add('none');
        isOpen = false;
        body.style.overflow = 'unset';
        video && video.pause();
    };

    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape' && isOpen) {
            closeModal();
        };
    });

    modal.addEventListener('click', (e) => {
        if (e.target === modal) {
            closeModal();
        }
    })

    if (trigger) {
        trigger.addEventListener('click', () => {
            showModal();
        });
    };

    close.addEventListener('click', () => {
        closeModal();
    });

    if (timerValue) {
        timeOut = setTimeout(() => {
            showModal();
        }, timerValue);
    };
};

