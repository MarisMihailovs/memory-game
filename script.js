const btnStart = document.getElementById('StartGame');
const resultsTable = document.querySelector('.Results');
const gameGrid = document.querySelector('.grid');
const countdown = document.getElementById('countdown-page');
const countdownTimer = document.getElementById('countdown-timer');

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