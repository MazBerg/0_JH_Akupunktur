let xCoBtnA = 0
let yCoBtnA = 0
let xCoBtnB = 0
let yCoBtnB = 0
let xCoBtnC = 0
let yCoBtnC = 0
let xCoBtnD = 0
let yCoBtnD = 0

const btnAOne = document.querySelector(".btn-a-container")
const btnAOneTitle = document.querySelector(".btn-a-title-container")
const btnARing = document.querySelector(".btn-a-ring-pg-one")

const btnBOne = document.querySelector(".btn-b-container")
const btnBOneTitle = document.querySelector(".btn-b-title-container")

const btnCOne = document.querySelector(".btn-c-container")
const btnCOneTitle = document.querySelector(".btn-c-title-container")

const btnDOne = document.querySelector(".btn-d-container")
const btnDOneTitle = document.querySelector(".btn-d-title-container")

function calcBtnPos() {
    const windowWidth = window.innerWidth
    const windowHeight = window.innerHeight

    if ( (windowWidth/windowHeight) > 1.5) {
        // console.log("Full Width")
        // Btn A coordinates
        xCoBtnA = (windowWidth * 0.2168) + (windowWidth / 2)
        yCoBtnA = (windowHeight / 2) - ((windowWidth * 0.2168) * 0.503690036)
        btnAOne.style.display = "inline-flex"
        btnAOne.style.left = `${xCoBtnA}px`
        btnAOne.style.top = `${yCoBtnA}px`
        btnAOneTitle.style.left = `${xCoBtnA}px`
        btnAOneTitle.style.top = `${yCoBtnA}px`

        // Btn B coordinates
        xCoBtnB = (windowWidth * 0.1312) + (windowWidth / 2)
        yCoBtnB = (windowHeight / 2) + ((windowWidth * 0.1312) * 0.588414634)
        btnBOne.style.display = "inline-flex"
        btnBOne.style.left = `${xCoBtnB}px`
        btnBOne.style.top = `${yCoBtnB}px`
        btnBOneTitle.style.left = `${xCoBtnB}px`
        btnBOneTitle.style.top = `${yCoBtnB}px`

        // Btn C coordinates
        xCoBtnC = (windowWidth / 2) - (windowWidth * 0.0144)
        yCoBtnC = (windowHeight / 2) + ((windowWidth * 0.0144) * 12.36111111)
        btnCOne.style.display = "inline-flex"
        btnCOne.style.left = `${xCoBtnC}px`
        btnCOne.style.top = `${yCoBtnC}px`
        btnCOneTitle.style.left = `${xCoBtnC}px`
        btnCOneTitle.style.top = `${yCoBtnC}px`
        

        // Btn D coordinates
        xCoBtnD = (windowWidth * 0.2664) + (windowWidth / 2)
        yCoBtnD = (windowHeight / 2) + ((windowWidth * 0.2664) * 0.163663663)
        btnDOne.style.display = "inline-flex"
        btnDOne.style.left = `${xCoBtnD}px`
        btnDOne.style.top = `${yCoBtnD}px`
        btnDOneTitle.style.left = `${xCoBtnD}px`
        btnDOneTitle.style.top = `${yCoBtnD}px`

    } else if ( (windowWidth/windowHeight) <= 1.5) {
        // console.log("Full Height")
        // Btn A coordinates
        yCoBtnA = (windowHeight / 2) - (windowHeight * 0.163767246)
        xCoBtnA = ( (windowHeight * 0.163767246) * 1.985347985) + (windowWidth / 2)
        btnAOne.style.display = "inline-flex"
        btnAOne.style.left = `${xCoBtnA}px`
        btnAOne.style.top = `${yCoBtnA}px`
        btnAOneTitle.style.left = `${xCoBtnA}px`
        btnAOneTitle.style.top = `${yCoBtnA}px`

        // Btn B coordinates
        yCoBtnB = (windowHeight / 2) + (windowHeight * 0.115776844)
        xCoBtnB = ( (windowHeight * 0.115776844) * 1.699481865) + (windowWidth / 2)
        btnBOne.style.display = "inline-flex"
        btnBOne.style.left = `${xCoBtnB}px`
        btnBOne.style.top = `${yCoBtnB}px`
        btnBOneTitle.style.left = `${xCoBtnB}px`
        btnBOneTitle.style.top = `${yCoBtnB}px`

        // Btn C coordinates
        yCoBtnC = (windowHeight / 2) + (windowHeight * 0.26694661)
        xCoBtnC = (windowWidth / 2) - ( (windowHeight * 0.26694661) * 0.080898876)
        btnCOne.style.display = "inline-flex"
        btnCOne.style.left = `${xCoBtnC}px`
        btnCOne.style.top = `${yCoBtnC}px`
        btnCOneTitle.style.left = `${xCoBtnC}px`
        btnCOneTitle.style.top = `${yCoBtnC}px`

        // Btn D coordinates
        yCoBtnD = (windowHeight / 2) + (windowHeight * 0.065386922)
        xCoBtnD = (windowWidth / 2) + ( (windowHeight * 0.065386922) * 6.110091743)
        btnDOne.style.display = "inline-flex"
        btnDOne.style.left = `${xCoBtnD}px`
        btnDOne.style.top = `${yCoBtnD}px`
        btnDOneTitle.style.left = `${xCoBtnD}px`
        btnDOneTitle.style.top = `${yCoBtnD}px`
    }
}

calcBtnPos() // initilize button pos

window.onresize = calcBtnPos

// Slider functionality
const carousel = document.querySelector('.carousel');
const slider = document.querySelector('.slider');

const next = document.querySelector('.next');
const prev = document.querySelector('.prev');
let direction = -1;

next.addEventListener('click', function() {
    if (direction === 1) { // right
        direction = -1;
        // prepend currently visible child to the beginning so that way it will slide to the first element when we translate (-20%)
        slider.prepend(slider.lastElementChild);
    }

    direction = -1;
    carousel.style.justifyContent = 'flex-start';
    slider.style.transform = 'translate(-20%)';  
});

prev.addEventListener('click', function() {
    if (direction === -1) {
        direction = 1;
        slider.appendChild(slider.firstElementChild);
    }
    carousel.style.justifyContent = 'flex-end';    
    slider.style.transform = 'translate(20%)';  
  
});

slider.addEventListener('transitionend', function() {
  // get the last element and append it to the front
  
    if (direction === 1) {
        slider.prepend(slider.lastElementChild);
    } else {
        slider.appendChild(slider.firstElementChild);
    }
    
    slider.style.transition = 'none';
    slider.style.transform = 'translate(0)';
    setTimeout(() => {
        slider.style.transition = 'all 0.5s';
    })
}, false);