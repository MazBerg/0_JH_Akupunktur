const navBtn = document.querySelector(".nav-toggle")

navBtn.addEventListener("click", () => {
    document.body.classList.toggle("open-nav")
})

const navLink = document.querySelectorAll(".nav__link")

navLink.forEach((link) => {
    link.addEventListener("click", () => {
        document.body.classList.remove("open-nav")
    })
})

const navExt = document.getElementById("navext")
const subMenuItems = document.querySelector(".nav__sub-item-container")
let showItems = false

navExt.addEventListener("click", () => {
    showItems = !showItems
    subMenuItems.style.display = showItems ? "block" : "none"

})