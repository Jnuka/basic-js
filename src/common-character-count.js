const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given two strings, find the number of common characters between them.
 *
 * @param {String} s1
 * @param {String} s2
 * @return {Number}
 *
 * @example
 * For s1 = "aabcc" and s2 = "adcaa", the output should be 3
 * Strings have 3 common characters - 2 "a"s and 1 "c".
 */
function getCommonCharacterCount(str1, str2) {
  let str1Array = [...str1];
  let copyStr2 = str2;
  let count = 0;
  for (let i = 0; i < copyStr2.length; i++) {
    if (str1Array.includes(copyStr2[i])) {
      count++;
      str1Array.splice(str1Array.indexOf(copyStr2[i]), 1);
    }
  }
  return count;
}

module.exports = {
  getCommonCharacterCount
};
