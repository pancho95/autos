// Animation Menu Flotante

var navbar = document.querySelector('.heading')
var button = document.querySelector('.button-menu')
var logo = document.querySelector('.logito')
window.onscroll = function() {

  // pageYOffset or scrollY
  if (window.pageYOffset > 800) {
    navbar.classList.add('scrolled')
    button.classList.add('menucolor')
    logo.classList.add('hola')
  } else {
    navbar.classList.remove('scrolled')
    button.classList.remove('menucolor')
    logo.classList.remove('hola')
  }
}