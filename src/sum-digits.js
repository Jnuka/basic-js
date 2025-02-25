const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given a number, replace this number with
 * the sum of its digits until we get to a one digit number.
 *
 * @param {Number} n
 * @return {Number}
 *
 * @example
 * For 100, the result should be 1 (1 + 0 + 0 = 1)
 * For 91, the result should be 1 (9 + 1 = 10, 1 + 0 = 1)
 *
 */
 function getSumOfDigits(n) {
  let arrayN = [];
  let sum = 0;
  let count = n.toString().length;
  for (let i = 0; i < count; i++) {
    arrayN.push(n % 10);
    n = Math.trunc(n / 10);
  }
  for (let i = 0; i < arrayN.length; i++) { 
    sum += arrayN[i];
  }
  if (sum > 9) {    
    return getSumOfDigits(sum);
  } else return sum;
}

module.exports = {
  getSumOfDigits
};
