// Bars button pop up
const barsBtn = document.querySelector('.bars_btn');
const barsBtnImg = document.querySelector('.bars_btn img');
const dropDownMenu = document.querySelector('.dropdown_menu');

barsBtn.onclick = function () {
    dropDownMenu.classList.toggle('open');
    const isOpen = dropDownMenu.classList.contains('open');
}


// SLIDERR
let items = document.querySelectorAll('.slider .list .item');
let next = document.getElementById('next');
let thumbnails = document.querySelectorAll('.thumbnail .item');

// panjang 5
let countItem = items.length;
let itemActive = 0;

// next button for auto run
next.onclick = function(){
    itemActive = itemActive + 1;
    if(itemActive >= countItem){
        itemActive = 0;
    }
    showSlider();
}

//auto run slider delay 7s
let refreshInterval = setInterval(() => {
    next.click();
}, 7000)

//show open
function showSlider(){
    let itemActiveOld = document.querySelector('.slider .list .item.active');
    let thumbnailActiveOld = document.querySelector('.thumbnail .item.active');

    //remove
    itemActiveOld.classList.remove('active');
    thumbnailActiveOld.classList.remove('active');

    //active
    items[itemActive].classList.add('active');
    thumbnails[itemActive].classList.add('active');

    //reset timer auto run
    clearInterval(refreshInterval);
    refreshInterval = setInterval(() => {
        next.click();
    }, 7000)
}

// click thumbnail
thumbnails.forEach((thumbnail, index) => {
    thumbnail.addEventListener('click', () => {
        itemActive = index;
        showSlider();
    })
})


// CARD SLIDER TRENDING SATU
var containerSatu = document.getElementById('container1')
var sliderSatu = document.getElementById('slider1');
var slidesSatu = document.getElementsByClassName('slide1').length;
var buttonsSatu = document.getElementsByClassName('btn1');

var currentPositionSatu = 0;
var currentMarginSatu = 0;
var slidesPerPageSatu = 1;
var slidesCountSatu = slidesSatu - slidesPerPageSatu;
var containerWidthSatu = containerSatu.offsetWidth;
var prevKeyActiveSatu = false;
var nextKeyActiveSatu = true;

window.addEventListener("resize", checkWidthSatu);

function checkWidthSatu() {
    containerWidthSatu = containerSatu.offsetWidth;
    console.log(containerWidthSatu);
    setParamsSatu(containerWidthSatu);
}

// TOTAL CARD ada 10
function setParamsSatu(wSatu) {
    if (wSatu < 551) {
        slidesPerPageSatu = 1;
    } else {
        if (wSatu < 901) {
            slidesPerPageSatu = 2;
        } else {
            if (wSatu < 1101) {
                slidesPerPageSatu = 3;
            } else {
                slidesPerPageSatu = 4;
            }
        }
    }

    // biar pas minus 3
    slidesCountSatu = slidesSatu - slidesPerPageSatu - 3;
    if (currentPositionSatu > slidesCountSatu) {
        currentPositionSatu -= slidesPerPageSatu;
    }
    currentMarginSatu = - currentPositionSatu * (100 / slidesPerPageSatu);
    sliderSatu.style.marginLeft = currentMarginSatu + '%';
    if (currentPositionSatu > 0) {
        buttonsSatu[0].classList.remove('inactive');
    }
    if (currentPositionSatu < slidesCountSatu) {
        buttonsSatu[1].classList.remove('inactive');
    }
    if (currentPositionSatu >= slidesCountSatu) {
        buttonsSatu[1].classList.add('inactive');
    }
}

setParamsSatu();

function slideRightSatu() {
    if (currentPositionSatu != 0) {
        sliderSatu.style.marginLeft = currentMarginSatu + (100 / slidesPerPageSatu) + '%';
        currentMarginSatu += (100 / slidesPerPageSatu);
        currentPositionSatu--;
    }
    if (currentPositionSatu === 0) {
        buttonsSatu[0].classList.add('inactive');
    }
    if (currentPositionSatu < slidesCountSatu) {
        buttonsSatu[1].classList.remove('inactive');
    }
}

function slideLeftSatu() {
    if (currentPositionSatu != slidesCountSatu) {
        sliderSatu.style.marginLeft = currentMarginSatu - (100 / slidesPerPageSatu) + '%';
        currentMarginSatu -= (100 / slidesPerPageSatu);
        currentPositionSatu++;
    }
    if (currentPositionSatu == slidesCountSatu) {
        buttonsSatu[1].classList.add('inactive');
    }
    if (currentPositionSatu > 0) {
        buttonsSatu[0].classList.remove('inactive');
    }
}


// CARD SLIDER NEW DUA
var containerDua = document.getElementById('container2')
var sliderDua = document.getElementById('slider2');
var slidesDua = document.getElementsByClassName('slide2').length;
var buttonsDua = document.getElementsByClassName('btn2');

var currentPositionDua = 0;
var currentMarginDua = 0;
var slidesPerPageDua = 1;
var slidesCountDua = slidesDua - slidesPerPageDua;
var containerWidthDua = containerDua.offsetWidth;
var prevKeyActiveDua = false;
var nextKeyActiveDua = true;

window.addEventListener("resize", checkWidthDua);

function checkWidthDua() {
    containerWidthDua = containerDua.offsetWidth;
    setParamsDua(containerWidthDua);
}

// TOTAL CARD ada 10
function setParamsDua(wDua) {
    if (wDua < 551) {
        slidesPerPageDua = 1;
    } else {
        if (wDua < 901) {
            slidesPerPageDua = 2;
        } else {
            if (wDua < 1101) {
                slidesPerPageDua = 3;
            } else {
                slidesPerPageDua = 4;
            }
        }
    }
    
    // biar pas minus 3
    slidesCountDua = slidesDua - slidesPerPageDua - 3;
    if (currentPositionDua > slidesCountDua) {
        currentPositionDua -= slidesPerPageDua;
    }
    currentMarginDua = - currentPositionDua * (100 / slidesPerPageDua);
    sliderDua.style.marginLeft = currentMarginDua + '%';
    if (currentPositionDua > 0) {
        buttonsDua[0].classList.remove('inactive');
    }
    if (currentPositionDua < slidesCountDua) {
        buttonsDua[1].classList.remove('inactive');
    }
    if (currentPositionDua >= slidesCountDua) {
        buttonsDua[1].classList.add('inactive');
    }
}

setParamsDua();

function slideRightDua() {
    if (currentPositionDua != 0) {
        sliderDua.style.marginLeft = currentMarginDua + (100 / slidesPerPageDua) + '%';
        currentMarginDua += (100 / slidesPerPageDua);
        currentPositionDua--;
    }
    if (currentPositionDua === 0) {
        buttonsDua[0].classList.add('inactive');
    }
    if (currentPositionDua < slidesCountDua) {
        buttonsDua[1].classList.remove('inactive');
    }
}

function slideLeftDua() {
    if (currentPositionDua != slidesCountDua) {
        sliderDua.style.marginLeft = currentMarginDua - (100 / slidesPerPageDua) + '%';
        currentMarginDua -= (100 / slidesPerPageDua);
        currentPositionDua++;
    }
    if (currentPositionDua == slidesCountDua) {
        buttonsDua[1].classList.add('inactive');
    }
    if (currentPositionDua > 0) {
        buttonsDua[0].classList.remove('inactive');
    }
}


// CARD SLIDER POPULER TIGA
var containerTiga = document.getElementById('container3')
var sliderTiga = document.getElementById('slider3');
var slidesTiga = document.getElementsByClassName('slide3').length;
var buttonsTiga = document.getElementsByClassName('btn3');

var currentPositionTiga = 0;
var currentMarginTiga = 0;
var slidesPerPageTiga = 1;
var slidesCountTiga = slidesTiga - slidesPerPageTiga;
var containerWidthTiga = containerTiga.offsetWidth;
var prevKeyActiveTiga = false;
var nextKeyActiveTiga = true;

window.addEventListener("resize", checkWidthTiga);

function checkWidthTiga() {
    containerWidthTiga = containerTiga.offsetWidth;
    setParamsTiga(containerWidthTiga);
}

// TOTAL CARD ada 10
function setParamsTiga(wTiga) {
    if (wTiga < 551) {
        slidesPerPageTiga = 1;
    } else {
        if (wTiga < 901) {
            slidesPerPageTiga = 2;
        } else {
            if (wTiga < 1101) {
                slidesPerPageTiga = 3;
            } else {
                slidesPerPageTiga = 4;
            }
        }
    }
    
    // biar pas minus 3
    slidesCountTiga = slidesTiga - slidesPerPageTiga - 3;
    if (currentPositionTiga > slidesCountTiga) {
        currentPositionTiga -= slidesPerPageTiga;
    }
    currentMarginTiga = - currentPositionTiga * (100 / slidesPerPageTiga);
    sliderTiga.style.marginLeft = currentMarginTiga + '%';
    if (currentPositionTiga > 0) {
        buttonsTiga[0].classList.remove('inactive');
    }
    if (currentPositionTiga < slidesCountTiga) {
        buttonsTiga[1].classList.remove('inactive');
    }
    if (currentPositionTiga >= slidesCountTiga) {
        buttonsTiga[1].classList.add('inactive');
    }
}

setParamsTiga();

function slideRightTiga() {
    if (currentPositionTiga != 0) {
        sliderTiga.style.marginLeft = currentMarginTiga + (100 / slidesPerPageTiga) + '%';
        currentMarginTiga += (100 / slidesPerPageTiga);
        currentPositionTiga--;
    }
    if (currentPositionTiga === 0) {
        buttonsTiga[0].classList.add('inactive');
    }
    if (currentPositionTiga < slidesCountTiga) {
        buttonsTiga[1].classList.remove('inactive');
    }
}

function slideLeftTiga() {
    if (currentPositionTiga != slidesCountTiga) {
        sliderTiga.style.marginLeft = currentMarginTiga - (100 / slidesPerPageTiga) + '%';
        currentMarginTiga -= (100 / slidesPerPageTiga);
        currentPositionTiga++;
    }
    if (currentPositionTiga == slidesCountTiga) {
        buttonsTiga[1].classList.add('inactive');
    }
    if (currentPositionTiga > 0) {
        buttonsTiga[0].classList.remove('inactive');
    }
}