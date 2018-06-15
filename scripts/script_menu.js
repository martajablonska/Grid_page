/*const navList = document.querySelector('#nav-detailed');

console.log(navList);

const menuList = document.querySelector('#nav-detailed__list');

const expandMenu = document.querySelector('#expand-menu');

const blog = menuList.querySelector('#blog');

blog.addEventListener('mouseover', function() {
    navList.classList.add('nav-detailed--full');
    navList.classList.remove('nav-detailed--half');
    expandMenu.classList.add('expand-menu--none');
    
});*/

/*const navList = document.querySelector('#nav-detailed');

const menuList = document.querySelector('#nav-detailed__list');

const expandMenu = document.querySelector('#expand-menu');

const store = menuList.querySelector('#store');

const storeHtml =     
                '<div class="expand-menu__item" id="store">' +
                    '<div class="expand-menu__item-header">'+
                        '<h4>Lorem ipsum</h4>' +
                        '<a href><img src="images/icons/icon_arrow.png"></a>'+
                    '</div>'+
                    '<ul>'+
                        '<li><a href>Apples</a></li>'+
                        '<li><a href>Oragnes</a></li>'+
                        '<li><a href>Banana</a></li>'+
                    '</ul>'+
                '</div>'+
                '<div class="expand-menu__item">'+
                    '<div class="expand-menu__item-header">'+
                        '<h4>Lorem ipsum</h4>'+
                        '<a href><img src="images/icons/icon_arrow.png"></a>'+
                    '</div>'+    
                    '<ul>'+
                        '<li><a href>Milk</a></li>'+
                        '<li><a href>Bread</a></li>'+
                        '<li><a href>Milk</a></li>'+
                        '<li><a href>Bread</a></li>'+
                        '<li><a href>Milk</a></li>'+
                        '<li><a href>Bread</a></li>'+
                    '</ul>'+
                '</div>'             
            ;


store.addEventListener('mouseover', function () {
    const home = document.querySelector('.expand-menu__item--home');
    home = expandMenu.removeChild(home);
/*a jakby spróbować usuwać po prostu cały element expand-menu__item i miałby jedną klasę a dodawałoby się po id*/
    /*let newElement = document.createElement('div');
    expandMenu.appendChild(newElement);
    newElement.innerHTML=storeHtml;
});*/

const menuList = document.querySelector('#nav-detailed__list');

const home = document.querySelector('#expand-menu__item--home');

const store = menuList.querySelector('#store');

const itemStore = document.querySelector('#expand-menu__item--store');

const blog = menuList.querySelector('#blog');

const itemBlog = document.querySelector('#expand-menu__item--blog');

store.addEventListener('mouseover', function () {
    home.classList.add('expand-menu__item--hidden');
    itemStore.classList.remove('expand-menu__item--hidden')
});

store.addEventListener('mouseout', function () {
    home.classList.remove('expand-menu__item--hidden')
    itemStore.classList.add('expand-menu__item--hidden');
});

blog.addEventListener('mouseover', function () {
    home.classList.add('expand-menu__item--hidden');
    itemBlog.classList.remove('expand-menu__item--hidden')
});

blog.addEventListener('mouseout', function () {
    home.classList.remove('expand-menu__item--hidden')
    itemBlog.classList.add('expand-menu__item--hidden');
});


//muszę jakoś zrobić żeby dało się przejść do tego rozwiniętego menu






/*store.addEventListener('mouseover', function(){
    if(home.style.display === "none") {
        home.style.display = "block";
        store.style.display === "none";
    } else {
        home.style.display="none";
        store.style.display="block";
    }
    

    
});*/








