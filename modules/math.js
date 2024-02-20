export const PI = Math.PI;
export const sin = Math.sin;
export const cos = Math.cos;
export const acos = Math.acos;
export const random = Math.random;

export function easeInOutSine(x) {
  return -(cos(Math.PI * x) - 1) / 2;
}

export function easeInOutQuad(x) {
  return x < 0.5 ? 2 * x * x : 1 - Math.pow(-2 * x + 2, 2) / 2;
}

export function easeInOutCubic(x) {
  return x < 0.5 ? 4 * x * x * x : 1 - Math.pow(-2 * x + 2, 3) / 2;
}

export function easeInOutQuart(x) {
  return x < 0.5 ? 8 * x * x * x * x : 1 - Math.pow(-2 * x + 2, 4) / 2;
}

export function easeInOutQuint(x) {
  return x < 0.5 ? 16 * x * x * x * x * x : 1 - Math.pow(-2 * x + 2, 5) / 2;
}

export function easeInOutExpo(x) {
  return x === 0 ? 0
    : x === 1 ? 1
      : x < 0.5 ? Math.pow(2, 20 * x - 10) / 2
        : (2 - Math.pow(2, -20 * x + 10)) / 2;
}

export function easeInOutCirc(x) {
  return x < 0.5
    ? (1 - Math.sqrt(1 - Math.pow(2 * x, 2))) / 2
    : (Math.sqrt(1 - Math.pow(-2 * x + 2, 2)) + 1) / 2;
}

export function lerpFactor(x, dt) {
  return 1 - Math.pow(x, dt);
}

export function roundToTwoDecimals(number) {
  return Math.round((number + Number.EPSILON) * 100) / 100;
}

export function calculateFrequency(array) {
  const frequencyMap = {};
  let maxFrequency = 0;
  let mode = [];

  array.forEach(number => {
    frequencyMap[number] = (frequencyMap[number] || 0) + 1;

    if (frequencyMap[number] > maxFrequency) {
      maxFrequency = frequencyMap[number];
      mode = [number];
    } else if (frequencyMap[number] === maxFrequency && mode.indexOf(number) === -1) {
      mode.push(number);
    }
  });

  return { mode, frequencyMap };
}

export function getMedian(sortedArray) {
  const { length } = sortedArray;
  if (length % 2 === 0) return roundToTwoDecimals((sortedArray[length / 2 - 1] + sortedArray[length / 2]) / 2);
  return roundToTwoDecimals(sortedArray[(length - 1) / 2]);
}

export function getStandardDeviation(array, mean) {
  const squaredDifferences = array.map(number => Math.pow(number - mean, 2));
  const averageSquaredDifference = squaredDifferences.reduce((sum, diff) => sum + diff, 0) / array.length;
  return roundToTwoDecimals(Math.sqrt(averageSquaredDifference));
}