const { NotImplementedError } = require('../extensions/index.js');

/**
 * Implement chainMaker object according to task description
 * 
 */
 const chainMaker = {
  chainArray : [],

  getLength() {
    return this.chainArray.length;
  },

  addLink(value) {  
    this.chainArray.push(value);
    return this;
  },

  removeLink(position) {
    if (Number.isInteger(position) && this.chainArray.length >= position && position > 0) {
      this.chainArray.splice(position - 1, 1) ;
      return this;
      
    } else { 
      this.chainArray = [];
      throw new Error('You can\'t remove incorrect link!');
    };    
  },

  reverseChain() {    
    this.chainArray = this.chainArray.reverse();
    return this;
  },

  finishChain() {
    let chain = this.chainArray.map(node => `( ${node} )`).join('~~');
    this.chainArray = [];
    return chain;
  }
};

module.exports = {
  chainMaker
};
