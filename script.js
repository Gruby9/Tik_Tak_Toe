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
const tiles = document.querySelectorAll('.tile')
console.log(tiles)
console.log(tiles[0].classList)

function activeTiles() {
    for (let n = 0; n < tiles.length; n++) {
        let i = n;
        tiles[n].addEventListener('click', function activate(event) {
            turn1.textContent = ''
            turn2.textContent = ''
            turn();
            tiles[n].textContent = activeSymbol;
            tiles[n].classList.remove('free');
            tiles[n].classList.add('ocupied')
            checkTheBoard();      
            console.log(activeSymbol)
            console.log(tiles)
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
    console.log(player1, player2)
    activeTiles();
    turn();
    console.log(player1.symbol)
}

function endTask() {
    if (nameForm1.checkValidity() === true &&
        nameForm2.checkValidity() ===true &&
        sybmbolX.checkValidity() === true ) {
            closePopup()
    }
}

const gameboard = (() => {
    let board = [];

}) ();

let count = 3;
function turn() {
    if (count % 2 === 1) {
        activeSymbol = player1.symbol;
        turn2.textContent = 'Your Turn!'
    } else {
        activeSymbol = player2.symbol
        turn1.textContent = 'Your Turn!'
    }
    count++
}

function checkTheBoard() {
    if (tiles[0].classList.contains('ocupied') && 
        tiles[1].classList.contains('ocupied') && 
        tiles[2].classList.contains('ocupied')) {
            if (tiles[0].innerHTML === 
                tiles[1].innerHTML && 
                tiles[1].innerHTML ===
                tiles[2].innerHTML) {
                    if (tiles[0].innerHTML === player1.symbol){
                        alert('player1 wins')
                    } else {
                        alert('player2 wins')
                    }
                }
    }
}

// submitButton.addEventListener('click', test())

// function test() {
//     console.log(!nameForm, !sybmbolX, !form)
//     console.log(nameForm.checkValidity())
//     console.log(sybmbolX.checked)
//     console.log(sybmbolO.checked)
// }

