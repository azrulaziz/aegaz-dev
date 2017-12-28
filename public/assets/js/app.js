// script to slide/unslide mobile navigation menu
document.querySelector('#btn-open').addEventListener('click', openSlideMenu);
document.querySelector('.btn-close').addEventListener('click', closeSlideMenu);

function openSlideMenu() {
    document.getElementById('side-menu').style.width = '250px';
}

function closeSlideMenu() {
    document.getElementById('side-menu').style.width = '0';
    
}
