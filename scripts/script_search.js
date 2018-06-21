const search = document.querySelector('#search__button');

const inputSearch = document.querySelector('#search__input');

search.addEventListener('mouseenter', function (){
    inputSearch.classList.remove('input__search--hidden');
});

//muszę dodać ifem, że jeśli jest taka klasa to coś tam a jak jej nie ma to cośtam
