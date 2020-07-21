'use strict';

window.addEventListener("load", function () {
  var mainMenu = document.querySelector('.menu-list');
  var menuToggle = document.querySelector('.main-nav__button');

  if (menuToggle) {
    mainMenu.classList.remove('menu-list--no-js');
    menuToggle.classList.remove('main-nav__button--none');

    menuToggle.addEventListener('click', function () {
      if (mainMenu.classList.contains('menu-list--closed')) {
        mainMenu.classList.remove('menu-list--closed');
        mainMenu.classList.add('menu-list--open');
        menuToggle.classList.add('main-nav__button--open');
      } else {
        mainMenu.classList.add('menu-list--closed');
        mainMenu.classList.remove('menu-list--open');
        menuToggle.classList.remove('main-nav__button--open');
        menuToggle.classList.add('main-nav__button--closed');
      }
    });
  }
});
