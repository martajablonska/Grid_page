const search = document.querySelector('#search__button');

const inputSearch = document.querySelector('#search__input');

search.addEventListener('click', function (){
    inputSearch.classList.toggle('nav__input--hidden');
});


