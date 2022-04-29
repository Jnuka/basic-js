const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given some integer, find the maximal number you can obtain
 * by deleting exactly one digit of the given number.
 *
 * @param {Number} n
 * @return {Number}
 *
 * @example
 * For n = 152, the output should be 52
 *
 */
 function deleteDigit(n) {
  let maxN = 0;
  let strN = n.toString();
  for (let i = 0; i < strN.length; i++) {
    let str = '';
    if (i === 0 ) {
      str = strN.substring(1);
    } else if (i === strN.length - 1) {
      str = strN.substring(0, i);
    } else {
      str = strN.substring(0, i) + strN.substring(i + 1);
    }
    if (str > maxN) {
      maxN = str;
    }    
  }  
  return parseInt(maxN);
}

module.exports = {
  deleteDigit
};
