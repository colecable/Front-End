class Card { //Holds the values for the cards
    constructor(value, suit) {
        this.value = value;
        this.suit = suit;
    }
}

// class Deck { //Creates the array for the deck and then shuffles the cards
//     constructor() {
//         this.cards = [];
//     }
function shuffleCards() {
    allDecks.sort(() => {
        return Math.random() - 0.5;
    })
   }
// }

class Player { //Keeps count of the player's score
    constructor(name) {
        this.name = name;
        this.score = 0;
        this.hand = [];
    }
}

function startGame() { //Starts the game
    let player1 = makePlayers();
    let player2 = makePlayers();

    
    const card = new Card(this.values, this.suits)
    const gameDeck = new Deck();
    
}

function makePlayers() {
    const newPlayer = new Player(prompt("Enter Name"));
    return newPlayer
}

function makeHearts() {
    let values = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13];
    
    for(i = 0; i< values.length; i++) {
        cardOfHearts = new Card(values[i], "of Hearts")
        heartDeck.push(cardOfHearts);
        console.log(cardOfHearts);
    }
}

function makeDiamonds() {
    let values = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13];
    
    for(i = 0; i< values.length; i++) {
        let cardOfDiamonds = new Card(values[i], "of Diamonds")
        diamondDeck.push(cardOfDiamonds);
        console.log(cardOfDiamonds);
    }
}

function makeClubs() {
    let values = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13];
    
    for(i = 0; i< values.length; i++) {
        let cardOfClubs = new Card(values[i], "of Clubs")
        clubDeck.push(cardOfClubs);
        console.log(cardOfClubs);
    }
}

function makeSpades() {
    let values = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13];
    
    for(i = 0; i< values.length; i++) {
        let cardOfSpades = new Card(values[i], "of Spades")
        spadeDeck.push(cardOfSpades);
        console.log(cardOfSpades);
    }
}

function combineSuits() {
    let allSuits = heartDeck.concat(diamondDeck, clubDeck, spadeDeck);
    allDecks.push(allSuits);
}

function dealCards() {
    player1Deck = allDecks.splice(0, 25);
    player2Deck = player1Deck;
}

let heartDeck = [];
let diamondDeck = [];
let clubDeck = [];
let spadeDeck = [];
let allDecks = [];
let player1Deck = [];
let player2Deck = [];

makeHearts()//creates all the arrays for card suit
makeDiamonds()//
makeClubs()//
makeSpades()//
combineSuits()//creates array for all the suits
console.log(allDecks);
shuffleCards()//randomizes cards
dealCards()//splices the shuffled deck into the two player's decks
console.log(player1Deck);
console.log(player2Deck);

for (i = 0; i <= 25; i++) {//plays the game
    if(player1Deck[0][i].value == player2Deck[0][i].value) {
        console.log("Tie!");
    }
    else if(player1Deck[0][i].value > player2Deck[0][i].value) {
        console.log("Player 1 takes the card!");
    }
    else {
        console.log("Player 2 takes the card!");
    }
}
//startGame()
