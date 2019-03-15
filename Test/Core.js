
let grid;
let cols;
let rows;

/*
* Creates the first iteration
*/
function setup() {
    createCanvas(1128, 503);
    grid = new Grid(width, height);
    Players = new Players();
    grid.fillAndClean(Players.allPlayers);
}

/*
*Renders the grid every time (like step function)
*/
function draw() {
    const allPlayers = Players.allPlayers;
    for (let i = 0; i < allPlayers.length; i++) {
        const currentPlayer = allPlayers[i];
        const statusArray = currentPlayer.statusArray;
        var randomNumber = Math.floor(Math.random()*statusArray.length);
        currentPlayer.changeStatus(statusArray[randomNumber]);
        grid.fillAndClean(Players.allPlayers);
    }
}



