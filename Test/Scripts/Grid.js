class Grid {
  constructor(width, height) {
    this.resolution = 125;
    this.cols = (width - 3) / this.resolution;
    this.rows = (height - 3) / this.resolution;
    this.gridArray = Grid.make2DEmptyGrid();
  }
  static make2DEmptyGrid() {
    const gridArray = [];
    let emptyGrid = new Array(this.cols);
    for (let i = 0; i < emptyGrid.length; i++) {
        emptyGrid[i] = new Array(this.rows);
    }
    let iterationOfGrid = 0
    for (let i = 0; i < cols; i++) {
        for (let j = 0; j < rows; j++) {
            let x = i * resolution;
            let y = j * resolution;
            gridArray[iterationOfGrid] = emptyGrid[x][y];
            iterationOfGrid++;
          }
      }
      return gridArray;
  }
  // Changes the color of the cell dependig if it's alive or not
  fillAndClean(Players) {
    const resolution = this.resolution;
    let playerIteration = 0;
    for (let i = 0; i < this.cols; i++) {
        for (let j = 0; j < this.rows; j++) {
            let x = i * resolution;
            let y = j * resolution;
            const Player = Players[playerIteration];
            switch (Player.status) {
              case 'Alive':
                this.fillSquares('#94ef45', x, y, resolution, Player.name);
                break;
              case 'Dead':
                this.fillSquares('grey', x, y, resolution, Player.name);
                break;
              case 'Sick':
                this.fillSquares('#c3d16a', x, y, resolution, Player.name);
                break;
              case 'Hurt':
                this.fillSquares('#f4bc42', x, y, resolution, Player.name);
                break;
              case 'BadlyHurt':
                this.fillSquares('#ea3e17', x, y, resolution, Player.name);
                break;
            }
            playerIteration++;
        }
    }
  }
  fillSquares(color, x, y, resolution, name){
    stroke(0);
    fill(color);
    rect(x, y, resolution, resolution);
    noStroke(0);

    fill(0);
    text(name, x + (resolution / 3), y + (resolution / 2));
  }
}

