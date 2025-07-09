const colors = ['red', 'blue', 'green', 'purple', 'orange', 'pink', 'red', 'blue', 'green', 'purple', 'orange', 'pink'];
let cards = shuffle(colors.concat(colors))
let gameInterval
let score = 0
let timeLeft = 30;
let selectedCards = []

const startbtn = document.getElementById("startbtn")
const scoreElement = document.getElementById("score")
const timerElement = document.getElementById("timer")
const gameContainer = document.getElementById("game-container")

function generateCards() {
    for(const color of cards) {
        const card = document.createElement("div")
        card.classList.add("card")
        card.dataset.color = color
        card.textContent = "?"
        gameContainer.appendChild(card)
    }
}

function shuffle(array) {
    for(let i = array.length - 1; i > 0; i-- ) {
        j = Math.floor(Math.random()*(i+1))
        let temp = array[j]
        array[j] = array[i]
        array[i] = temp
    }
    return array
}

function handleCardClick(event) {
    const card = event.target
    if(!card.classList.contains("cards") || card.classList.contains("matched")) {
        return 
    }
    card.textContent = card.dataset.color
    card.style.backgroundColor = card.dataset.color
    selectedCards.push(card)
    if(selectedCards.length == 2) {
        setTimeout(checkMatch(),500)
    }
}

function checkMatch() {
    const [card1,card2] = selectedCards
    if(card1.dataset.color === card2.dataset.color) {
        card1.classList.add("matched")
        card2.classList.add("matched")
        score += 2
        scoreElement.textContent = `Score: ${score}`
    } else {
        card1.textContent = "?"
        card2.textContent = "?"
        card1.style.backgroundColor("#ddd")
        card2.style.backgroundColor("#ddd")
    }

    selectedCards = []
}

function startGame() {
    startbtn.disabled = true
    let timeLeft = 30
    score = 0
    scoreElement.textContent = `Score: ${score}`
    startGameTimer(timeLeft);
    cards = shuffle(colors.concat(colors))
    selectedCards = []
    gameContainer.innerHTML = ``
    generateCards()
    gameContainer.addEventListener("click", handleCardClick())
}

function startGameTimer(timeLeft) {
    timerElement.textContent = `Time Left: ${timeLeft}`
    gameInterval = setInterval(()=> {
        timeLeft--
        timerElement.textContent = `Time Left: ${timeLeft}`
        if(timeLeft === 0) {
            clearInterval(gameInterval)
            let timeLeft = 30
            window.alert("Game Over")
            startbtn.disabled = false
        }
    },1000)
}

   startbtn.addEventListener('click', startGame());

