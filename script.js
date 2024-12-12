const gameBoard = (function(){
    let cells = new Array(9);
    return {cells};
})

function Player(name, marker) {
    this.name = name;
    this.marker = marker;
    this.sayName = function() {
        console.log(this.name)
    };
    
}
function game(player1, player2, gameBoard){
    // initialise players
    function placeMarker(index, player){
        gameBoard.cells[index] = player
    }

}

const matthew = Player("Matthew", "X");
const selina = Player("Selina", "O");