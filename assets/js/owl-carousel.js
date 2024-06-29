
$('#carouselCard-2').owlCarousel({
    loop: true,

    // slideTransition: 'linear',
    // responsiveClass:true,
    items: 4,
    nav: false,
    dots: false,
    responsive: {
        0: {
            margin: 10,
            items: 2
        },
        600: {
            margin: 30,
            items: 3
        },
        1200: {
            margin: 50,
            items: 5
        }
    }
})

$(document).ready(function () {
    $('#carouselCard-1').owlCarousel({
        loop: true,

        margin: 15,
        dots: true,
        nav: true,
        responsive: {
            0: {
                items: 2
            },
            600: {
                items: 2
            },
            1000: {
                autoWidth: true,
                items: 2.5
            }
        }
    })
    $(".owl-prev").html('<i class="bi bi-arrow-left"></i>');
    $(".owl-next").html('<i class="bi bi-arrow-right"></i>');
});




$(document).ready(function () {
    $('#carousel-perspective').owlCarousel({
        // loop: true,
        margin: 15,
        rtl: true,
        loop: true,
        autoplay: true,
        slideTransition: 'linear',
        autoplayTimeout: 3000,
        autoplaySpeed: 3000,
        autoplayHoverPause: false,
        autoWidth: true,
        dots: false,
        nav: false,
        responsive: {
            0: {
                items: 1
            },
            600: {
                items: 3
            },
            1000: {
                items: 4
            }
        }
    })
    $(".owl-prev").html('<i class="bi bi-arrow-left"></i>');
    $(".owl-next").html('<i class="bi bi-arrow-right"></i>');
});


$('#owl-carousel4').owlCarousel({
    loop: true,
    margin: 20,
    nav: false,
    dots: true,
    responsive: {
        0: {
            items: 1
        },
        600: {
            items: 1
        },
        1000: {
            items: 1,
            dots: true,
        }
    }
})


// pdp carousel 
$(document).ready(function () {
    $('#carouselCard-3').owlCarousel({
        loop: true,
        dots: false,
        autoWidth: true,
        nav: true,
        responsive: {
            0: {
                margin: 10,
                items: 1
            },
            600: {
                margin: 15,
                items: 3
            },
            1000: {
                margin: 19,
                items: 4
            }
        }
    });
    $(".owl-prev").html('<i class="bi bi-arrow-left"></i>');
    $(".owl-next").html('<i class="bi bi-arrow-right"></i>');

});
// pdp carousel *************************************
$('#owls').owlCarousel({
    loop: false,
    margin: 10,
    nav: false,
    items: 4,
    responsive: {
        0: {
            items: 1
        },
        600: {
            items: 2
        },
        1000: {
            items: 2
        }
    }
})

//********************* */ plp ***************************************************


$('#paginationContainer').owlCarousel({
    autoWidth: true,
    margin: 15,
    loop: false,
    dots: false,
    nav: false,
    responsive: {
        0: {
            items: 1
        },
        600: {
            items: 3
        },
        1000: {
            items: 4
        }
    }
})


// order-details******************

$(document).ready(function () {
    $('#carouselCard-5').owlCarousel({
        loop: true,
        dots: false,
        autoWidth: true,
        nav: true,
        responsive: {
            0: {
                margin: 10,
                items: 1
            },
            600: {
                margin: 15,
                items: 3
            },
            1000: {
                margin: 19,
                items: 4
            }
        }
    });
    $(".owl-prev").html('<i class="bi bi-arrow-left"></i>');
    $(".owl-next").html('<i class="bi bi-arrow-right"></i>');

});