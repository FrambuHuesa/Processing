
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
        ({ message, allPlayers } = logic.newIteration(allPlayers));
        nextStop += Logic.getRandomNumber(5,15);
        grid.fillAndClean(allPlayers);
    }
    logWriter.MessageBoardUpdate(message);
    counter++;
    console.log('counter: ' + counter + ' nextStop: ' + nextStop);
}
