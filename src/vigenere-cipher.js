const { NotImplementedError } = require('../extensions/index.js');

const LETTER_REGEX = /^[A-Z]$/i;
const FIRST_LETTER_CODE = 65;
const TOTAL_LETTERS = 26;
/**
 * Implement class VigenereCipheringMachine that allows us to create
 * direct and reverse ciphering machines according to task description
 * 
 * @example
 * 
 * const directMachine = new VigenereCipheringMachine();
 * 
 * const reverseMachine = new VigenereCipheringMachine(false);
 * 
 * directMachine.encrypt('attack at dawn!', 'alphonse') => 'AEIHQX SX DLLU!'
 * 
 * directMachine.decrypt('AEIHQX SX DLLU!', 'alphonse') => 'ATTACK AT DAWN!'
 * 
 * reverseMachine.encrypt('attack at dawn!', 'alphonse') => '!ULLD XS XQHIEA'
 * 
 * reverseMachine.decrypt('AEIHQX SX DLLU!', 'alphonse') => '!NWAD TA KCATTA'
 * 
 */
 class VigenereCipheringMachine {
  constructor(isNotReversed) {
    this.isNotReversed = isNotReversed !== undefined ? isNotReversed : true;
  }

  encrypt(message, key) {
    return this.#crypt(message, key, 'encrypt');
  }

  decrypt(message, key) {
    return this.#crypt(message, key, 'decrypt');
  }

  #cryptLetter(firstLetter, secondLetter, action) {
    if (action === 'encrypt') {
      let shift = firstLetter.charCodeAt(0) + secondLetter.charCodeAt(0) - FIRST_LETTER_CODE * 2;
      return String.fromCharCode((shift % TOTAL_LETTERS) + FIRST_LETTER_CODE);
    } else if (action === 'decrypt') {
      let shift = firstLetter.charCodeAt(0) - secondLetter.charCodeAt(0) + FIRST_LETTER_CODE * 2;
      return String.fromCharCode((shift % TOTAL_LETTERS) + FIRST_LETTER_CODE);
    }
  }

  #crypt(message, key, action) {
    if (!message || !key) {
      throw new Error('Incorrect arguments!');
    }

    let resolvedMessage = message.toUpperCase();
    let resolvedKey = this.#resolveKey(message, key);
    
    let keyIndex = 0;
    let result = '';

    for (let i = 0; i < resolvedMessage.length; i++) {
      result += LETTER_REGEX.test(resolvedMessage[i])
        ? this.#cryptLetter(resolvedMessage[i], resolvedKey[keyIndex++], action)
        : resolvedMessage[i]
    }

    return this.isNotReversed ? result : this.#reverse(result);
  }
  
  #resolveKey(message, key) {
    let keyUpperCase = key.toUpperCase();
    let resultKey = keyUpperCase;

    while (resultKey.length < message.length) {
      resultKey += keyUpperCase; 
    }

    return resultKey.substring(0, message.length);
  }
  
  #reverse(str) {
    return str.split('')
      .reverse()
      .join('');
  }
}

module.exports = {
  VigenereCipheringMachine
};
