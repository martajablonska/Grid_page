const search = document.querySelector('#search');

const inputSearch = document.querySelector('#input__search');

search.addEventListener('mouseenter', function (){
    inputSearch.classList.remove('input__search--hidden');
});

//muszę dodać ifem, że jeśli jest taka klasa to coś tam a jak jej nie ma to cośtam
