const btnStart = document.getElementById('StartGame');
const resultsTable = document.querySelector('.hallOfFame');
const gameGrid = document.querySelector('.grid');
const countDown = document.getElementById('countDown');

let gridofCards = [];
let card = {};
let resultTable = [];
let result = {};


function launchGame() {
    resultsTable.style.display = "none";
    gameGrid.style.display = "flex";
    countDown.setAttribute.hidden = false;
}

btnStart.addEventListener("click", launchGame);