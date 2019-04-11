
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
    createCanvas(1128, 903);
    grid = new Grid(width, height - 400);
    logWriter = new LogWriter(50,525);
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
        nextStop += Logic.getRandomNumber(5,15);
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
