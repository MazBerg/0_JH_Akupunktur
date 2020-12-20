// Loading Screen functionality
window.addEventListener("load", () => {
    const preload = document.querySelector("#loader")
    preload.classList.add("finished-loading")
})

// Initializing x & y coordinates of buttons A-H
let xCoBtnA = 0
let yCoBtnA = 0
let xCoBtnB = 0
let yCoBtnB = 0
let xCoBtnC = 0
let yCoBtnC = 0
let xCoBtnD = 0
let yCoBtnD = 0
let xCoBtnE = 0
let yCoBtnE = 0
let xCoBtnF = 0
let yCoBtnF = 0
let xCoBtnG = 0
let yCoBtnG = 0
let xCoBtnH = 0
let yCoBtnH = 0

const btnAOne = document.querySelector(".btn-a-container")
const btnAOneTitle = document.querySelector(".btn-a-title-container")

const btnBOne = document.querySelector(".btn-b-container")
const btnBOneTitle = document.querySelector(".btn-b-title-container")

const btnCOne = document.querySelector(".btn-c-container")
const btnCOneTitle = document.querySelector(".btn-c-title-container")

const btnDOne = document.querySelector(".btn-d-container")
const btnDOneTitle = document.querySelector(".btn-d-title-container")

const btnEOne = document.querySelector(".btn-e-container")
const btnEOneTitle = document.querySelector(".btn-e-title-container")

const btnFOne = document.querySelector(".btn-f-container")
const btnFOneTitle = document.querySelector(".btn-f-title-container")

const btnGOne = document.querySelector(".btn-g-container")
const btnGOneTitle = document.querySelector(".btn-g-title-container")

const btnHOne = document.querySelector(".btn-h-container")
const btnHOneTitle = document.querySelector(".btn-h-title-container")

const btnBack = document.querySelector(".back-btn")

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

        // Btn E coordinates
        xCoBtnE = (windowWidth * 0.1568) + (windowWidth / 2)
        yCoBtnE = (windowHeight / 2) - ((windowWidth * 0.1568) * 1.053571429)
        btnEOne.style.display = "inline-flex"
        btnEOne.style.left = `${xCoBtnE}px`
        btnEOne.style.top = `${yCoBtnE}px`
        btnEOneTitle.style.left = `${xCoBtnE}px`
        btnEOneTitle.style.top = `${yCoBtnE}px`

        // Btn F coordinates
        xCoBtnF = (windowWidth * 0.1664) + (windowWidth / 2)
        yCoBtnF = (windowHeight / 2) - ((windowWidth * 0.1664) * 0.09375)
        btnFOne.style.display = "inline-flex"
        btnFOne.style.left = `${xCoBtnF}px`
        btnFOne.style.top = `${yCoBtnF}px`
        btnFOneTitle.style.left = `${xCoBtnF}px`
        btnFOneTitle.style.top = `${yCoBtnF}px`

        // Btn G coordinates
        xCoBtnG = (windowWidth * 0.136) + (windowWidth / 2)
        yCoBtnG = (windowHeight / 2) + ((windowWidth * 0.136) * 1.267647059)
        btnGOne.style.display = "inline-flex"
        btnGOne.style.left = `${xCoBtnG}px`
        btnGOne.style.top = `${yCoBtnG}px`
        btnGOneTitle.style.left = `${xCoBtnG}px`
        btnGOneTitle.style.top = `${yCoBtnG}px`

        // Btn H coordinates
        xCoBtnH = (windowWidth * 0.264) + (windowWidth / 2)
        yCoBtnH = (windowHeight / 2) - ((windowWidth * 0.264) * 0.339393939)
        btnHOne.style.display = "inline-flex"
        btnHOne.style.left = `${xCoBtnH}px`
        btnHOne.style.top = `${yCoBtnH}px`
        btnHOneTitle.style.left = `${xCoBtnH}px`
        btnHOneTitle.style.top = `${yCoBtnH}px`

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

        // Btn E coordinates
        yCoBtnE = (windowHeight / 2) - (windowHeight * 0.247750449)
        xCoBtnE = (windowWidth / 2) + ( (windowHeight * 0.247750449) * 0.949152542)
        btnEOne.style.display = "inline-flex"
        btnEOne.style.left = `${xCoBtnE}px`
        btnEOne.style.top = `${yCoBtnE}px`
        btnEOneTitle.style.left = `${xCoBtnE}px`
        btnEOneTitle.style.top = `${yCoBtnE}px`

        // Btn F coordinates
        yCoBtnF = (windowHeight / 2) - (windowHeight * 0.02339532)
        xCoBtnF = (windowWidth / 2) + ( (windowHeight * 0.02339532) * 10.66666667)
        btnFOne.style.display = "inline-flex"
        btnFOne.style.left = `${xCoBtnF}px`
        btnFOne.style.top = `${yCoBtnF}px`
        btnFOneTitle.style.left = `${xCoBtnF}px`
        btnFOneTitle.style.top = `${yCoBtnF}px`

        // Btn G coordinates
        yCoBtnG = (windowHeight / 2) + (windowHeight * 0.25854829)
        xCoBtnG = (windowWidth / 2) + ( (windowHeight * 0.25854829) * 0.788863109)
        btnGOne.style.display = "inline-flex"
        btnGOne.style.left = `${xCoBtnG}px`
        btnGOne.style.top = `${yCoBtnG}px`
        btnGOneTitle.style.left = `${xCoBtnG}px`
        btnGOneTitle.style.top = `${yCoBtnG}px`

        // Btn H coordinates
        yCoBtnH = (windowHeight / 2) - (windowHeight * 0.134373125)
        xCoBtnH = (windowWidth / 2) + ( (windowHeight * 0.134373125) * 2.946428571)
        btnHOne.style.display = "inline-flex"
        btnHOne.style.left = `${xCoBtnH}px`
        btnHOne.style.top = `${yCoBtnH}px`
        btnHOneTitle.style.left = `${xCoBtnH}px`
        btnHOneTitle.style.top = `${yCoBtnH}px`
    }
}

calcBtnPos() // initilize button pos

window.onresize = calcBtnPos

// Button functionality --------------------------------------------------------------------------
// Reveal content A (Welcome)
function showWelcome(){
    const welcomeContent = document.querySelector('.content-container-a')
    welcomeContent.classList.add("selected")
    const clearBtn = document.querySelector('.content-container-a .inside-content__clear')
    clearBtn.addEventListener("click", () => {
        welcomeContent.classList.remove("selected")
    })
}
btnAOne.addEventListener("click", showWelcome)
btnAOneTitle.addEventListener("click", showWelcome)

// Reveal content D & H (Termin Buchen)
function showAppointment(){
    const welcomeContent = document.querySelector('.content-container-d')
    welcomeContent.classList.add("selected")
    const clearBtn = document.querySelector('.content-container-d .inside-content__clear')
    clearBtn.addEventListener("click", () => {
        welcomeContent.classList.remove("selected")
    })
}
btnDOne.addEventListener("click", showAppointment)
btnDOneTitle.addEventListener("click", showAppointment)
btnHOne.addEventListener("click", showAppointment)
btnHOneTitle.addEventListener("click", showAppointment)

// Change Pages
function showPageTwo(){
    const pageOne = document.querySelector('.bg-image.page-one')
    const pageTwo = document.querySelector('.bg-image.page-two')
    pageOne.classList.remove("is-active")
    pageTwo.classList.add("is-active")
}

btnBOne.addEventListener("click", showPageTwo)
btnBOneTitle.addEventListener("click", showPageTwo)

function showPageOne(){
    const pageOne = document.querySelector('.bg-image.page-one')
    const pageTwo = document.querySelector('.bg-image.page-two')
    pageTwo.classList.remove("is-active")
    pageOne.classList.add("is-active")
}

btnBack.addEventListener("click", showPageOne)


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