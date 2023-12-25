const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create name of dream team based on the names of its members
 *  
 * @param {Array} members names of the members 
 * @return {String | Boolean} name of the team or false
 * in case of incorrect members
 *
 * @example
 * 
 * createDreamTeam(['Matt', 'Ann', 'Dmitry', 'Max']) => 'ADMM'
 * createDreamTeam(['Olivia', 1111, 'Lily', 'Oscar', true, null]) => 'LOO'
 *
 */
function createDreamTeam(members) {
  if (members !== null && members !== undefined) {
    let team = []
    for (let i = 0; i < members.length; i++) {
      if (typeof members[i] === 'string') {
        team.push(members[i].trimStart()[0])
      } else {
        continue
      }
    }
    const result = team.sort((a,b) => {
      if (a.toLowerCase() < b.toLowerCase()) {
        return -1;
      }
      if (a.toLowerCase() > b.toLowerCase()) {
        return 1;
      }
      return 0;
    })
    return result.join('').toUpperCase() || false
  } else {
    return false
  }
}


module.exports = {
  createDreamTeam
};
