class Player {
    constructor(name, letter, currentTurn) {
        this.name = name;
        this.letter = letter;
        this.currentTurn = currentTurn;
    }
}

let gameBoard = ['', '', '', '', '', '', '', '', '']; //stores the X or O values so we can check them later


let playerList = []; //keeps player objects, should only be two of them
let player1 = new Player("Player 1", "X", true);
playerList.push(player1);
let player2 = new Player("Player 2", "O", false);
playerList.push(player2);

var currentMoveCount = 0; //We'll use this later to check for draws

console.log(playerList);

function startTurn() { //todo: identify the player's current turn, write the X or O to HTML element
    updateGameBoard();
    checkCurrentTurn();
    turnDeclaration();
    checkWinCondition();
}

function updateGameBoard() { //todo: write XorO to HTML, push the XorO value to the index of the HTML element into gameBoard

    for(let p of playerList) {
        if(p.currentTurn === true) {
            gameBoard[indexCell] = p.letter;//How we push value to gameBoard
        }
        
    }
    currentMoveCount++
}
function checkCurrentTurn() { //todo: identify which player's turn it is, switch boolean on each player
    for( let p of playerList) {
        if (p.currentTurn === true) {
            p.currentTurn = false;
        }
        else {
            p.currentTurn = true;
        }
    }
}

function turnDeclaration() {
    for (let p of playerList) {
        if(p.currentTurn === true) {
            document.getElementById('h4').innerHTML = `It is ${p.name}'s turn.`
        }
    }
}

function checkWinCondition() { //all the possible combinations of the array indices that would constitute a win for both X and O
    if (gameBoard[0] == 'X' && gameBoard[1] == 'X' && gameBoard[2] == 'X') {
        alert('PLAYER 1 HAS WON')
    }
    else if (gameBoard[3] == 'X' && gameBoard[4] == 'X' && gameBoard[5] == 'X') {
        alert('PLAYER 1 HAS WON')
    }
    else if (gameBoard[6] == 'X' && gameBoard[7] == 'X' && gameBoard[8] == 'X') {
        alert('PLAYER 1 HAS WON')
    }
    else if (gameBoard[0] == 'X' && gameBoard[3] == 'X' && gameBoard[6] == 'X') {
        alert('PLAYER 1 HAS WON')
    }
    else if (gameBoard[1] == 'X' && gameBoard[4] == 'X' && gameBoard[7] == 'X') {
        alert('PLAYER 1 HAS WON')
    }
    else if (gameBoard[2] == 'X' && gameBoard[5] == 'X' && gameBoard[8] == 'X') {
        alert('PLAYER 1 HAS WON')
    }
    else if (gameBoard[0] == 'X' && gameBoard[4] == 'X' && gameBoard[8] == 'X') {
        alert('PLAYER 1 HAS WON')
    }
    else if (gameBoard[2] == 'X' && gameBoard[4] == 'X' && gameBoard[6] == 'X') {
        alert('PLAYER 1 HAS WON')
    }
    else if (gameBoard[0] == 'O' && gameBoard[1] == 'O' && gameBoard[2] == 'O') {
        alert('PLAYER 2 HAS WON')
    }
    else if (gameBoard[3] == 'O' && gameBoard[4] == 'O' && gameBoard[5] == 'O') {
        alert('PLAYER 2 HAS WON')
    }
    else if (gameBoard[6] == 'O' && gameBoard[7] == 'O' && gameBoard[8] == 'O') {
        alert('PLAYER 2 HAS WON')
    }
    else if (gameBoard[0] == 'O' && gameBoard[3] == 'O' && gameBoard[6] == 'O') {
        alert('PLAYER 2 HAS WON')
    }
    else if (gameBoard[1] == 'O' && gameBoard[4] == 'O' && gameBoard[7] == 'O') {
        alert('PLAYER 2 HAS WON')
    }
    else if (gameBoard[2] == 'O' && gameBoard[5] == 'O' && gameBoard[8] == 'O') {
        alert('PLAYER 2 HAS WON')
    }
    else if (gameBoard[0] == 'O' && gameBoard[4] == 'O' && gameBoard[8] == 'O') {
        alert('PLAYER 2 HAS WON')
    }
    else if (gameBoard[2] == 'O' && gameBoard[4] == 'O' && gameBoard[6] == 'O') {
        alert('PLAYER 2 HAS WON')
    }
    else if (currentMoveCount == 9) {
        alert("DRAW")
    }

}

console.log(gameBoard); //test
//All the below code is event listeners for each square that assign HTML to a variable and then write the player's turn to H4
document.getElementById('square1').addEventListener('click' , () => {
    var squareOne = document.getElementById('square1');
    indexCell = 0
    for( let p of playerList) {
        if (p.currentTurn === true) {
            squareOne.innerHTML = p.letter;
        }
    }
    startTurn();
    console.log(squareOne);
});
document.getElementById('square2').addEventListener('click' , () => {
    var squareTwo = document.getElementById('square2');
    indexCell = 1
    for( let p of playerList) {
        if (p.currentTurn === true) {
            squareTwo.innerHTML = p.letter;
        }
    }
    startTurn();
    console.log(squareTwo);
});
document.getElementById('square3').addEventListener('click' , () => {
    var squareThree = document.getElementById('square3');
    indexCell = 2
    for( let p of playerList) {
        if (p.currentTurn === true) {
            squareThree.innerHTML = p.letter;
        }
    }
    startTurn();
    console.log(squareThree);
});
document.getElementById('square4').addEventListener('click' , () => {
    var squareFour = document.getElementById('square4');
    indexCell = 3
    for( let p of playerList) {
        if (p.currentTurn === true) {
            squareFour.innerHTML = p.letter;
        }
    }
    startTurn();
    console.log(squareFour);
});
document.getElementById('square5').addEventListener('click' , () => {
    var squareFive = document.getElementById('square5');
    indexCell = 4
    for( let p of playerList) {
        if (p.currentTurn === true) {
            squareFive.innerHTML = p.letter;
        }
    }
    startTurn();
    console.log(squareFive);
});
document.getElementById('square6').addEventListener('click' , () => {
    var squareSix = document.getElementById('square6');
    indexCell = 5
    for( let p of playerList) {
        if (p.currentTurn === true) {
            squareSix.innerHTML = p.letter;
        }
    }
    startTurn();
    console.log(squareSix);
});
document.getElementById('square7').addEventListener('click' , () => {
    var squareSeven = document.getElementById('square7');
    indexCell = 6;
    for( let p of playerList) {
        if (p.currentTurn === true) {
            squareSeven.innerHTML = p.letter;
        }
    }
    startTurn();
    console.log(squareSeven);
});
document.getElementById('square8').addEventListener('click' , () => {
    var squareEight = document.getElementById('square8');
    indexCell = 7
    for( let p of playerList) {
        if (p.currentTurn === true) {
            squareEight.innerHTML = p.letter;
        }
    }
    startTurn();
    console.log(squareEight);
});
document.getElementById('square9').addEventListener('click' , () => {
    var squareNine = document.getElementById('square9');
    indexCell = 8
    for( let p of playerList) {
        if (p.currentTurn === true) {
            squareNine.innerHTML = p.letter;
        }
    }
    startTurn();
    console.log(squareNine);
});

document.getElementById('btn').addEventListener('click' , () => { //when you click the button, it sets multiple things back to their starting value
    document.getElementById('square1').innerHTML = '';
    document.getElementById('square2').innerHTML = '';
    document.getElementById('square3').innerHTML = '';
    document.getElementById('square4').innerHTML = '';
    document.getElementById('square5').innerHTML = '';
    document.getElementById('square6').innerHTML = '';
    document.getElementById('square7').innerHTML = '';
    document.getElementById('square8').innerHTML = '';
    document.getElementById('square9').innerHTML = '';
    document.getElementById('h4').innerHTML = "It is Player 1's turn."
    gameBoard = ['', '', '', '', '', '', '', '', ''];
    player1.currentTurn = true;
    player2.currentTurn = false;
});