/*-------------------------------- Constants --------------------------------*/

const cards = ['✨', '🪄', '🔮', '🦄', '✨', '🪄', '🔮', '🦄']


/*---------------------------- Variables (state) ----------------------------*/

let firstCard = null;
let secondCard = null;
let matchedPairs = 0
let round = 0
let clicks = 0
let cardIsFlipped = false;

/*------------------------ Cached Element References ------------------------*/

const board = document.querySelector('.board')

const cardEls = document.querySelectorAll('.card')

const messageEl = document.querySelector('#message')

const replayBtnEl = document.querySelector('#replay')


/*-------------------------------- Functions --------------------------------*/

function init() {
    firstCard = null;
    secondCard = null;
    matchedPairs = 0;
    round = 0;
    clicks = 0;
    messageEl.innerText = 'Match the emojis to win!'
}

// cards.forEach(function (emoji) {
//     const card = document.createElement('div')
//     const cardChild = document.createElement('div')
//     card.classList.add('card')
//     if (emoji === '✨') {
//         card.classList.add('sparkle')
//         card.appendChild(cardChild)
//         cardChild.innerText = '✨'
//     } else if (emoji === '🪄') {
//         card.classList.add('wand')
//         card.innerText = '🪄'
//     } else if (emoji === '🔮') {
//         card.classList.add('fortune')
//         card.innerText = '🔮'
//     } else if (emoji === '🦄') {
//         card.classList.add('unicorn')
//         card.innerText = '🦄'
//     }
//     board.appendChild(card)
// })




// cardEls.forEach(function (card) {
//     if (card.classList.contains('unicorn')) {
//         card.addEventListener('click', function(event){
//             event.target.classList.toggle('unicorn')
//         })
//     } else if (card.classList.contains('sparkles')) {
//         card.addEventListener('click', function(event){
//             event.target.classList.toggle('sparkles')
//         })
//     } else if (card.classList.contains('fortune')) {
//         card.addEventListener('click', function(event){
//             event.target.classList.toggle('fortune')
//         })
//     } else if (card.classList.contains('wand')) {
//         card.addEventListener('click', function(event){
//             event.target.classList.toggle('wand')
//         })
//     }
// }) 


// cardEls.forEach(function (card) {
//     card.addEventListener('click', function(event){
//     })
// }) 

// const card = document.getElementByClass('card')
// card.classList.toggle('hide');
// function updateMessage() {
//     if (matchedPairs === 4) {
//         messageEl.innerText = 'You won!'
//     }
//     }
// function flipCard() {
//     this.classList.toggle('flip');

//     if(!cardIsFlipped) {
//         cardIsFlipped = true
//         firstCard = this
//     } else {
//         cardIsFlipped = false
//         secondCard = this
//     }
// }

// cardEls.forEach(function (card) {
//     card.addEventListener('click', flipCard)
// });


function handleClick(event) {
    let clickedCard = event.target
    if (clickedCard === firstCard) return;
    clicks += 1
    console.log('clicks', clicks)

    if (!firstCard) {
        firstCard = clickedCard
        console.log('first card', firstCard.innerText)
        return;

    } else if (!secondCard) {
        secondCard = clickedCard
        console.log('second card', secondCard.innerText)
        round += 1
        console.log('round', round)

        if (firstCard.innerText === secondCard.innerText) {
            console.log('match!')
            console.log(firstCard)
            console.log(secondCard)

            matchedPairs += 1

        } else {
            console.log(firstCard.innerText)
            console.log(secondCard.innerText)
            console.log('not a match')


            


        }

        resetTurn();
    }

    if (matchedPairs === 4) {
        messageEl.innerText = 'You win!'
        console.log('win!')
    }
    else if (round === 5 && matchedPairs !== 4) {
        messageEl.innerText = 'You lose, try again!'
        console.log('lose!')


    }
}
const resetTurn = () => {
    firstCard = null
    secondCard = null
}



// init()




/*----------------------------- Event Listeners -----------------------------*/

cardEls.forEach(card => {
    card.addEventListener('click', handleClick);
});

replayBtnEl.addEventListener('click', init)