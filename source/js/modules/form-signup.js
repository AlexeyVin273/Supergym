import Inputmask from '../vendor/inputmask';

const initForm = () => {

  const signupForm = document.querySelector('.signup__form');
  const phoneNumberInput = signupForm.querySelector('.signup__form input[type="tel"]');

  if (signupForm) {
    Inputmask({regex: '[+]*(\\d\\s?)*'}).mask('.signup__form input[type="tel"]'); //eslint-disable-line

    signupForm.addEventListener('submit', (evt) => {
      const phonePattern = /[+]*(\d\s?)*/gm;
      if (!phonePattern.test(phoneNumberInput.value)) {
        evt.preventDefault();
        phoneNumberInput.classList.add('error');
      } else {
        phoneNumberInput.classList.remove('error');
      }
    });
  }
};

export {initForm};
