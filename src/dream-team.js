module.exports = function createDreamTeam(members) {
  const result = (members && members.length) ? members.map(item => {
    if (typeof item === 'string') {
      return item.trim()[0].toUpperCase()
    } else return;
  }) : [];

  return result.length ? result.sort().join('') : false;
};
