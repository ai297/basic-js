const A_CODE = 65
const Z_CODE = 90

class VigenereCipheringMachine {
  constructor(isPlain = true) {
    this._isPlain = isPlain
  }

  _getFullKey(key, length) {
    return key.toUpperCase().repeat(Math.ceil(length / key.length)).substring(0,length)
  }

  encrypt(message, key) {
    if(typeof(message) == 'undefined' || typeof(key) == 'undefined') throw 'invalid arguments'
    
    key = this._getFullKey(key, message.length)
    message = message.toUpperCase()

    const encryptedChars = []
    let j = 0

    for(let i = 0; i < message.length; i++) {
      let charCode = message.charCodeAt(i)
      if(charCode >= A_CODE && charCode <= Z_CODE) {
        encryptedChars.push( A_CODE + (charCode + key.charCodeAt(j)) % 26)
        j++
      }
      else encryptedChars.push(charCode)
    }

    if(this._isPlain) return String.fromCharCode(...encryptedChars)
    else return String.fromCharCode(...encryptedChars.reverse())
  }
   
  decrypt(message, key) {
    if(typeof(message) == 'undefined' || typeof(key) == 'undefined') throw 'invalid arguments'
    
    key = this._getFullKey(key, message.length)
    message = message.toUpperCase()

    const decryptedChars = []
    let j = 0

    for(let i = 0; i < message.length; i++) {
      let charCode = message.charCodeAt(i)
      if(charCode >= A_CODE && charCode <= Z_CODE) {
        decryptedChars.push( A_CODE + (charCode - key.charCodeAt(j) + 26) % 26)
        j++
      }
      else decryptedChars.push(charCode)
    }

    if(this._isPlain) return String.fromCharCode(...decryptedChars)
    else return String.fromCharCode(...decryptedChars.reverse())
  }
}

module.exports = VigenereCipheringMachine;
