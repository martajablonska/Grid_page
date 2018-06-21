const menuList = document.querySelector('.menu__list');

const expandItems = document.querySelectorAll('.expand--list');

//menu items

const home = menuList.querySelector('#home');

const itemHome = document.querySelector('#expand--home');

const store = menuList.querySelector('#store');

const itemStore = document.querySelector('#expand--store');

const blog = menuList.querySelector('#blog');

const itemBlog = document.querySelector('#expand--blog');

const community = menuList.querySelector('#community');

const itemCommunity = document.querySelector('#expand--community');

const about = menuList.querySelector('#about');

const contact = menuList.querySelector('#contact');

//expapand on click


for (let i=0; i < expandItems.length; i++) {
        expandItems[i].style.display='none';
};
    
itemHome.style.display ='block';

/*function showItem(item) {
    for (let i=0; i < expandItems.length; i++) {
        expandItems[i].style.display='none';
    };
    item.style.display='block';
};

CZEMU GDY PODSTAWIAM TĘ FUNKCJĘ DO NASŁUCHIWACZY TO TO NIE DZIAŁA

*/

home.addEventListener('mouseover', function() {
    
     for (let i=0; i < expandItems.length; i++) {
        expandItems[i].style.display='none';
    };
    itemHome.style.display='block';
});

store.addEventListener('mouseover', function() {
    
     for (let i=0; i < expandItems.length; i++) {
        expandItems[i].style.display='none';
    };
    itemStore.style.display='block';
});

blog.addEventListener('mouseover', function() {
    
     for (let i=0; i < expandItems.length; i++) {
        expandItems[i].style.display='none';
    };
    itemBlog.style.display='block';
});

community.addEventListener('mouseover', function() {
    
     for (let i=0; i < expandItems.length; i++) {
        expandItems[i].style.display='none';
    };
    itemCommunity.style.display='block';
});

about.addEventListener('mouseover', function() {
    
     for (let i=0; i < expandItems.length; i++) {
        expandItems[i].style.display='none';
    };
    itemHome.style.display='block';
});

contact.addEventListener('mouseover', function() {
    
     for (let i=0; i < expandItems.length; i++) {
        expandItems[i].style.display='none';
    };
    itemHome.style.display='block';
});



