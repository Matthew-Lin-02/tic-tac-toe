
// essentially a struct as theres no function no verbs 
function Player(name, marker) {
    this.name = name;
    this.marker = marker;
}

// singleton
// Immediately invoked function expression IIFE for short typically used for function grouping not for holding state. 

console.log("hello")
// Im going to be writing procedurally on purpose if i want more abstraction later on ill do it then :)
const gameBoard = new Array(9);
const player1 = new Player("Matthew", "X");
const player2 = new Player("Selina", "O");
let playerTurn = 1;
let moveTurn = 0;

// Create game loop
function gameLoop() {
    while (moveTurn < 9) { // Allowing all moves (0 to 8)
        let indexMove = prompt('Enter a cell (0-8): '); // Wait for input
        indexMove = parseInt(indexMove)
        console.log(indexMove);

        if (playerTurn === 1) {
            gameBoard[indexMove] = player1.marker;
            playerTurn = 2;
        } else if (playerTurn === 2) {
            gameBoard[indexMove] = player2.marker;
            playerTurn = 1;
        }

        moveTurn++;
    }
}


// Start the game loop
gameLoop();

for(let i = 0; i < 9; i++){
    console.log(gameBoard[i])
}