const chainMaker = {
  _chain: [],

  getLength() {
    return this._chain.length
  },
  addLink(value = '') {
    this._chain.push(String(value))
    return this
  },
  removeLink(position) {
    if(!this._chain.hasOwnProperty(position - 1)) {
      this._chain = []
      throw 'invalid position'
    }
    this._chain.splice(position - 1, 1)
    return this
  },
  reverseChain() {
    this._chain.reverse()
    return this
  },
  finishChain() {
    let result = '( ' + this._chain.join(' )~~( ') + ' )'
    this._chain = []
    return result
  }
};

module.exports = chainMaker;
