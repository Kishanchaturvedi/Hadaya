





function openBtn() {
    document.getElementById("my-slider").style.display = "block"
}
function closeBtn() {
    document.getElementById("my-slider").style.display = "none"
}





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
        autoWidth: true,
        margin: 15,
        rtl: true,
        loop: true,
        autoplay: true,
        slideTransition: 'linear',
        autoplayTimeout: 3000,
        autoplaySpeed: 3000,
        autoplayHoverPause: false,
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

// Get the elements
const decreaseBtn = document.querySelector('.decrease-btn');
const increaseBtn = document.querySelector('.increase-btn');
const countingSpan = document.querySelector('.counting');

// Add event listeners to the buttons
decreaseBtn.addEventListener('click', () => {
    // Decrease the count by 1 when the decrease button is clicked
    let count = parseInt(countingSpan.textContent);
    if (count > 1) {
        count--;
        countingSpan.textContent = count;
    }
});

increaseBtn.addEventListener('click', () => {
    // Increase the count by 1 when the increase button is clicked
    let count = parseInt(countingSpan.textContent);
    count++;
    countingSpan.textContent = count;
});


// plp page************************







// plpBtn *****************************************************
function shortBtn() {
    document.getElementById("shordropdown").classList.toggle("shordropdown");
}
function filterBtn() {
    document.getElementById("filter").classList.toggle("filter-none");
}



// // range********************
// window.onload = function () {
//     slideOne();
//     slideTwo();
// }

// let sliderOne = document.getElementById("slider-1");
// let sliderTwo = document.getElementById("slider-2");
// let displayValOne = document.getElementById("range1");
// let displayValTwo = document.getElementById("range2");
// let minGap = 0;
// let sliderTrack = document.querySelector(".slider-track");
// let sliderMaxValue = document.getElementById("slider-1").max;

// function slideOne() {
//     if (parseInt(sliderTwo.value) - parseInt(sliderOne.value) <= minGap) {
//         sliderOne.value = parseInt(sliderTwo.value) - minGap;
//     }
//     displayValOne.textContent = sliderOne.value;
//     fillColor();
// }
// function slideTwo() {
//     if (parseInt(sliderTwo.value) - parseInt(sliderOne.value) <= minGap) {
//         sliderTwo.value = parseInt(sliderOne.value) + minGap;
//     }
//     displayValTwo.textContent = sliderTwo.value;
//     fillColor();
// }
// function fillColor() {
//     percent1 = (sliderOne.value / sliderMaxValue) * 100;
//     percent2 = (sliderTwo.value / sliderMaxValue) * 100;
//     sliderTrack.style.background = `linear-gradient(to right, #dadae5 ${percent1}% , #AA8117 ${percent1}% , #AA8117 ${percent2}%, #dadae5 ${percent2}%)`;
// }


// pdp 

// account page 
function accountBtn() {
    document.querySelector("#mobileAccount").classList.toggle("d-none");
}
function closeAccountBtn() {
    document.querySelector("#mobileAccount").classList.remove("d-block");
    document.querySelector("#mobileAccount").classList.add("d-none");
}