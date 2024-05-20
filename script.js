/**
 * Click on the footer
 */
const footer = document.getElementsByTagName("footer")[0]
let clickCounter = 0

const logClique = () => {
    clickCounter++
    console.log("clique " + clickCounter)
}

footer.addEventListener("click", logClique)

/**
 * Burger Menu
 */
const navbar = document.getElementById("navbarHeader")
const burgerButton = document.getElementsByClassName("navbar-toggler")[0]

const burgerToggle = () => {
    navbar.classList.toggle("collapse")
}

burgerButton.addEventListener("click", burgerToggle)

/**
 * Red edit on first card
 */
const firstCard = document.getElementsByClassName("card mb-4 box-shadow")[0]
const editButton = firstCard.querySelectorAll("button")[1]

const textToRed = () => {
    editButton.style.color = 'red'
}

editButton.addEventListener("click", textToRed)

/**
 * Green back&forth edit on second card
 */
const secondCard = document.getElementsByClassName("card mb-4 box-shadow")[1]
const secondEditButton = secondCard.querySelectorAll("button")[1]

const textToGreen = () => {
    if (secondEditButton.style.color === '') {
        secondEditButton.style.color = 'green'
    } else {
        secondEditButton.style.color = ''
    }
}

secondEditButton.addEventListener("click", textToGreen)

/**
 * Destroy Bootstrap
 */
const nav = document.getElementsByClassName("navbar navbar-dark bg-dark box-shadow")[0]
const bootStrapLink = document.getElementsByTagName("link")[0]

const bootStrapToggle = () => {
    if (bootStrapLink.disabled === false) {
        bootStrapLink.disabled = true
    } else {
        bootStrapLink.disabled = false
    }
}

nav.addEventListener("dblclick", bootStrapToggle)

/**
 * Cards reduction
*/
const allCards = document.querySelectorAll(".card")[0]
const cardText = allCards.querySelector(".card-text")
const cardImg = allCards.querySelector(".card-img-top")
const originalText = cardText.innerHTML

// console.log(cardImg)

for (let i = 0; i < 9; i++) {
    
}

const reduceCard = () => {
    cardText.innerHTML = ""
    cardImg.style.width = "20%"
}

const reset = () => {
    cardText.innerHTML = originalText
    cardImg.style.width = ""
}

allCards.addEventListener('mouseover', reduceCard)
allCards.addEventListener('mouseout', reset)

