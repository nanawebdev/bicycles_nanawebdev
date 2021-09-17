'use strict';
(function () {
  var openNavListButton = document.querySelector('.js-open-navigation-list');
  var sideMenu = document.querySelector('.side-menu');
  var closeNavListButton = document.querySelector('.js-close-navigation-list');
  var telInput = document.querySelector('.form__input--tel');
  var overlay = document.querySelector('.overlay');

  function showNavList() {
    sideMenu.classList.add('side-menu--open');
    overlay.classList.add('overlay--show');
  }

  function closeNavList() {
    overlay.classList.remove('overlay--show');
    sideMenu.classList.remove('side-menu--open');
  }

  function validate() {
    if (/[a-z-а-я]/.test(telInput.value)) {
      telInput.value = '';
      showErrorMessage();
    } else {
      telInput.classList.remove('form__input--error');
    }
  }

  function showErrorMessage() {
    telInput.placeholder = 'Вводите цифры, пожалуйста';
    telInput.classList.add('form__input--error');
  }

  openNavListButton.addEventListener('click', showNavList);
  closeNavListButton.addEventListener('click', closeNavList);
  telInput.addEventListener('input', validate);
})();
