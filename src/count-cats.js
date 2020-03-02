module.exports = function countCats(arr) {
  let result = 0;

  arr.forEach((layer) => layer.forEach(item => result += item === '^^' ? 1 : 0));
  return result;
};
