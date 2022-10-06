const btnStart = document.getElementById('StartGame');
const resultsTable = document.querySelector('.Results');
const gameGrid = document.querySelector('.grid');
const countdown = document.getElementById('countdown-page');

let gridofCards = [];
let card = {};
let resultTable = [];
let result = {};


function launchGame() {
    resultsTable.style.display = "none";
    btnStart.style.display = "none";
    countdown.style.display = "flex";
}

btnStart.addEventListener("click", launchGame);