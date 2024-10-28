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
    function () {
        navbar.classList.remove('open');
        navbarOverlay.classList.remove('open-navbar-overlay');


    }
)

document.addEventListener(
    'scroll',
    function (e) {

        if (window.scrollY > 48) {
            document.body.classList.add('stick')
        }else{
            document.body.classList.remove('stick')

        }
    }
)


$('.multiple-items').slick({
    dots: true,
    infinite: false,
    speed: 5000,
    slidesToShow: 4,
    slidesToScroll: 2,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
      // You can unslick at a given breakpoint now by adding:
      // settings: "unslick"
      // instead of a settings object
    ]
  });
