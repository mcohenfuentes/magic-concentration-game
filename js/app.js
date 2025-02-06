/*-------------------------------- Constants --------------------------------*/

const myArray = ['✨', '🪄', '🔮', '🦄', '✨', '🪄', '🔮', '🦄']


/*---------------------------- Variables (state) ----------------------------*/

let firstCard
let secondCard
let emojiOne
let emojiTwo
let matchedPairs = 0
let round = 0
let clicks = 0
let cardIsFlipped = false;

/*------------------------ Cached Element References ------------------------*/

const board = document.querySelector('.board')

const cardEls = document.querySelectorAll('.card')

const array = Array.from(cardEls)

const messageEl = document.querySelector('#message')

const replayBtnEl = document.querySelector('#replay')

const roundEl = document.querySelector('#round')

const card1Magic = document.getElementById('card-1')

const card2Magic = document.getElementById('card-2')

const card3Magic = document.getElementById('card-3')

const card4Magic = document.getElementById('card-4')

const card5Magic = document.getElementById('card-5')

const card6Magic = document.getElementById('card-6')

const card7Magic = document.getElementById('card-7')

const card8Magic = document.getElementById('card-8')

/*-------------------------------- Functions --------------------------------*/

function init() {

    firstCard = null
    secondCard = null
    matchedPairs = 0;
    round = 0;
    clicks = 0;
    messageEl.innerText = 'Match the magic emojis to win!'

    //Asked google where to place roundEl so it would display 0 and for each loop 
    // so game would reset
    roundEl.innerText = `Round ${round}`

    cardEls.forEach(card => {
        card.classList.remove('is-flipped')

    });

    function shuffleArray(array) {
        for (let i = array.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [array[i], array[j]] = [array[j], array[i]];
        }
    }

    shuffleArray(array);
    console.log(array)

    const card1 = myArray[0]
    card1Magic.innerText = card1
    const card2 = myArray[1]
    card2Magic.innerText = card2
    const card3 = myArray[2]
    card3Magic.innerText = card3
    const card4 = myArray[3]
    card4Magic.innerText = card4
    const card5 = myArray[4]
    card5Magic.innerText = card5
    const card4 = myArray[3]
    card2Magic.innerText = card4
    const card4 = myArray[3]
    card2Magic.innerText = card4
    const card4 = myArray[3]
    card2Magic.innerText = card4
}


// function updateBoard() {
//     board.forEach((card, index) => {
//         console.log(card)
//         if (card === '🦄') {
//             cardEls[index].innerText = '🦄'
//         } else if (card === '🦄') {
//             cardEls[index].innerText = '🦄'
//         } else if (card === '✨') {
//             cardEls[index].innerText = '✨'
//         } else if (card === '✨') {
//             cardEls[index].innerText = '✨'
//         } else if (card === '🪄') {
//             cardEls[index].innerText = '🪄'
//         } else if (card === '🪄') {
//             cardEls[index].innerText = '🪄'
//         } else if (card === '🔮') {
//             cardEls[index].innerText = '🔮'
//         } else if (card === '🔮') {
//             cardEls[index].innerText = '🔮'
//         } 
//     })
// }
// I need to show my shuffled cards in the browser
// I need to bring my js shuffled cards and pushing back into html
// connect nodelist to innertext

function handleClick(event) {
    let clickedCard = event.currentTarget
    clickedCard.classList.toggle('is-flipped')
    console.log(clickedCard.innerText)
    // if (clickedCard === firstCard) return;
    clicks += 1
    //console.log('clicks', clicks)

    if (!firstCard) {
        firstCard = clickedCard
        console.log('first card', firstCard.innerText)
        return;

    } else if (!secondCard) {
        secondCard = clickedCard
        console.log('second card', secondCard.innerText)
        round += 1
        roundEl.innerText = `Round ${round}`
        // console.log(firstCard.innerText)
        // console.log(secondCard.innerText)
        if (firstCard.innerText === secondCard.innerText) {
            console.log('match!')
            // console.log(firstCard)
            // console.log(secondCard)

            matchedPairs += 1
            resetTurn();

        } else {
            console.log('not a match')
            console.log(firstCard)
            console.log(secondCard)
            setTimeout(() => {
                // Asked chatGPT how to remove a class
                firstCard.classList.remove('is-flipped');
                secondCard.classList.remove('is-flipped');
                resetTurn();
            }, 2000);

        }

    }
    // console.log(matchedPairs)
    if (matchedPairs === 4) {
        messageEl.innerText = '🎉 You win! 🎉'
        console.log('win!')
    }
    else if (round === 6 && matchedPairs !== 4) {
        messageEl.innerText = 'You lose, try again!'
        console.log('lose!')
    }
}
const resetTurn = () => {
    firstCard = null
    secondCard = null
}

init()

/*----------------------------- Event Listeners -----------------------------*/

cardEls.forEach(card => {
    card.addEventListener('click', handleClick);
});

replayBtnEl.addEventListener('click', init)

// worked with Ben on this function and Google
// cardEls.forEach((card) => {
//     card.addEventListener('click', function() {
//       card.classList.toggle('is-flipped');
//     });
//   });
