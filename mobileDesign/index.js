const navItem = document.querySelectorAll(".nav__item")
const subMenuItems = document.querySelector(".nav__sub-item-container")
let showItems = false

function checkPage(){
    navItem.forEach((item) => {
        if(item.classList.contains("nav__sub-item")){
            if(item.classList.contains("nav__current")){
                showItems = true
                subMenuItems.style.display = showItems ? "block" : "none"
            }
        }
    })
}

const navBtn = document.querySelector(".nav-toggle")

navBtn.addEventListener("click", () => {
    checkPage()
    document.body.classList.toggle("open-nav")
})

const navLink = document.querySelectorAll(".nav__link")

navLink.forEach((link) => {
    link.addEventListener("click", () => {
        document.body.classList.remove("open-nav")
    })
})

// Logic that will toggle the sub menu
const navExt = document.getElementById("navext")

navExt.addEventListener("click", () => {
    showItems = !showItems
    subMenuItems.style.display = showItems ? "block" : "none"

})