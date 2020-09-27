module.exports = class DepthCalculator {
  calculateDepth(arr) {
    if(!Array.isArray(arr)) return 0
    let maxDepth = 0
    arr.forEach(element => {
      maxDepth = Math.max(maxDepth, this.calculateDepth(element))
    })
    return 1 + maxDepth
  }
};