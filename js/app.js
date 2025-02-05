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



/*----------------------------- Event Listeners -----------------------------*/

cardEls.forEach(card => {
    card.addEventListener('click', handleClick);
});

replayBtnEl.addEventListener('click', init)

// worked with Ben on this function and Google
cardEls.forEach((card) => {
    card.addEventListener('click', function() {
      card.classList.toggle('is-flipped');
    });
  });
  