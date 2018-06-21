const menuList = document.querySelector('.menu__list');

const expandItems = document.querySelectorAll('.expand--list');

//menu items

const home = menuList.querySelector('#home');
 
const itemHome = document.querySelector('#expand--home');

const hoverHome = home.querySelector('.menu__icon--hover');

const store = menuList.querySelector('#store');

const itemStore = document.querySelector('#expand--store');

const hoverStore = store.querySelector('.menu__icon--hover');

const blog = menuList.querySelector('#blog');

const itemBlog = document.querySelector('#expand--blog');

const hoverBlog = blog.querySelector('.menu__icon--hover');

const community = menuList.querySelector('#community');

const itemCommunity = document.querySelector('#expand--community');

const hoverCommunity = community.querySelector('.menu__icon--hover');

const contests = menuList.querySelector('#contests');

const hoverContests = contests.querySelector('.menu__icon--hover');

const about = menuList.querySelector('#about');

const hoverAbout = about.querySelector('.menu__icon--hover');

const contact = menuList.querySelector('#contact');

const hoverContact = contact.querySelector('.menu__icon--hover');

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
    
    hoverHome.style.display = 'block';
});
    
home.addEventListener('mouseout', function () {
    hoverHome.style.display = 'none';
});

store.addEventListener('mouseover', function() {
    
     for (let i=0; i < expandItems.length; i++) {
        expandItems[i].style.display='none';
    };
    itemStore.style.display='block';
    
    hoverStore.style.display = 'block';
});

store.addEventListener('mouseout', function () {
    hoverStore.style.display = 'none';
});

blog.addEventListener('mouseover', function() {
    
     for (let i=0; i < expandItems.length; i++) {
        expandItems[i].style.display='none';
    };
    itemBlog.style.display='block';
    
    hoverBlog.style.display = 'block';
});

blog.addEventListener('mouseout', function () {
    hoverBlog.style.display = 'none';
});

community.addEventListener('mouseover', function() {
    
     for (let i=0; i < expandItems.length; i++) {
        expandItems[i].style.display='none';
    };
    itemCommunity.style.display='block';
    
    hoverCommunity.style.display = 'block';
});

community.addEventListener('mouseout', function () {
    hoverCommunity.style.display = 'none';
});

contests.addEventListener('mouseover', function() {
    
     for (let i=0; i < expandItems.length; i++) {
        expandItems[i].style.display='none';
    };
    itemHome.style.display='block';
    
    hoverContests.style.display = 'block';
});

contests.addEventListener('mouseout', function () {
    hoverContests.style.display = 'none';
});

about.addEventListener('mouseover', function() {
    
     for (let i=0; i < expandItems.length; i++) {
        expandItems[i].style.display='none';
    };
    itemHome.style.display='block';
    
    hoverAbout.style.display = 'block';
});

about.addEventListener('mouseout', function () {
    hoverAbout.style.display = 'none';
});

contact.addEventListener('mouseover', function() {
    
     for (let i=0; i < expandItems.length; i++) {
        expandItems[i].style.display='none';
    };
    itemHome.style.display='block';
    
    hoverContact.style.display = 'block';
});

contact.addEventListener('mouseout', function () {
    hoverContact.style.display = 'none';
});



