const langBtn = document.querySelector(".lang-btn")
const dropDown = document.querySelector(".drop-down")
const faq = document.querySelector(".faq")
const faqElementContainer = document.querySelector(".element-container")
const eachElement = document.querySelectorAll(".element")
const faqElement = Array.from(faqElementContainer.children)
const emailSignup = document.querySelector(".email-signup")
const plusIconContainer = document.querySelectorAll(".plus-icon")
const plusIcon = Array.from(plusIconContainer)
const floatingContent = document.querySelectorAll(".floating-content")
const heading = document.querySelector(".heading")
var display = 0

// When each element is clicked, increase their respective height

faqElement.forEach(element => {

    element.addEventListener('click', (e) => {
        
        const activeElement = e.target.closest('.element')
        const activeElementIndex = faqElement.findIndex(element => element === activeElement)
        
        
        floatingContent[activeElementIndex].classList.toggle("active")
        
        plusIcon[activeElementIndex].classList.toggle("active")

        
    })
});

// Opens sign in page

function openSignInPage() {
    window.open("signin.html", "_self")
}