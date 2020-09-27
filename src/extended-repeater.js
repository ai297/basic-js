module.exports = function repeater(str, options) {
  if(options.repeatTimes === undefined) options.repeatTimes = 1
  if(options.additionRepeatTimes === undefined) options.additionRepeatTimes = 1
  if(options.separator === undefined) options.separator = '+'
  if(options.additionSeparator === undefined) options.additionSeparator = '|'
  if(options.addition === undefined) options.addition = ''

  let addition = Array(options.additionRepeatTimes).fill(String(options.addition)).join(options.additionSeparator)
  
  return Array(options.repeatTimes).fill(str+addition).join(options.separator)
};
  