
let grid;
let allPlayers;
let logWriter;
let logic;
let cols;
let rows;
let counter;
let nextStop;
let message = [];

/*
* Creates the first iteration
*/
function setup() {
    frameRate(1);
    createCanvas(1528, 503);
    grid = new Grid(width-400, height);
    logWriter = new LogWriter(1140,50);
    const players = new Players();
    allPlayers = players.allPlayers
    grid.fillAndClean(allPlayers);
    logic = new Logic(allPlayers);
    counter = 0;
    nextStop = 0;
}

/*
* Renders the grid every time (like step function)
*/
function draw() {
    if (counter === nextStop) {
        message = logic.newIteration();
        nextStop += Math.floor(Math.random()*40);
        background(255); // Day // Night background(100);
        updatePlayers();
    }
    logWriter.MessageBoardUpdate(message);
    counter++;
    console.log('counter: ' + counter + ' nextStop: ' + nextStop);
}

/*
* Updates the players visual information (like step function)
*/
function updatePlayers() {
    for (let i = 0; i < allPlayers.length; i++) {
        const currentPlayer = allPlayers[i];
        const statusArray = currentPlayer.statusArray;
        currentPlayer.changeStatus(statusArray[0]);
        grid.fillAndClean(allPlayers);
    }
}
