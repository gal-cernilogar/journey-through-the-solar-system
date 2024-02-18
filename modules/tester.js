import * as THREE from 'three';

function roundToTwoDecimals(number) {
  return Math.round((number + Number.EPSILON) * 100) / 100;
}

function calculateFrequency(array) {
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

function getMedian(array) {
  const { length } = array;
  if (length % 2 === 0) return roundToTwoDecimals((array[length / 2 - 1] + array[length / 2]) / 2);
  return roundToTwoDecimals(array[(length - 1) / 2]);
}

function getStandardDeviation(array, mean) {
  const squaredDifferences = array.map(number => Math.pow(number - mean, 2));
  const averageSquaredDifference = squaredDifferences.reduce((sum, diff) => sum + diff, 0) / array.length;
  return roundToTwoDecimals(Math.sqrt(averageSquaredDifference));
}

export default class Tester {
  isTesting = false;
  times = [];

  constructor(duration) {
    THREE.DefaultLoadingManager.onLoad = () => {
      this.isTesting = true;
      console.log('Start of testing');

      setTimeout(() => {
        this.isTesting = false;
        console.log('End of testing');
        console.log(this.times);

        this.times.forEach((time, index) => this.times[index] = roundToTwoDecimals(time));
        this.times.sort((a, b) => a - b);

        const sum = this.times.reduce((a, b) => a + b, 0);
        const mean = roundToTwoDecimals(sum / this.times.length);
        const standardDeviation = getStandardDeviation(this.times, mean);
        const median = getMedian(this.times);
        const { mode, frequencyMap } = calculateFrequency(this.times);

        console.log(`Min: ${this.times[0]}`);
        console.log(`Max: ${this.times[this.times.length - 1]}`);
        console.log(`Mean: ${mean}`);
        console.log(`Standard deviation: ${standardDeviation}`);
        console.log(`Median: ${median}`);
        console.log(`Mode: ${mode.toString()}`);
        console.log('Frequency map:');
        console.table(frequencyMap);
      }, duration);
    };
  }
}
