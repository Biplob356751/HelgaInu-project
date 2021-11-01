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
});
