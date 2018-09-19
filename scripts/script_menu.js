//variables

const expandItems = document.querySelectorAll('.expand--list');
const listItem = document.querySelectorAll('.menu__li');

 //to show only first expand item after page loaded

window.addEventListener('load', function(e) {              
    for (let i=1; i < expandItems.length; i++) {
            expandItems[i].style.display='none';
        };
});


//to show content of each menu list item in expand menu

function items(numb) {                                                  
        listItem[numb].addEventListener('mouseover', function () {
         for (let i=0; i < expandItems.length; i++) {
            expandItems[i].style.display='none';
        };

        expandItems[numb].style.display='block';
        this.querySelector('.menu__icon--hover').style.display = 'block';

    });
    
        listItem[numb].addEventListener('mouseout', function () {
        this.querySelector('.menu__icon--hover').style.display = 'none';
    });
};   


//i need this function beacuse menu list item from 4 to 6 don't have expand content

function itemsWithoutExpand(numb) {                                     
                                                                        
        listItem[numb].addEventListener('mouseover', function () {
         for (let i=0; i < expandItems.length; i++) {
            expandItems[i].style.display='none';
        };
            
        expandItems[0].style.display='block';   
        this.querySelector('.menu__icon--hover').style.display = 'block';

    });
    
        listItem[numb].addEventListener('mouseout', function () {
        this.querySelector('.menu__icon--hover').style.display = 'none';
    });
};

//for loops to give a number to functions above

for(let i = 1; i < 4; i++ ) {
    items(i);
};

for(let i=4; i < 7; i++) {
    itemsWithoutExpand(i);
};









