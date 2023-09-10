const cookiePreferences = document.querySelector(".cookie-preferences")
const popUpContainer = document.querySelector(".pop-up-enclosing")
const popUpXIcon = document.querySelector(".pop-up-x-icon")
const popUpEnclosing = document.querySelector(".pop-up-enclosing")

// Make the pop up appear when Cooke preferences is clicked

cookiePreferences.addEventListener('click', () => {
    popUpEnclosing.style.display = "block"
})

// Make the pop up disappear when x - icon is clicked

popUpXIcon.addEventListener('click', () => {
    popUpEnclosing.style.display = "none"
})