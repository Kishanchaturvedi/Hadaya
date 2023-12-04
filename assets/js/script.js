

function openBtn() {
    document.getElementById("my-slider").style.display = "block"
}
function closeBtn() {
    document.getElementById("my-slider").style.display = "none"
}

var acc = document.getElementsByClassName("accordions");
var i;

for (i = 0; i < acc.length; i++) {
    acc[i].addEventListener("click", function () {
        this.classList.toggle("actives");
        var panel = this.nextElementSibling;
        if (panel.style.maxHeight) {
            panel.style.maxHeight = null;
        } else {
            panel.style.maxHeight = panel.scrollHeight + "px";
        }
    });
}


// range********************
window.onload = function () {
    slideOne();
    slideTwo();
}

let sliderOne = document.getElementById("slider-1");
let sliderTwo = document.getElementById("slider-2");
let displayValOne = document.getElementById("range1");
let displayValTwo = document.getElementById("range2");
let minGap = 0;
let sliderTrack = document.querySelector(".slider-track");
let sliderMaxValue = document.getElementById("slider-1").max;

function slideOne() {
    if (parseInt(sliderTwo.value) - parseInt(sliderOne.value) <= minGap) {
        sliderOne.value = parseInt(sliderTwo.value) - minGap;
    }
    displayValOne.textContent = sliderOne.value;
    fillColor();
}
function slideTwo() {
    if (parseInt(sliderTwo.value) - parseInt(sliderOne.value) <= minGap) {
        sliderTwo.value = parseInt(sliderOne.value) + minGap;
    }
    displayValTwo.textContent = sliderTwo.value;
    fillColor();
}
function fillColor() {
    percent1 = (sliderOne.value / sliderMaxValue) * 100;
    percent2 = (sliderTwo.value / sliderMaxValue) * 100;
    sliderTrack.style.background = `linear-gradient(to right, #dadae5 ${percent1}% , #AA8117 ${percent1}% , #AA8117 ${percent2}%, #dadae5 ${percent2}%)`;
}




// pdp increse decress start ***********************************
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
// pdp increse decress close ***********************************




// pagination 
function toggleActive(link) {
    var links = document.querySelectorAll('.nav-link.pagination a');
    links.forEach(function (el) {
        el.classList.remove('pagination-active');
    });
    link.classList.add('pagination-active');
}

var currentPage = 1;
var totalPages = 7; // Total number of pages

document.querySelector('.next-btn').addEventListener('click', function () {
    if (currentPage < totalPages) {
        currentPage++;
        updatePagination(currentPage);
    }
});

document.querySelector('.pre-btn').addEventListener('click', function () {
    if (currentPage > 1) {
        currentPage--;
        updatePagination(currentPage);
    }
});

function updatePagination(currentPage) {
    var activeLink = document.querySelector('.pagination-active');
    activeLink.classList.remove('pagination-active');
    var links = document.querySelectorAll('.nav-link.pagination a');
    links[currentPage - 1].classList.add('pagination-active');
}


// plp page************************







// plpBtn *****************************************************
function shortBtn() {
    document.getElementById("shordropdown").classList.toggle("shordropdown");
}
function filterBtn() {
    document.getElementById("filter").classList.toggle("filter-none");
}



// account page 
function accountBtn() {
    document.querySelector("#mobileAccount").classList.toggle("d-none");
}
function closeAccountBtn() {
    document.querySelector("#mobileAccount").classList.remove("d-block");
    document.querySelector("#mobileAccount").classList.add("d-none");
}








