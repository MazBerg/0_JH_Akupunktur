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