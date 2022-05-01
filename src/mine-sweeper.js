const { NotImplementedError } = require('../extensions/index.js');

/**
 * In the popular Minesweeper game you have a board with some mines and those cells
 * that don't contain a mine have a number in it that indicates the total number of mines
 * in the neighboring cells. Starting off with some arrangement of mines
 * we want to create a Minesweeper game setup.
 *
 * @param {Array<Array>} matrix
 * @return {Array<Array>}
 *
 * @example
 * matrix = [
 *  [true, false, false],
 *  [false, true, false],
 *  [false, false, false]
 * ]
 *
 * The result should be following:
 * [
 *  [1, 2, 1],
 *  [2, 1, 1],
 *  [1, 1, 1]
 * ]
 */
 function minesweeper(matrix) {
  let resultMatrix = [];
  for (let row = 0; row < matrix.length; row++) {
    let resultMatrixRow = [];
    for (let column = 0; column < matrix[row].length; column++) {
      if (matrix[row][column]) {
        resultMatrixRow.push(1);
      } else {
        let countOfMines = 0;
        for (let rowShift = -1; rowShift < 2; rowShift++) {
          for (let columnShift = -1; columnShift < 2; columnShift++) {
            if (row + rowShift >= 0 
                && column + columnShift >= 0 
                && row + rowShift < matrix.length 
                && column + columnShift < matrix[row].length 
                && matrix[row + rowShift][column + columnShift]) {
              countOfMines += 1;
            }
          }
        }
        resultMatrixRow.push(countOfMines);
      }
    }
    resultMatrix.push(resultMatrixRow);
  }
  return resultMatrix;
}

module.exports = {
  minesweeper
};
