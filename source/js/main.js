'use strict';
(function () {
  var openNavListButton = document.querySelector('.js-open-navigation-list');
  var sideMenu = document.querySelector('.side-menu');
  var closeNavListButton = document.querySelector('.js-close-navigation-list');
  var telInput = document.querySelector('input[type=tel]');
  var overlay = document.querySelector('.overlay');
  var mainPage = document.querySelector('.main-page');
  var navLinks = document.querySelectorAll('.navigation-list__link');
  var form = document.querySelector('form');

  function showNavList() {
    if (sideMenu) {
      sideMenu.classList.add('side-menu--open');
      mainPage.style.overflow = 'hidden';
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
      mainPage.style.overflow = 'auto';
    }
  }

  form.addEventListener('submit', function (e) {
    e.preventDefault();
    validate();
  });

  var formWrapperAfter = document.querySelector('.form-section__form-wrapper');

  function validate() {
    if (/[a-z-а-я]/.test(telInput.value)) {
      formWrapperAfter.classList.add('form-section__form-wrapper--show-after');
      showErrorMessage();
    } else {
      formWrapperAfter.classList.remove('form-section__form-wrapper--show-after');
      telInput.classList.remove('form__input--error');
    }
  }

  for (var index = 0; index < navLinks.length; index++) {
    var element = navLinks[index];

    element.addEventListener('click', function () {
      closeNavList();
    });
  }

  function showErrorMessage() {
    if (telInput) {
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
