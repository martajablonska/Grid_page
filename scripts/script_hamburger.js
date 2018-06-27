const hamburgerBtn = document.querySelector('#hamburger__btn');

const hamburgerList = document.querySelector('#hamburger__list');

hamburgerBtn.addEventListener('click', function () {
    hamburgerList.classList.toggle('nav__list--dropdown'); 
});