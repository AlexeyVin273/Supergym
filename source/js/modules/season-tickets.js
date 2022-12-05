const initTicketsTab = () => {
  const tabTickets = document.querySelectorAll('.tab-tickets');

  if (tabTickets) {
    const buttonsList = document.querySelectorAll('.tab-tickets__button');
    const tabPagesList = document.querySelectorAll('.tab-tickets__page');
    const buttonMarker = document.querySelector('.tab-tickets__buttons-active');
    const buttonsListWrapper = document.querySelector('.tab-tickets__list-wrapper');
    let currentActiveLink;

    const setButtonMarker = (link) => {
      const linkSpan = link.querySelector('span');
      const markWidth = linkSpan.offsetWidth;
      const markPosition = link.offsetLeft + linkSpan.offsetLeft - buttonsListWrapper.scrollLeft;
      buttonMarker.setAttribute('style', `width: ${markWidth}px; left: ${markPosition}px;`);
      buttonMarker.style.width = markWidth;
      buttonMarker.style.left = markPosition;
    };

    if (buttonsList.length) {
      buttonsList[0].classList.add('is-active');
      setButtonMarker(buttonsList[0]);
      currentActiveLink = buttonsList[0];
    }

    if (tabPagesList.length) {
      tabPagesList[0].classList.add('is-active');
    }

    buttonsList.forEach((tabButton) => {
      tabButton.addEventListener('click', (evt) => {
        evt.preventDefault();

        const parentLink = evt.target.closest('.tab-tickets__button');
        const linkedTabPage = document.querySelector(parentLink.hash);
        if (linkedTabPage) {
          clearActiveItems();
          linkedTabPage.classList.add('is-active');
          parentLink.classList.add('is-active');

          setButtonMarker(parentLink);
          currentActiveLink = parentLink;
        }
      });
    });

    const clearActiveItems = () => {
      buttonsList.forEach((tabButton) => tabButton.classList.remove('is-active'));
      tabPagesList.forEach((tabPage) => tabPage.classList.remove('is-active'));
    };

    buttonsListWrapper.addEventListener('scroll', () => {
      setButtonMarker(currentActiveLink);
    });
  }
};

export {initTicketsTab};

