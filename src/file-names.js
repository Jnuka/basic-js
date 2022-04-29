const { NotImplementedError } = require('../extensions/index.js');

/**
 * There's a list of file, since two files cannot have equal names,
 * the one which comes later will have a suffix (k),
 * where k is the smallest integer such that the found name is not used yet.
 *
 * Return an array of names that will be given to the files.
 *
 * @param {Array} names
 * @return {Array}
 *
 * @example
 * For input ["file", "file", "image", "file(1)", "file"],
 * the output should be ["file", "file(1)", "image", "file(1)(1)", "file(2)"]
 *
 */
 function renameFiles(names) {
  const staits = new Object();
  let resultArray = [];
  for (let i = 0; i < names.length; i++) {   
    let name = staits[names[i]] ? `${names[i]}(${staits[names[i]]})` : names[i];
    if (resultArray.includes(name) ) {
      staits[name] = staits[name] ? staits[name] + 1 : 1;
      resultArray.push(staits[name] ? `${name}(${staits[name]})` : name);      
    } else {
      resultArray.push(staits[names[i]] ? `${names[i]}(${staits[names[i]]})` : names[i]);
      staits[names[i]] = staits[names[i]] ? staits[names[i]] + 1 : 1;
    }    
  }
  return resultArray;
}

module.exports = {
  renameFiles
};
