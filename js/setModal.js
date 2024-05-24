function setModal(triggerSelector, modalSelector, closeSelector, timerValue) {
    const triggers = document.querySelectorAll(triggerSelector),
          modal = document.querySelector(modalSelector),
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

    if (triggers) {
        triggers.forEach(trigger => {
            trigger.addEventListener('click', () => {
                showModal();

                const close = modal.querySelector(closeSelector);
                
                close.addEventListener('click', () => {
                    closeModal();
                });

            });
        })
    };

    

    if (timerValue) {
        timeOut = setTimeout(() => {
            showModal();
        }, timerValue);
    };
};

