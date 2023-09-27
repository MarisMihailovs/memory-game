const gameScreen = document.getElementsByTagName("BODY")[0];
const btnStart = document.getElementById('StartGame');
const btnHome = document.querySelector('.home');
const btnVideo = document.querySelector('.playVideo');
const videoClip = document.querySelector('.video');
// countdown 
const countdown = document.getElementById('countdown-page');
const countdownTimer = document.getElementById('countdown-timer');
// Game
const gameArea = document.querySelector('.gameArea');
const grid = document.querySelector('.grid');
const cards = document.querySelectorAll(".flipContainer");
const cardsBack = document.querySelectorAll(".cardBack");
const time = document.querySelector('.time');
// modal buttons
const highScoresBtn = document.getElementById('highScoresBtn');
const playAgainBtn = document.getElementById('playAgainBtn');
// fullscreen mode toggle
const fullscreenBtn = document.querySelector('.fullscreen');
// results table node
const resultsTable = document.querySelector('.Results');
const player = document.querySelectorAll('h3');
const playerResult = document.querySelectorAll('h2');
// highscore modal elements
const modal = document.querySelector('.modal-container');
const modalClose = document.getElementById('close-modal');
const resultTime = document.getElementById('resultTime');
const playerName = document.getElementById('player-Name');
const bookmarkForm = document.getElementById('bookmark-form');

let gridofCards = [
    {
        "index": 0,
        "image": "images/tiles/combogesic_photo_2022.jpg",
        "state": "closed",
        "guessed": false,

    },
    {
        "index": 1,
        "image": "images/tiles/Fervex_pieaugušajiem_iepakojums_taisni_NEW.jpg",
        "state": "closed",
        "guessed": false,
    },
    {
        "index": 2,
        "image": "images/tiles/Isla_cassis_kastīte_sataisīta.jpg",
        "state": "closed",
        "guessed": false,
    },
    {
        "index": 3,
        "image": "images/tiles/Isla_junior_kastīte_sataisīta.jpg",
        "state": "closed",
        "guessed": false,
    },
    {
        "index": 4,
        "image": "images/tiles/Isla_medic_acut_kastīte_sataisīta.jpg",
        "state": "closed",
        "guessed": false,
    },
    {
        "index": 5,
        "image": "images/tiles/Merz-Spezial_Dragees_elp.jpg",
        "state": "closed",
        "guessed": false,
    },
    {
        "index": 6,
        "image": "images/tiles/Prospan_Eff_Tabletes_65mg_elp.jpg",
        "state": "closed",
        "guessed": false,
    },
    {
        "index": 7,
        "image": "images/tiles/Prospan_Sīrups100_ml_elp.jpg",
        "state": "closed",
        "guessed": false,
    },
    {
        "index": 8,
        "image": "images/tiles/combogesic_photo_2022.jpg",
        "state": "closed",
        "guessed": false,

    },
    {
        "index": 9,
        "image": "images/tiles/Fervex_pieaugušajiem_iepakojums_taisni_NEW.jpg",
        "state": "closed",
        "guessed": false,
    },
    {
        "index": 10,
        "image": "images/tiles/Isla_cassis_kastīte_sataisīta.jpg",
        "state": "closed",
        "guessed": false,
    },
    {
        "index": 11,
        "image": "images/tiles/Isla_junior_kastīte_sataisīta.jpg",
        "state": "closed",
        "guessed": false,
    },
    {
        "index": 12,
        "image": "images/tiles/Isla_medic_acut_kastīte_sataisīta.jpg",
        "state": "closed",
        "guessed": false,
    },
    {
        "index": 13,
        "image": "images/tiles/Merz-Spezial_Dragees_elp.jpg",
        "state": "closed",
        "guessed": false,
    },
    {
        "index": 14,
        "image": "images/tiles/Prospan_Eff_Tabletes_65mg_elp.jpg",
        "state": "closed",
        "guessed": false,
    },
    {
        "index": 15,
        "image": "images/tiles/Prospan_Sīrups100_ml_elp.jpg",
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
let highScoreArray = [];
let timePlayed = 0;
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

function playVideo() {
    videoClip.style.display = 'flex';
    videoClip.play();
}

function closeVideo() {
    videoClip.pause();
    videoClip.currentTime = 0;
    videoClip.style.display = 'none';
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

//stop timer and process results
function checkTime() {
    if (playerGuessCount === 16) {
        clearInterval(timer);
    }
}

// show modal and save highScore
function showModal() {
    checkTime();
    modal.classList.add('show-modal');
    if (time.textContent < highScoreArray[9].Time) {
        resultTime.innerText = `Apsveicam! Tavs laiks ir ${time.textContent}s! Tev izdevās iekļūt starp labākajiem!`;
        bookmarkForm.hidden = false;
        playerName.focus();
    } else {
        highScoresBtn.style.display = "inline-block";
        playAgainBtn.style.display = "inline-block";
        bookmarkForm.hidden = true;
        resultTime.innerText = `Tavs laiks ir ${time.textContent}s! Veiksmi nākamreiz! Mēģināt vēlreiz?`;
    }
}

function closeModal() {
    modal.classList.remove('show-modal');
}

// reset game grid
function resetGameGrid() {
    if (playerGuessCount == 16) {
        cards.forEach((element) => {
            element.classList.remove("selected");
        });

        gridofCards.forEach((element) => {
            element.guessed = false;
            element.state = "closed";
        })
        gameArea.style.display = "none";
        grid.style.display = "none";
        closeModal();
        cardsOpen = 0;
        timePlayed = 0;
        playerGuessCount = 0;
    }
}

// read highScore table
function showHighScores() {
    resetGameGrid();
    resultsTable.style.display = "flex";
    btnStart.style.display = "flex";
    highScoreArray.forEach((element, index) => {
        player[index].innerText = `${element.Name}`;
        playerResult[index].innerText = `${element.Time}s`;
    });
}

function getHighScores() {
    if (localStorage.getItem('highScores')) {
        highScoreArray = JSON.parse(localStorage.highScores);
        console.log(highScoreArray);
    } else {
        highScoreArray = [
            { Name: 'Spēlētājs1', Time: 100 },
            { Name: 'Spēlētājs2', Time: 100 },
            { Name: 'Spēlētājs3', Time: 100 },
            { Name: 'Spēlētājs4', Time: 100 },
            { Name: 'Spēlētājs5', Time: 100 },
            { Name: 'Spēlētājs6', Time: 100 },
            { Name: 'Spēlētājs7', Time: 100 },
            { Name: 'Spēlētājs8', Time: 100 },
            { Name: 'Spēlētājs9', Time: 100 },
            { Name: 'Spēlētājs10', Time: 100 },
        ];
        highScoreArray.sort((e1, e2) => (e1.Time > e2.Time) ? 1 : (e1.Time < e2.Time) ? -1 : 0);
        localStorage.setItem('highScores', JSON.stringify(highScoreArray));
    }

    console.log(highScoreArray);
    console.log(localStorage.getItem('highScores'));
    showHighScores();
}

function removeGameGrid() {
    clearInterval(timer);
    cardsOpen = 0;
    timePlayed = 0;
    playerGuessCount = 0;
    cards.forEach((element) => {
        element.classList.remove("selected");
    });

    gridofCards.forEach((element) => {
        element.guessed = false;
        element.state = "closed";
    });
    gameArea.style.display = "none";
    grid.style.display = "none";
}

function playAgain() {
    resetGameGrid();
    launchGame();
}

async function home() {
    await removeGameGrid();
    await showHighScores();
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
        showModal()
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
        }, 1500);
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
        countdownTimer.textContent = 'Aiziet!';
    }, 3000);
    setTimeout(() => {
        startTimer();
    }, 3499);
    setTimeout(() => {
        countdown.hidden = true;
        fillCards();
        gameArea.style.display = "inline";
        grid.style.display = "flex";
        highScoresBtn.style.display = "none";
        playAgainBtn.style.display = "none";
    }, 3500);
}

function checkPlace(result) {
    for (let i = 0; i < highScoreArray.length; i++) {
        return result.Time < highScoreArray[i].Time;
    };
}

function storeResult(e) {
    e.preventDefault();
    const nameValue = playerName.value;
    result = { Name: nameValue, Time: time.textContent };
    console.log(result);
    console.log(highScoreArray[9].Time);
    if (result.Time < highScoreArray[9].Time) {
        highScoreArray.push(result);
        highScoreArray.sort((e1, e2) => (e1.Time > e2.Time) ? 1 : (e1.Time < e2.Time) ? -1 : 0);
        highScoreArray.length = 10;
        localStorage.setItem('highScores', JSON.stringify(highScoreArray));
        result = [];
        bookmarkForm.reset();
        closeModal();
        showHighScores();
    }
    console.log(highScoreArray);
    console.log(localStorage.getItem('highScores'));
}

btnStart.addEventListener("click", launchGame);
cards.forEach(cards => cards.addEventListener("click", selectCard));
cards.forEach(cards => cards.addEventListener("mouseover", hoverCard));
cards.forEach(cards => cards.addEventListener("mouseleave", outCard));
fullscreenBtn.addEventListener('click', toggleFullscreen);
highScoresBtn.addEventListener('click', showHighScores);
playAgainBtn.addEventListener('click', playAgain);
bookmarkForm.addEventListener('submit', storeResult);
btnHome.addEventListener('click', home);
btnVideo.addEventListener('click', playVideo);
videoClip.addEventListener('click', closeVideo);

// get highScores on load
getHighScores();