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
 console.log(telInput.value)
 const regexp = /a-z-A-Z/
 if(telInput.value === regexp) {
   console.log('замечена буковка')
 }
 return alert('Нельзя буквы1')
}

telInput.addEventListener('input',validation)
