module.exports = function transform(arr) {
  if (typeof arr !== 'object' || arr.length === undefined) return new Error();
  const DEL_NEXT = '--discard-next';
  const DEL_PREV = '--discard-prev';
  const DBL_NEXT = '--double-next';
  const DBL_PREV = '--double-prev';

  const isCommand = item => item === DEL_NEXT || item === DEL_PREV || item === DBL_NEXT || item === DBL_PREV;

  let result = [];

  arr.forEach((item, idx) => {
    if (!isCommand(item)) {
      result.push(item);
    } else {

    }
  });

  return result;
};
