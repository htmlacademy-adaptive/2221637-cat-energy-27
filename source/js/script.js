
let navAll = document.querySelector('.site-navigation');

let navList = navAll.querySelector('.site-navigation__list')
let navToggle = navAll.querySelector('.site-navigation__toggle');

// let mapFrame = document.querySelector('.map__frame');
// let mapImage = document.querySelector('.map__image');

navAll.classList.remove('site-navigation--no-js');

navToggle.onclick = function() {
  navToggle.classList.toggle('site-navigation__toggle--is-open');
  navList.classList.toggle('site-navigation__list--visible');
}

// mapFrame.classList.remove('map__frame--no-js');
// mapImage.classList.add('map__image--js');
