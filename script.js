const btnStart = document.getElementById('StartGame');
const resultsTable = document.querySelector('.hallOfFame');
const gameGrid = document.querySelector('.grid');

let gridofCards = [];
let card = {};
let resultTable = [];
let result = {};


function launchGame() {
    resultsTable.style.display = "none";
    gameGrid.style.display = "flex";
}

btnStart.addEventListener("click", launchGame);