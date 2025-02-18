/*-------------------------------- Constants --------------------------------*/

const myArray = ['✨', '🪄', '🔮', '🦄', '✨', '🪄', '🔮', '🦄']


/*---------------------------- Variables (state) ----------------------------*/

let firstCard
let secondCard
let matchedPairs = 0
let round = 0
let clicks = 0
let cardIsFlipped = false;
let gameOver = false;

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
    gameOver = false;
    matchedPairs = 0;
    round = 0;
    clicks = 0;
    messageEl.innerText = 'Match the magic emojis to win!'

    //Asked google where to place roundEl so it would display 0 and for each loop 
    // so game would reset
    roundEl.innerText = `Round ${round}`

    document.getElementById('replay').style.display = 'none';

    cardEls.forEach(card => {
        card.classList.remove('is-flipped', 'matched')
        card.style.width = "100px";  
        card.style.height = "150px";
    });

    //found on google
    function shuffleArray(array) {
        for (let i = array.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [array[i], array[j]] = [array[j], array[i]];
        }
    }

    shuffleArray(myArray);

    // troubleshooted with Kaya on how to attach html to array

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

    const card6 = myArray[5]
    card6Magic.innerText = card6

    const card7 = myArray[6]
    card7Magic.innerText = card7

    const card8 = myArray[7]
    card8Magic.innerText = card8
}


function handleClick(event) {
    if (gameOver) return;

    let clickedCard = event.currentTarget

    if (clickedCard.classList.contains('matched')) return;

    clickedCard.classList.toggle('is-flipped')

    clicks += 1

    if (round === 0) {
        document.getElementById('replay').style.display = 'block';
    }

    if (!firstCard) {
        firstCard = clickedCard
        return;

    } else if (!secondCard) {
        secondCard = clickedCard
        round += 1
        roundEl.innerText = `Round ${round}`

        if (firstCard.innerText === secondCard.innerText) {
            matchedPairs += 1

            firstCard.classList.add('matched');
            secondCard.classList.add('matched');

            resetTurn();

        } else {

            setTimeout(() => {
                // Asked chatGPT how to remove a class
                firstCard.classList.remove('is-flipped');
                secondCard.classList.remove('is-flipped');
                resetTurn();
            }, 1000);

        }

    }

    if (matchedPairs === 4) {
        messageEl.innerText = '🎉 You win! 🎉'
        gameOver = true;
    }
    else if (round === 7 && matchedPairs !== 4) {
        messageEl.innerText = 'You lose, try again!'
        gameOver = true;
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

