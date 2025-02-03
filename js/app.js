/*-------------------------------- Constants --------------------------------*/

const cards = ['✨', '🪄', '🔮', '🦄','✨', '🪄', '🔮', '🦄']
// Define constant for cards total?
// Define constant for total pairs 
// const gameBoard?

/*---------------------------- Variables (state) ----------------------------*/
let cardsTotal= 8
let firstCard
let secondCard
let hasFlippedCard = false 
correctCards = 0



/*------------------------ Cached Element References ------------------------*/

const firstUnicorn = document.getElementById('firstUnicorn')


const unicorn = document.getElementById('unicorn')


const firstSparkles = document.getElementById('firstSparkles')


const sparkles = document.getElementById('sparkles')


const firstFortune = document.getElementById('firstFortune')


const fortune = document.getElementById('fortune')


const firstWand = document.getElementById('firstWand')


const wand = document.getElementById('wand')

const messageEl = document.querySelector('#message')

const resetBtnEl = document.querySelector('#replay')

/*-------------------------------- Functions --------------------------------*/


/*----------------------------- Event Listeners -----------------------------*/

firstUnicorn.addEventListener('click', firstUnicornClick)

