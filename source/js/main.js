import {onButtonSubmit, sendFormSubmit} from "./form.js";

const navigationElement = document.querySelector('.navigation__list');
const headerToggleElement = document.querySelector('.header__toggle');

const openMenu = () => {
  headerToggleElement.addEventListener('click', () => {
    if (headerToggleElement.classList.contains('header__toggle--closed')) {
      headerToggleElement.classList.remove('header__toggle--closed');
      headerToggleElement.classList.add('header__toggle--opened');
    } else {
      headerToggleElement.classList.add('header__toggle--closed');
      headerToggleElement.classList.remove('header__toggle--opened');
    }

    navigationElement.classList.toggle('navigation__list--visible');
  });
}

openMenu();
sendFormSubmit(onButtonSubmit);
