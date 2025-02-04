/*-------------------------------- Constants --------------------------------*/

const cards = ['✨', '🪄', '🔮', '🦄', '✨', '🪄', '🔮', '🦄']


/*---------------------------- Variables (state) ----------------------------*/

let firstCard = '' 
let secondCard = '' 
let matchedPairs = 0
let round = 0
let clicks = 0


/*------------------------ Cached Element References ------------------------*/

const cardEl = document.querySelectorAll('.card')

const messageEl = document.querySelector('#message')

const replayBtnEl = document.querySelector('#replay')


/*-------------------------------- Functions --------------------------------*/

const startGame = () => {

}

function handleClick(event) {
    let clickedCard = event.target
    
    // if clicks are odd the user is still in a round
    // if clicks are even the user has completed a round

    clicks += 1
    console.log(clicks)

    if (clicks % 2 == 0) {
        round++
    } 
    console.log('round', round)

    if (!firstCard) {
        firstCard = clickedCard
        console.log('first card', firstCard.innerText)
        
    } else if (!secondCard) {
        secondCard = clickedCard
        console.log('second card', secondCard.innerText)
        round += 1
        console.log(round)
    }

    if (firstCard.innerText === secondCard.innerText) {
        console.log('match!')
        matchedPairs += 1
        // firstCard = ''
        // secondCard = ''
    } else {
        console.log(firstCard.innerText)
        console.log(secondCard.innerText)
        console.log('not a match')
        // firstCard = ''
        // secondCard = ''
    }
    if (round === 6 && matchedPairs !== 4) {
        console.log('lose')
    }
    else if (matchedPairs === 4) {
        console.log('win!')
    }
}
// how to bridge btw rounds and matches?
//     check to see if both cards match first card === second card
// if they do match cards stay facing up and set first card and second 
// card to null again 
// if they dont match cards flip back over
// after click o first card and 



/*----------------------------- Event Listeners -----------------------------*/

cardEl.forEach(card => {
    card.addEventListener('click', handleClick);
});
