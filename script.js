const btnStart = document.getElementById('StartGame');
const resultsTable = document.querySelector('.Results');
const gameGrid = document.querySelector('.grid');
const countdown = document.getElementById('countdown-page');
const countdownTimer = document.getElementById('countdown-timer');
const cardGrid = document.querySelectorAll(".card");

let gridofCards = [];
let card = {};
let resultTable = [];
let result = {};


function launchGame() {
    resultsTable.style.display = "none";
    btnStart.style.display = "none";
    countdown.hidden = false;
    countdownStart();
}

function hoverCard() {
    console.log(this, "over");
    this.classList.add("hoverCard");
}

function outCard() {
    console.log(this, "out");
    this.classList.remove("hoverCard");
}

function selectCard() {
    console.log(this);
    this.classList.toggle("selected");
    console.log(this.classList);
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
        gameGrid.style.display = "flex";
    }, 3500);

}


btnStart.addEventListener("click", launchGame);
cardGrid.forEach(cardGrid => cardGrid.addEventListener("click", selectCard));
cardGrid.forEach(cardGrid => cardGrid.addEventListener("mouseover", hoverCard));
cardGrid.forEach(cardGrid => cardGrid.addEventListener("mouseleave", outCard));