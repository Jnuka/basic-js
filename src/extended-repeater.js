const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create a repeating string based on the given parameters
 *  
 * @param {String} str string to repeat
 * @param {Object} options options object 
 * @return {String} repeating string
 * 
 *
 * @example
 * 
 * repeater('STRING', { repeatTimes: 3, separator: '**', 
 * addition: 'PLUS', additionRepeatTimes: 3, additionSeparator: '00' })
 * => 'STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS'
 *
 */
 function repeater(str, options) {
  let strNew = str;
  if (options.addition !== undefined) {
    let additionSeparator = options.additionSeparator !== undefined ? options.additionSeparator : '|';
    let arrayAddition = [];
    let additionRepeatTimes = options.additionRepeatTimes !== undefined ? options.additionRepeatTimes : 1;
    for (let i = 0; i < additionRepeatTimes; i++) {
      arrayAddition.push(convertToString(options.addition));
    }
    strNew += arrayAddition.join(additionSeparator);
  }
  let separator = options.separator !== undefined ? options.separator : '+';
  let repeatTimes = options.repeatTimes !== undefined ? options.repeatTimes : 1;
  let arrayString = [];
  for (let i = 0; i < repeatTimes; i ++) {
    arrayString.push(strNew);
  } 
  return arrayString.join(separator);
}

const convertToString = (str) => { 
  return str === null ? 'null' : str;
}

module.exports = {
  repeater
};
