const btnStart = document.getElementById('StartGame');
const resultsTable = document.querySelector('.Results');
const gameArea = document.querySelector('.gameArea');
const grid = document.querySelector('.grid');
const countdown = document.getElementById('countdown-page');
const countdownTimer = document.getElementById('countdown-timer');
const cards = document.querySelectorAll(".flipContainer");
const cardsBack = document.querySelectorAll(".cardBack");

let gridofCards = [
    "images/tiles/Barco.jpg",
    "images/tiles/Evoko.jpg",
    "images/tiles/JOAN.jpg",
    "images/tiles/Logitech.jpg",
    "images/tiles/MB.jpg",
    "images/tiles/MI.jpg",
    "images/tiles/owllabs.jpg",
    "images/tiles/samsung.jpg",
    "images/tiles/Barco.jpg",
    "images/tiles/Evoko.jpg",
    "images/tiles/JOAN.jpg",
    "images/tiles/Logitech.jpg",
    "images/tiles/MB.jpg",
    "images/tiles/MI.jpg",
    "images/tiles/owllabs.jpg",
    "images/tiles/samsung.jpg"
];

let resultTable = [];
let result = {};


function launchGame() {
    resultsTable.style.display = "none";
    btnStart.style.display = "none";
    countdown.hidden = false;
    countdownStart();
}

function hoverCard() {

    this.classList.add("hoverCard");
}

function outCard() {

    this.classList.remove("hoverCard");
}

function selectCard() {
    this.classList.toggle("selected");
}

function fillCards() {
    shuffle(gridofCards);
    cardsBack.forEach((element, index) => {
        element.style.backgroundImage = `url(${gridofCards[index]})`;
    })
}

// displays 1,2,3 GO!
function countdownStart() {
    countdownTimer.textContent = '3';
    setTimeout(() => {
        countdownTimer.textContent = '2';
    }, 1000);
    setTimeout(() => {
        countdownTimer.textContent = '1';
    }, 2000);
    setTimeout(() => {
        countdownTimer.textContent = 'GO!';
    }, 3000);
    setTimeout(() => {
        countdown.hidden = true;
        fillCards();
        gameArea.style.display = "inline";
        grid.style.display = "flex";
    }, 3500);

}


btnStart.addEventListener("click", launchGame);
cards.forEach(cards => cards.addEventListener("click", selectCard));
cards.forEach(cards => cards.addEventListener("mouseover", hoverCard));
cards.forEach(cards => cards.addEventListener("mouseleave", outCard));