const { NotImplementedError } = require('../extensions/index.js');

const DISCARD_NEXT = '--discard-next';
const DISCARD_PREV = '--discard-prev';
const DOUBLE_NEXT = '--double-next';
const DOUBLE_PREV = '--double-prev';

/**
 * Create transformed array based on the control sequences that original
 * array contains
 * 
 * @param {Array} arr initial array
 * @returns {Array} transformed array
 * 
 * @example
 * 
 * transform([1, 2, 3, '--double-next', 4, 5]) => [1, 2, 3, 4, 4, 5]
 * transform([1, 2, 3, '--discard-prev', 4, 5]) => [1, 2, 4, 5]
 * 
 */
 function transform(array) {
  if (!Array.isArray(array)) { 
    throw new Error('\'arr\' parameter must be an instance of the Array!');
  }
  let newArray = [...array];

  for (let i = 0; i < newArray.length; i++) {
    if (newArray[i] === DISCARD_NEXT) {
      if (newArray[i + 1]) {
        newArray[i + 1] = null;
      }
      newArray[i] = null;   
    } else if (newArray[i] === DISCARD_PREV) {
      if (newArray[i - 1]) {
        newArray[i - 1] = null;
      }
      newArray[i] = null;   
    } else if (newArray[i] === DOUBLE_NEXT) {
      if (newArray[i + 1] || newArray[i + 1] === null) {
        newArray[i] = newArray[i + 1];
      } else newArray[i] = null;   
    } else if (newArray[i] === DOUBLE_PREV) {
      if (newArray[i - 1] || newArray[i - 1] === null) {
        newArray[i] = newArray[i - 1];
      } else newArray[i] = null;         
    }   
  }
  return newArray.filter(element => element !== null)
}

module.exports = {
  transform
};
