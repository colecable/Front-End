class Player {
    constructor(name, letter, currentTurn) {
        this.name = name;
        this.letter = letter;
        this.currentTurn = currentTurn;
    }
}

let gameBoard = ([
    [''],
    [''],
    [''],
    [''],
    [''],
    [''],
    [''],
    [''],
    ['']
]);

let playerList = []; //keeps player objects, should only be two of them
let player1 = new Player("Player 1", "X", true);
playerList.push(player1);
let player2 = new Player("Player 2", "O", false);
playerList.push(player2);

let currentMoveCount = 0;

console.log(playerList);

function startTurn() { //todo: identify the player's current turn, write the X or O to HTML element

}

function updateGameBoard() { //todo: write XorO to HTML, push the XorO value to the index of the HTML element into gameBoard

    for(let p of playerList) {
        if(p.currentTurn === true) {
            gameBoard[currentMoveCount].splice(currentMoveCount, 1, p.letter);//How we push value to gameBoard
        }
    }
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

function checkWinCondition() { //todo: create if statements to see if gameBoard is equal to a win state, otherwise 

}

console.log(gameBoard);
//todo: create eventListener that starts the game (startTurn) and calls the necessary methods
document.getElementById('square1').addEventListener('click' , () => {
    var squareOne = document.getElementById('square1');
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
    for( let p of playerList) {
        if (p.currentTurn === true) {
            squareNine.innerHTML = p.letter;
        }
    }
    startTurn();
    console.log(squareNine);
});