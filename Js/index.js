//dropdown menu item

const barIcon = document.getElementById('barIcon');
const timesIcon = document.getElementById('timesIcon');
const menu = document.getElementById('menu');

barIcon.addEventListener('click', function(){
    menu.style.opacity = '1';
    menu.style.visibility = 'visible';
    menu.style.transform = 'scaleY(1)';
    barIcon.style.opacity = '0';
    barIcon.style.visibility = 'hidden';
    timesIcon.style.opacity = '1';
    timesIcon.style.visibility = 'visible'
});
timesIcon.addEventListener('click', function(){
    menu.style.opacity = '0';
    menu.style.visibility = 'hidden';
    menu.style.transform = 'scaleY(0)';
    barIcon.style.opacity = '1';
    barIcon.style.visibility = 'visible';
    timesIcon.style.opacity = '0';
    timesIcon.style.visibility = 'hidden'
})


// toltip function
const toltip = document.querySelector('#toltip');
const tol = document.querySelector('.toltip');
const toltip1 = document.querySelector('#toltip1');
const toltip2 = document.querySelector('#toltip2');
toltip.addEventListener('mouseenter', function(){
    tol.style.opacity = '1';
    tol.style.visibility = 'visible';
});
toltip.addEventListener('mouseleave', function(){
    tol.style.opacity = '0';
    tol.style.visibility = 'hiden';
});
toltip1.addEventListener('mouseenter', function(){
    toltip2.style.opacity = '1';
    toltip2.style.visibility = 'visible';
});
toltip1.addEventListener('mouseleave', function(){
    toltip2.style.opacity = '0';
    toltip2.style.visibility = 'hiden';
});