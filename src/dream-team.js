module.exports = function createDreamTeam(members) {
  if(!Array.isArray(members) || members.length < 1) return false
  return members.filter(item => typeof(item) == 'string').map(item => item.trim().toUpperCase()[0]).sort().join('')
};
