const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given matrix where you have to find cats by ears "^^"
 *
 * @param {Array<Array>} matrix 
 * @return {Number} count of cats found
 *
 * @example
 * countCats([
 *  [0, 1, '^^'],
 *  [0, '^^', 2],
 *  ['^^', 1, 2]
 * ]) => 3`
 *
 */
 function countCats(arrayCats) {
  let nubmerOfCats = 0;

  for (let index = 0; index < arrayCats.length; index++) {
    for (let yndex = 0; yndex < arrayCats[index].length; yndex++) {
      if (arrayCats[index][yndex] === "^^") {
        nubmerOfCats += 1;     
      }    
    }    
  }
  return nubmerOfCats;
}

module.exports = {
  countCats
};
