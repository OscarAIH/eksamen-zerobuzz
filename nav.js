document.addEventListener('DOMContentLoaded', function() { // DOM, er med til at forberede performance og sætter javascript igang når html dokumentet er loaded //
    var burgerMenu = document.getElementById('burger-menu');
    var navMenu = document.getElementById('nav-menu');

    burgerMenu.addEventListener('click', function() { // tilføjer en klik function til burgermenu //
        navMenu.classList.toggle('show');
    });
});