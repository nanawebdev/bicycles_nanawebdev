'use strict';
(function () {
  var openNavListButton = document.querySelector('.js-open-navigation-list');
  var sideMenu = document.querySelector('.side-menu');
  var closeNavListButton = document.querySelector('.js-close-navigation-list');
  var telInput = document.querySelector('input[type=tel]');
  var overlay = document.querySelector('.overlay');

  function showNavList() {
    if (sideMenu) {
      sideMenu.classList.add('side-menu--open');
    }

    if (overlay) {
      overlay.classList.add('overlay--show');
    }
  }

  function closeNavList() {
    if (overlay) {
      overlay.classList.remove('overlay--show');
    }

    if (sideMenu) {
      sideMenu.classList.remove('side-menu--open');
    }
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
    if (telInput) {
      telInput.placeholder = 'Вводите цифры, пожалуйста';
      telInput.classList.add('form__input--error');
    }
  }

  if (openNavListButton) {
    openNavListButton.addEventListener('click', showNavList);
  }

  if (closeNavListButton) {
    closeNavListButton.addEventListener('click', closeNavList);
  }

  if (telInput) {
    telInput.addEventListener('input', validate);
  }
})();
