//variables

const prev = document.querySelector('#prev');
const next = document.querySelector('#next');

const dot1 = document.querySelector('#dot1');
const dot2 = document.querySelector('#dot2');
const dot3 = document.querySelector('#dot3');
const dot4 = document.querySelector('#dot4');

const slides = document.querySelectorAll('.slider__item');
const dots = document.querySelectorAll('.slider__dot');

let currentSlide = 0;

//functions

//show current slide and hide others 

function showSlide(n) {
    
    for (let i = 0; i < slides.length; i++) {
        slides[i].style.display='none';
    }
    
    slides[n].style.display='block';
    
    for (let j=0; j <slides.length; j++) {
        dots[j].classList.remove('current__dot');
    }

    dots[n].classList.add('current__dot');
};

//show next or previous slide function

function nextSlide () {
    currentSlide = currentSlide +1;
    
    if(currentSlide > (slides.length-1)) {
        currentSlide = 0;
    }
    
    showSlide(currentSlide);
};

function prevSlide () {
    currentSlide = currentSlide -1;
    
    if (currentSlide < 0) {
        currentSlide = 3;
    };
    
    showSlide(currentSlide);
};

    
//show slide after click on one of dots

function currentDot (n) {
    currentSlide = n;
    showSlide(currentSlide);
};

//listeners

next.addEventListener('click', nextSlide);

prev.addEventListener('click', prevSlide);

dot1.addEventListener('click', currentDot (0));

dot2.addEventListener('click', currentDot (1));

dot3.addEventListener('click', currentDot (2));

dot4.addEventListener('click', currentDot (3));



showSlide(currentSlide);

setInterval(function () {
    nextSlide()
}, 5000);



