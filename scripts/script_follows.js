const facebookFollow = document.querySelector('#facebook');

const facebookBtn = document.querySelector('#facebook__btn');




facebookBtn.addEventListener('click', function () {
    
    const span = facebookBtn.querySelector('span');
    
    
    if (span.classList.contains = 'fa-plus') {
    
    span.classList.replace('fa-plus', 'fa-check-circle');
        
    } else if (span.classList.contains = 'fa-check-circle') {
          span.classList.replace('fa-check-circle', 'fa-plus');
        
    }
                
});














