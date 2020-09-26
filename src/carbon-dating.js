const CustomError = require("../extensions/custom-error")

const MODERN_ACTIVITY = 15
const HALF_LIFE_PERIOD = 5730
const k = 0.693 / HALF_LIFE_PERIOD

module.exports = function dateSample(final_activity) {
  if(typeof(final_activity) != 'string') return false
  final_activity = parseFloat(final_activity)
  if(isNaN(final_activity) || final_activity <= 0 || final_activity > 15) return false

  const N0dN = MODERN_ACTIVITY / final_activity

  return Math.ceil( Math.log(N0dN) / k )
};
