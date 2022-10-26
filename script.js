const gameScreen = document.getElementsByTagName("BODY")[0];
const btnStart = document.getElementById('StartGame');
const resultsTable = document.querySelector('.Results');
const gameArea = document.querySelector('.gameArea');
const grid = document.querySelector('.grid');
const countdown = document.getElementById('countdown-page');
const countdownTimer = document.getElementById('countdown-timer');
const cards = document.querySelectorAll(".flipContainer");
const cardsBack = document.querySelectorAll(".cardBack");
const time = document.querySelector('.time');
const fullscreenBtn = document.querySelector('.fullscreen');

let gridofCards = [
    {
        "index": 0,
        "image": "images/tiles/Barco.jpg",
        "state": "closed",
        "guessed": false,

    },
    {
        "index": 1,
        "image": "images/tiles/Evoko.jpg",
        "state": "closed",
        "guessed": false,
    },
    {
        "index": 2,
        "image": "images/tiles/JOAN.jpg",
        "state": "closed",
        "guessed": false,
    },
    {
        "index": 3,
        "image": "images/tiles/Logitech.jpg",
        "state": "closed",
        "guessed": false,
    },
    {
        "index": 4,
        "image": "images/tiles/MB.jpg",
        "state": "closed",
        "guessed": false,
    },
    {
        "index": 5,
        "image": "images/tiles/MI.jpg",
        "state": "closed",
        "guessed": false,
    },
    {
        "index": 6,
        "image": "images/tiles/owllabs.jpg",
        "state": "closed",
        "guessed": false,
    },
    {
        "index": 7,
        "image": "images/tiles/samsung.jpg",
        "state": "closed",
        "guessed": false,
    },
    {
        "index": 8,
        "image": "images/tiles/Barco.jpg",
        "state": "closed",
        "guessed": false,
    },
    {
        "index": 9,
        "image": "images/tiles/Evoko.jpg",
        "state": "closed",
        "guessed": false,
    },
    {
        "index": 10,
        "image": "images/tiles/JOAN.jpg",
        "state": "closed",
        "guessed": false,
    },
    {
        "index": 11,
        "image": "images/tiles/Logitech.jpg",
        "state": "closed",
        "guessed": false,
    },
    {
        "index": 12,
        "image": "images/tiles/MB.jpg",
        "state": "closed",
        "guessed": false,
    },
    {
        "index": 13,
        "image": "images/tiles/MI.jpg",
        "state": "closed",
        "guessed": false,
    },
    {
        "index": 14,
        "image": "images/tiles/owllabs.jpg",
        "state": "closed",
        "guessed": false,
    },
    {
        "index": 15,
        "image": "images/tiles/samsung.jpg",
        "state": "closed",
        "guessed": false,
    },
];

let cardsOpen = 0;
let card1 = {};
let card2 = {};
let card1Index;
let card2Index;

let playerGuessCount = 0;
let resultTable = [];
let timePlayed;
let timer;
let result = {};


let fullscreen = false;

//toggle fullscreen
function toggleFullscreen() {
    !fullscreen ? openFullscreen(gameScreen) : closeFullscreen();
    fullscreen = !fullscreen;
}

function openFullscreen(elem) {
    if (elem.requestFullscreen) {
        elem.requestFullscreen();
    } else if (elem.webkitRequestFullscreen) { /* Safari */
        elem.webkitRequestFullscreen();
    } else if (elem.msRequestFullscreen) { /* IE11 */
        elem.msRequestFullscreen();
    }
    gameScreen.classList.add('game-fullscreen');
}

/* Close fullscreen */
function closeFullscreen() {
    if (document.exitFullscreen) {
        document.exitFullscreen();
    } else if (document.webkitExitFullscreen) { /* Safari */
        document.webkitExitFullscreen();
    } else if (document.msExitFullscreen) { /* IE11 */
        document.msExitFullscreen();
    }
    gameScreen.classList.remove('game-fullscreen');
}

//stop timer and process results
function checkTime() {
    if (playerGuessCount === 16) {
        clearInterval(timer);
    }
}

// add tenth of a second to timePlayed
function addTime() {
    timePlayed += 0.1;
    time.textContent = `${timePlayed.toFixed(1)}`
    checkTime();
}



// start timer when game starts
function startTimer() {
    // reset times
    timePlayed = 0;
    timer = setInterval(addTime, 100);
}



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
    if (!this.classList.contains("selected")) {
        cardsOpen++;
        if (cardsOpen === 1) {
            card1Index = Array.from(this.parentElement.children).indexOf(this);
            if (!gridofCards[card1Index].guessed) {
                this.classList.toggle("selected");
                gridofCards[card1Index].state = "open";
            }
            card1 = gridofCards[card1Index];
        };

        if (cardsOpen === 2) {
            card2Index = Array.from(this.parentElement.children).indexOf(this);
            if (!gridofCards[card2Index].guessed) {
                this.classList.toggle("selected");
                gridofCards[card2Index].state = "open";
            }
            card2 = gridofCards[card2Index];
            cardsOpen = 2;
            checkCard();
            checkIfWon();
        };
    }
}

function checkIfWon() {
    if (playerGuessCount === 16) {
        console.log("You won!")
    }
}


function checkCard() {
    if (card1.image === card2.image) {
        gridofCards[card1Index].guessed = true;
        gridofCards[card2Index].guessed = true;
        cardsOpen = 0;
        playerGuessCount = playerGuessCount + 2;
    }
    else {
        cardsOpen = 3;
        setTimeout(() => {
            for (let i = 0; i < cards.length; i++) {
                if (gridofCards[i].guessed === false) {
                    cards[i].classList.remove('selected');
                    gridofCards[i].state = "closed";
                }

            }
            cardsOpen = 0;
        }, 2000);
    }
}


function fillCards() {
    shuffle(gridofCards);
    cardsBack.forEach((element, index) => {
        element.style.backgroundImage = `url(${gridofCards[index].image})`;

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
        startTimer();
    }, 3499);
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
fullscreenBtn.addEventListener('click', toggleFullscreen);