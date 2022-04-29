const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given matrix, a rectangular matrix of integers,
 * just add up all the values that don't appear below a "0".
 *
 * @param {Array<Array>} matrix
 * @return {Number}
 *
 * @example
 * matrix = [
 *  [0, 1, 1, 2],
 *  [0, 5, 0, 0],
 *  [2, 0, 3, 3]
 * ]
 *
 * The result should be 9
 */
 function getMatrixElementsSum(matrix) {
  let sumMatrix = 0;
  let matrixRow = matrix.length;
  let matrixCol = matrix[0].length;
  // console.log(matrixCol);
  // console.log(matrixRow);
  for (let i = 0; i < matrixRow; i++) {
    for (let j = 0; j < matrixCol; j++) {  
      if (i === 0) {
        sumMatrix += matrix[i][j];
      } else if (matrix[i - 1][j] !== 0) {
        sumMatrix += matrix[i][j];
      } 
    }
  }
  return sumMatrix;
}

module.exports = {
  getMatrixElementsSum
};
