module.exports = function countCats(backyard) {
  if(!Array.isArray(backyard) || backyard.length < 1) return 0

  let result = 0

  for(const backyard_line of backyard){
    if(Array.isArray(backyard_line)) backyard_line.forEach(item => result += item == '^^' ? 1 : 0)
  }

  return result
};
