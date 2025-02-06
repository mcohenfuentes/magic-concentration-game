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

const messageEl = document.querySelector('#message')

const replayBtnEl = document.querySelector('#replay')

const roundEl = document.querySelector('#round')

/*-------------------------------- Functions --------------------------------*/

function init() {
    
    firstCard = null
    secondCard = null
    matchedPairs = 0;
    round = 0;
    clicks = 0;
    messageEl.innerText = 'Match the emojis to win!'

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
      //const myArray = ['✨', '🪄', '🔮', '🦄', '✨', '🪄', '🔮', '🦄']
      shuffleArray(myArray);
      console.log(myArray)

    }

    


function handleClick(event) {
    let clickedCard = event.currentTarget
    clickedCard.classList.toggle('is-flipped')
    console.log(clickedCard.innerText)
    if (clickedCard === firstCard) return;
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
        console.log(firstCard.innerText)
        console.log(secondCard.innerText)
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
        messageEl.innerText = '🎉You win!🎉'
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
  