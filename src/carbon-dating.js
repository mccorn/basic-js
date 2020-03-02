const MODERN_ACTIVITY= 15;
const HALF_LIFE_PERIOD= 5730;

module.exports = function dateSample(sampleActivity) {
  const tests = typeof (sampleActivity) !== 'string' ||
    sampleActivity > MODERN_ACTIVITY ||
    sampleActivity <= 0 ||
    !sampleActivity.match(/^\d+(\.\d+(\.?\d+)?)?$/g);

  const result = Math.ceil(Math.log(MODERN_ACTIVITY / parseFloat(sampleActivity)) * HALF_LIFE_PERIOD / 0.693);
  return tests ? false : result;
};
