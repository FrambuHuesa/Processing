class Grid {
  constructor(width, height) {
    textSize(12);
    this.resolution = 125;
    this.cols = (width - 3) / this.resolution;
    this.rows = (height - 3) / this.resolution;
    this.gridArray = Grid.make2DEmptyGrid();
  }

  // This initializes the empty grid
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

  /**
   * Changes the color of the cell dependig if it's alive or not
   * @param {Array} allPlayers
   */
  fillAndClean(allPlayers) {
    background(255); // Day // Night background(100);
    const resolution = this.resolution;
    let playerIteration = 0;
    for (let i = 0; i < this.cols; i++) {
        for (let j = 0; j < this.rows; j++) {
            let x = i * resolution;
            let y = j * resolution;
            const player = allPlayers[playerIteration];
            switch (player.status) {
              case 'Alive':
                this.fillSquares('#94ef45', x, y, resolution, player.name);
                break;
              case 'Dead':
                this.fillSquares('grey', x, y, resolution, player.name);
                break;
              case 'Sick':
                this.fillSquares('#c3d16a', x, y, resolution, player.name);
                break;
              case 'Hurt':
                this.fillSquares('#f4bc42', x, y, resolution, player.name);
                break;
              case 'BadlyHurt':
                this.fillSquares('#ea3e17', x, y, resolution, player.name);
                break;
            }
            playerIteration++;
        }
    }
  }

  /** This method fills the blocks with the names of the players
   * @param {string} color
   * @param {int} x
   * @param {int} y
   * @param {int} resolution
   * @param {string} name
   */
  fillSquares(color, x, y, resolution, name){
    stroke(0);
    fill(color);
    rect(x, y, resolution, resolution);
    noStroke(0);

    fill(0);
    text(name, x + (resolution / 3), y + (resolution / 2));
  }
}

