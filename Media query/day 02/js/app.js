const bars = document.querySelector("#bars");
const navbar = document.querySelector("nav ul");
const navbarOverlay = document.querySelector(".navbar-overlay");
console.log(navbarOverlay)


bars.addEventListener(
    'click',
    function () {
        navbar.classList.toggle('open');
        navbarOverlay.classList.add('open-navbar-overlay');
    }
)


navbarOverlay.addEventListener(
    'click',
    function(){
        navbar.classList.remove('open');
        navbarOverlay.classList.remove('open-navbar-overlay');


    }
)

