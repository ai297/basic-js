module.exports = function getSeason(date) {
  if(!date) return 'Unable to determine the time of year!'
  if(!date instanceof Date || Object.prototype.toString.call(date) !== "[object Date]") throw 'Invalid argument!'

  let month = date.getMonth()
  if(month < 2 || month == 11) return 'winter'
  if(month >= 2 && month <= 4) return 'spring'
  if(month >= 5 && month <= 7) return 'summer'
  return 'fall'
};
