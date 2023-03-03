
let navAll = document.querySelector('.navigation');

let navList = navAll.querySelector('.navigation__list')
let navToggle = navAll.querySelector('.navigation__toggle');

// let mapFrame = document.querySelector('.map__frame');
// let mapImage = document.querySelector('.map__image');

navAll.classList.remove('navigation--no-js');

navToggle.onclick = function() {
  navToggle.classList.toggle('navigation__toggle--is-open');
  navList.classList.toggle('navigation__list--visible');
}

// mapFrame.classList.remove('map__frame--no-js');
// mapImage.classList.add('map__image--js');
