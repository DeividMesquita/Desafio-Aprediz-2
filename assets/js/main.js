$(document).ready(function(){
    $('.owl-carousel').owlCarousel({
        margin:20,
        loop:true,
        autoplay: true,
        autoplayTimeout:2500,
        nav: false,
        autoplayHoverPause: true,
        startPosition: 1,
        slideTransition: 'ease-in',
        responsive:{
            0:{
                items:3
            },
            600:{
                items:3
            },
            1000:{
                items:3
            }
        }
    })
})