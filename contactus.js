const expnadedContent = document.querySelectorAll(".expanded-content")
const language = document.getElementById("language")
const downIconWhite = document.querySelector(".down-icon-white")
const downIconGray = document.querySelector(".down-icon-gray")

language.addEventListener('mouseover', () => {
    downIconWhite.classList.add("active")
    downIconGray.classList.add("active")
})

language.addEventListener('mouseleave', () => {
    downIconWhite.classList.remove("active")
    downIconGray.classList.remove("active")
})

function openIndex() {
    window.open("index.html", "_self")
}

function openSignIn() {
    window.open("signin.html", "_self")
}