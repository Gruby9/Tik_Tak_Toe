let player1
let player2
let activeSymbol
let playerSymbol1;
let playerSymbol2;
const sybmbolX = document.querySelector('#symbolX')
const sybmbolO = document.querySelector('#symbolO')
const popup = document.querySelector('.popup')
const nameForm1 = document.querySelector('#name1')
const nameForm2 = document.querySelector('#name2')
const turn1 = document.querySelector('#turn1')
const turn2 = document.querySelector('#turn2')
const player1Score = document.querySelector('#player1-score')
const player2Score = document.querySelector('#player2-score')
const gameboard = document.querySelector('.gameboard')
const backupGameboard = document.querySelector('.backupGameboard')
let gameboardCount = 1

function activeTiles() {
    const tiles = document.querySelectorAll('.tile')
    for (let n = 0; n < tiles.length; n++) {
        let i = n;
        tiles[n].addEventListener('click', function activate(event) {
            tiles[n].textContent = activeSymbol;
            turn1.textContent = ''
            turn2.textContent = ''
            gameboardCount++
            turn();
            tiles[n].classList.remove('free');
            tiles[n].classList.add('ocupied')
            checkTheBoard();      
            tiles[n].removeEventListener('click', activate)
        })
    }
}

const playerFactory = (name, symbol) => {
    let score = 0;
    return {name, symbol, score}
}

function closePopup() {
    popup.classList.remove('open');
    createPlayers();
}

function createPlayers() {
    let playerName1 = document.querySelector('#name1').value
    let playerName2 = document.querySelector('#name2').value
    document.querySelector('#player1-name').textContent = playerName1
    document.querySelector('#player2-name').textContent = playerName2
    if (sybmbolX.checked === true) {
        playerSymbol1 = 'X';
        playerSymbol2 = 'O';
    } else {
        playerSymbol1 = 'O';
        playerSymbol2 = 'X';
    }
    player1 = playerFactory(playerName1, playerSymbol1);
    player2 = playerFactory(playerName2, playerSymbol2)
    activeTiles();
    turn();
}

function endTask() {
    if (nameForm1.checkValidity() === true &&
        nameForm2.checkValidity() ===true &&
        sybmbolX.checkValidity() === true ) {
            closePopup()
    }
}


let count = 3;
function turn() {
    if (count % 2 === 1) {
        activeSymbol = player1.symbol;
        turn1.textContent = 'Your Turn!'
    } else {
        activeSymbol = player2.symbol
        turn2.textContent = 'Your Turn!'
    }
    count++
}

function beginAgain() {
    gameboard.innerHTML = backupGameboard.innerHTML
    gameboardCount = 1;
    player1Score.innerHTML = ''
    player2Score.innerHTML = ''
    player1Score.innerHTML = player1.score
    player2Score.innerHTML = player2.score
    activeTiles();
}

function checkTheBoard() {
    const tiles = document.querySelectorAll('.tile')
    if (tiles[0].classList.contains('ocupied') && 
        tiles[1].classList.contains('ocupied') && 
        tiles[2].classList.contains('ocupied')) {
            if (tiles[0].innerHTML === 
                tiles[1].innerHTML && 
                tiles[1].innerHTML ===
                tiles[2].innerHTML) {
                    if (tiles[0].innerHTML === player1.symbol){
                        player1.score++
                        alert('Player 1 wins!')
                        beginAgain()
                    } else {
                        player2.score++
                        alert('Player 2 wins!')
                        beginAgain()
                    }
                }
    } 
    if (tiles[3].classList.contains('ocupied') && 
        tiles[4].classList.contains('ocupied') && 
        tiles[5].classList.contains('ocupied')) {
            if (tiles[3].innerHTML === 
                tiles[4].innerHTML && 
                tiles[4].innerHTML ===
                tiles[5].innerHTML) {
                    if (tiles[3].innerHTML === player1.symbol){
                        player1.score++
                        alert('Player 1 wins!')
                        beginAgain()
                    } else {
                        player2.score++
                        alert('Player 2 wins!')
                        beginAgain()
                    }
                }
    }   
    if (tiles[6].classList.contains('ocupied') && 
        tiles[7].classList.contains('ocupied') && 
        tiles[8].classList.contains('ocupied')) {
            if (tiles[6].innerHTML === 
                tiles[7].innerHTML && 
                tiles[7].innerHTML ===
                tiles[8].innerHTML) {
                    if (tiles[6].innerHTML === player1.symbol){
                        player1.score++
                        alert('Player 1 wins!')
                        beginAgain()
                    } else {
                        player2.score++
                        alert('Player 2 wins!')
                        beginAgain()
                    }
                }
    } 
    if (tiles[0].classList.contains('ocupied') && 
        tiles[3].classList.contains('ocupied') && 
        tiles[6].classList.contains('ocupied')) {
            if (tiles[0].innerHTML === 
                tiles[3].innerHTML && 
                tiles[3].innerHTML ===
                tiles[6].innerHTML) {
                    if (tiles[0].innerHTML === player1.symbol){
                        player1.score++
                        alert('Player 1 wins!')
                        beginAgain()
                    } else {
                        player2.score++
                        alert('Player 2 wins!')
                        beginAgain()
                    }
                }
    } 
    if (tiles[1].classList.contains('ocupied') && 
        tiles[4].classList.contains('ocupied') && 
        tiles[7].classList.contains('ocupied')) {
            if (tiles[1].innerHTML === 
                tiles[4].innerHTML && 
                tiles[4].innerHTML ===
                tiles[7].innerHTML) {
                    if (tiles[1].innerHTML === player1.symbol){
                        player1.score++
                        alert('Player 1 wins!')
                        beginAgain()
                    } else {
                        player2.score++
                        alert('Player 2 wins!')
                        beginAgain()
                    }
                }
    } 
    if (tiles[2].classList.contains('ocupied') && 
        tiles[5].classList.contains('ocupied') && 
        tiles[8].classList.contains('ocupied')) {
            if (tiles[2].innerHTML === 
                tiles[5].innerHTML && 
                tiles[5].innerHTML ===
                tiles[8].innerHTML) {
                    if (tiles[2].innerHTML === player1.symbol){
                        player1.score++
                        alert('Player 1 wins!')
                        beginAgain()
                    } else {
                        player2.score++
                        alert('Player 2 wins!')
                        beginAgain()
                    }
                }
    } 
    if (tiles[0].classList.contains('ocupied') && 
        tiles[4].classList.contains('ocupied') && 
        tiles[8].classList.contains('ocupied')) {
            if (tiles[0].innerHTML === 
                tiles[4].innerHTML && 
                tiles[4].innerHTML ===
                tiles[8].innerHTML) {
                    if (tiles[0].innerHTML === player1.symbol){
                        player1.score++
                        alert('Player 1 wins!')
                        beginAgain()
                    } else {
                        player2.score++
                        alert('Player 2 wins!')
                        beginAgain()
                    }
                }
    } 
    if (tiles[2].classList.contains('ocupied') && 
        tiles[4].classList.contains('ocupied') && 
        tiles[6].classList.contains('ocupied')) {
            if (tiles[2].innerHTML === 
                tiles[4].innerHTML && 
                tiles[4].innerHTML ===
                tiles[6].innerHTML) {
                    if (tiles[2].innerHTML === player1.symbol){
                        player1.score++
                        alert('Player 1 wins!')
                        beginAgain()
                    } else {
                        player2.score++
                        alert('Player 2 wins!')
                        beginAgain()
                    }
                }
    } 
    if (gameboardCount === 8) {
        alert('It is a tie')
        beginAgain()
    }
}


