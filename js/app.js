/*-------------------------------- Constants --------------------------------*/

const cards = ['✨', '🪄', '🔮', '🦄','✨', '🪄', '🔮', '🦄']


/*---------------------------- Variables (state) ----------------------------*/

let firstCard = ''
let secondCard = ''
let matchedPairs = 0 




/*------------------------ Cached Element References ------------------------*/

const cardEl = document.querySelectorAll('.card')

const messageEl = document.querySelector('#message')

const replayBtnEl = document.querySelector('#replay')


/*-------------------------------- Functions --------------------------------*/

const startGame = () => {

}

function handleClick(event) {
   

}

/*----------------------------- Event Listeners -----------------------------*/

cardEl.forEach(card => {
    card.addEventListener('click', handleClick);
});



