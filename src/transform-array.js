const CONTROL_DISCARD_NEXT = '--discard-next'
const CONTROL_DISCARD_PREV = '--discard-prev'
const CONTROL_DOUBLE_NEXT = '--double-next'
const CONTROL_DOUBLE_PREV = '--double-prev'

module.exports = function transform(arr) {

  if(!Array.isArray(arr)) throw 'argument is not array'

  let result = []
  let prevElement = undefined

  arr.forEach(val => {
    switch(val) {
      case CONTROL_DISCARD_PREV:
        if(prevElement !== undefined) result.pop()
        prevElement = undefined
        return
      case CONTROL_DOUBLE_PREV:
        if(prevElement !== undefined && prevElement != CONTROL_DISCARD_NEXT && prevElement != CONTROL_DOUBLE_NEXT) result.push(prevElement)
        prevElement = undefined
        return
      case CONTROL_DOUBLE_NEXT:
      case CONTROL_DISCARD_NEXT:
        prevElement = val
        return
      default:
        result.push(val)
        break
    }
    if(prevElement == CONTROL_DISCARD_NEXT) {
      result.pop()
      prevElement = undefined
      return
    } 
    if(prevElement == CONTROL_DOUBLE_NEXT) result.push(val)
    prevElement = val
  })

  return result
};
