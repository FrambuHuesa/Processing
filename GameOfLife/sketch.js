// -------------
// -- GLOBALS --
// -------------

let grid;
let cols;
let rows;
let debug = true;
let started = false;
let resolution = 10;

// --------------------
// -- MAIN FUNCTIONS --
// --------------------

// Creates the first iteration
function setup() {
  createCanvas(500,420);
  cols = width / resolution;
  rows = (height - 120) / resolution;
	grid = make2DEmptyGrid(cols, rows);
  setCellsToZero();
  fillAndClean();
}

// Renders the grid every time (like step function)
function draw() {
  if(started){
  	fillAndClean();
  	checkCells();
  }
  fill(255);
  text('Rules:', 10, 320);
  text('Any live cell with fewer than two live neighbours dies, as if by underpopulation.', 10, 335);
	text('Any live cell with two or three live neighbours lives on to the next generation.', 10, 350);
  text('Any live cell with more than three live neighbours dies, as if by overpopulation.', 10, 365);
  text('Any dead cell with exactly three live neighbours becomes a live cell, as if by reproduction.', 10, 380);
	text('Press any button to start/stop', 10, 400);
  text('Click to add/delete cells', 10, 415);
}

// -------------------------
// -- AUXILIARY FUNCTIONS --
// -------------------------

/* Creates and returns a bidimensional array 
* @param {number} cols number of columns in the grid
* @param {number} rows number of rows in the grid
* @return {array] An empty grid
*/
function make2DEmptyGrid(cols, rows) {
	let emptyGrid = new Array(cols);
	for (let i = 0; i < emptyGrid.length; i++) {
		emptyGrid[i] = new Array(rows);
	}
	return emptyGrid;
}

// Initializes the grid to 0
function setCellsToZero() {
  for (let i = 0; i < cols; i++) {
		for (let j = 0; j < rows; j++) {
			let x = i * resolution;
      let y = j * resolution;
			grid[i][j] = 0;
		}
	}
}

// Changes the color of the cell dependig if it's alive or not
function fillAndClean() {
  background(0);
  for (let i = 0; i < cols; i++) {
		for (let j = 0; j < rows; j++) {
      let x = i * resolution;
      let y = j * resolution;
      if(grid[i][j] == 1) {
        fill(255);
      	rect(x, y, resolution, resolution);
      } else {
      	stroke('grey');
        fill(0);
      	rect(x, y, resolution, resolution);
      }
		}
	}
}

// Changes the states of the cells and creates the new grid
function checkCells(){
	let nextGrid = make2DEmptyGrid(cols, rows);
  for (let i = 0; i < cols; i++) {
  	for (let j = 0; j < rows; j++) {
			let currentGridCell = grid[i][j];
      let numberOfNeighbors = countNumberOfNeighbors(i, j);
      
      if (currentGridCell == 0 && numberOfNeighbors == 3) {
        nextGrid[i][j] = 1;
      } else if (currentGridCell == 1 && (numberOfNeighbors < 2 || numberOfNeighbors > 3)) {
        nextGrid[i][j] = 0;
      } else {
        nextGrid[i][j] = currentGridCell;
			}
    }
	}
  grid = nextGrid;
}

/* Checks number of alive cells around the current cell
* @param {number} x is the height of the cell
* @param {number} y is the width of the cell
*/
function countNumberOfNeighbors(x, y) {
  let numberOfNeighbors = 0;
  for (let i = -1; i < 2; i++) {
    for (let j = -1; j < 2; j++) {
      let col = (x + i + cols) % cols; // Modulus for wrap-around
      let row = (y + j + rows) % rows; // Modulus for wrap-around
      numberOfNeighbors += grid[col][row];
    }
  }
  numberOfNeighbors -= grid[x][y];
  return numberOfNeighbors;
}

// -------------------
// -- I/O FUNCTIONS --
// -------------------

// Lets the user create or destroy life
function mousePressed() {
  if((floor(mouseX/resolution)>=0 && floor(mouseX/resolution)<cols) && 
     (floor(mouseY/resolution)>=0 && floor(mouseY/resolution)<rows)){
  	 grid[floor(mouseX/resolution)][floor(mouseY/resolution)] = grid[floor(mouseX/resolution)][floor(mouseY/resolution)] ? 0 : 1;
  }
  fillAndClean();
}

// Starts or stops the game
function keyPressed() {
  started = !started;
	return false;
}
