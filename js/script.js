// ---------------slickslider---------------

$(document).ready(function () {
    $('.slider-one').slick({
        arrows: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        speed: 1000,
        swipe: true,

        responsive: [{
            breakpoint: 766,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1
            }
        }]
    });

});

$(document).ready(function () {
    $('.sliderlist-page__slider').slick({
        arrows: true,
        slidesToShow: 4,
        slidesToScroll: 2,
        speed: 1000,
        swipe: true,

        responsive: [{
            breakpoint: 400,
            settings: {
                slidesToShow: 2,
                slidesToScroll: 2
            }
        }]
    });

});


// ----------parallax------------
let bg = document.querySelector('.about-progect');
let torus = document.querySelector('.about-progect-content__right-torus');
let cone = document.querySelector('.cone4');
let sphere = document.querySelector('.sphere');

window.addEventListener('mousemove', function (e) {
    let x = e.clientX / window.innerWidth;
    let y = e.clientY / window.innerHeight;
    torus.style.transform = 'translate(-' + x * 10 + 'px, -' + y * 10 + 'px)';
    cone.style.transform = 'translate(-' + x * 10 + 'px, -' + y * 10 + 'px)';
    sphere.style.transform = 'translate(' + x * 10 + 'px, +' + y * 10 + 'px)';

});