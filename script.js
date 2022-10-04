const btnStart = document.getElementById('StartGame');
const resultsTable = document.querySelector('.hallOfFame');
const gameGrid = document.querySelector('.grid');

let gridCards = [];
let resultTable = [];
let result = {};


function launchGame() {
    resultsTable.style.display = "none";
    gameGrid.style.display = "flex";
}

btnStart.addEventListener("click", launchGame);