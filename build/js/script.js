'use strict';
const openNavListButton = document.querySelector('.js-open-navigation-list')
const sideMenu = document.querySelector('.side-menu')
const closeNavListButton = document.querySelector('.js-close-navigation-list')
const telInput = document.querySelector('.form__input--tel')

function showNavList() {
  sideMenu.classList.add('side-menu--open')
}

function closeNavList() {
  sideMenu.classList.remove('side-menu--open')
}

openNavListButton.addEventListener('click', showNavList)
closeNavListButton.addEventListener('click', closeNavList)

function validation() {
  if(/[a-z-а-я]/.test(telInput.value)) {
   telInput.value = ''
   showErrorMessage()
 } else {
  telInput.classList.remove('form__input--error')
 }
}

function showErrorMessage() {
  telInput.placeholder = 'Вводите цифры, пожалуйста'
  telInput.classList.add('form__input--error')
}

telInput.addEventListener('input', validation)
