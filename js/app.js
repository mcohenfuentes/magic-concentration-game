/*-------------------------------- Constants --------------------------------*/

const cards = ['✨', '🪄', '🔮', '🦄', '✨', '🪄', '🔮', '🦄']


/*---------------------------- Variables (state) ----------------------------*/

let firstCard = null
let secondCard = null
let matchedPairs = 0
let round = 0
let clicks = 0


/*------------------------ Cached Element References ------------------------*/

const cardEls = document.querySelectorAll('.card')

const messageEl = document.querySelector('#message')

const replayBtnEl = document.querySelector('#replay')


/*-------------------------------- Functions --------------------------------*/

// function init() {
//     firstCard = null
//     secondCard = null
//     round = 0
//     clicks = 0
// }
cardEls.forEach(function (card) {
    if (card.classList.contains('unicorn')) {
        card.addEventListener('click', function(event){
            event.target.classList.toggle('unicorn')
        })
    } else if (card.classList.contains('sparkles')) {
        card.addEventListener('click', function(event){
            event.target.classList.toggle('sparkles')
        })
    } else if (card.classList.contains('fortune')) {
        card.addEventListener('click', function(event){
            event.target.classList.toggle('fortune')
        })
    } else if (card.classList.contains('wand')) {
        card.addEventListener('click', function(event){
            event.target.classList.toggle('wand')
        })
    }
}) 


function handleClick(event) {
    let clickedCard = event.target

    clicks += 1
    console.log('clicks', clicks)

    if (!firstCard) {
        firstCard = clickedCard
        console.log('first card', firstCard.innerText)

    } else if (!secondCard) {
        secondCard = clickedCard
        console.log('second card', secondCard.innerText)
        round += 1
        console.log('round', round)
    }

    if (firstCard.innerText === secondCard.innerText) {
        console.log('match!')

        firstCard.removeEventListener('click', handleClick)
        secondCard.removeEventListener('click', handleClick)

        matchedPairs += 1

    } else {
        console.log(firstCard.innerText)
        console.log(secondCard.innerText)
        console.log('not a match')

        firstCard.removeEventListener('click', handleClick)
        secondCard.removeEventListener('click', handleClick)

    }

    resetTurn()


    if (matchedPairs === 4) {
        console.log('win!')
    }
    else if (round === 5 && matchedPairs !== 4) {
        console.log('lose!')


    }
}
const resetTurn = () => {
    firstCard = null
    secondCard = null
}


// how to bridge btw rounds and matches?
//     check to see if both cards match first card === second card
// if they do match cards stay facing up and set first card and second 
// card to null again 
// if they dont match cards flip back over
// after click o first card and 



/*----------------------------- Event Listeners -----------------------------*/

cardEls.forEach(card => {
    card.addEventListener('click', handleClick);
});
