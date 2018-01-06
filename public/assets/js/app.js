// script to slide/unslide mobile navigation menu
document.querySelector('#btn-open').addEventListener('click', openSlideMenu);
document.querySelector('.btn-close').addEventListener('click', closeSlideMenu);

function openSlideMenu() {
    document.getElementById('side-menu').style.width = '250px';
}

function closeSlideMenu() {
    document.getElementById('side-menu').style.width = '0';
    
}


// preloader script

$('.preload-logo').show("fade", 2500).delay(1000).hide("slide", {direction: 'up'}, 250);
$('.preloader').delay(3000).slideUp(800, function() {
    $('html, body').css({
        'overflow': 'initial'
    });
});