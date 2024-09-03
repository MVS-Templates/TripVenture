$(document).ready(function () {
    $('.js-example-basic-single').select2();
    var swiper = new Swiper(".reviewsSlider", {
        navigation: {
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev",
        },
    });
});