'use strict';
const openNavListButton = document.querySelector('.js-open-navigation-list')
const sideMenu = document.querySelector('.side-menu')
const closeNavListButton = document.querySelector('.js-close-navigation-list')

function showNavList() {
  sideMenu.classList.add('side-menu--open')
}

function closeNavList() {
  sideMenu.classList.remove('side-menu--open')
}

openNavListButton.addEventListener('click', showNavList)
closeNavListButton.addEventListener('click', closeNavList)
