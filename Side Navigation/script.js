let sideNav = document.querySelector('.sideBar');
let overlay = document.querySelector('.overlay');
let main = document.querySelector('main');
let close = document.querySelector('#close');

close.addEventListener('click', function(){
    sideNav.style.width = '0%';
    main.style.marginLeft = '0vw';
    overlay.style.width = '0%';
})
function showNav(){
    sideNav.style.width = '30%';
}
function offcanvas(){
    sideNav.style.width = '30%';
    main.style.marginLeft = '30vw';
}
function opacity(){
    sideNav.style.width = '30%';
    main.style.marginLeft = '30vw';
    overlay.style.backgroundColor = 'rgba(0, 0, 0, 0.5)';
    overlay.style.width = '100%'
}