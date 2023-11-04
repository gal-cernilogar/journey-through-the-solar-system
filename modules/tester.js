import * as THREE from 'three';

function roundToTwoDecimals(number) {
  return Math.round((number + Number.EPSILON) * 100) / 100;
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

        this.times.forEach((time, index) => this.times[index] = roundToTwoDecimals(time));
        this.times.sort((a, b) => a - b);

        const sum = this.times.reduce((a, b) => a + b, 0);
        const average = roundToTwoDecimals(sum / this.times.length);

        console.log(this.times);
        console.log(`Average: ${average}`);
        console.log(`Min: ${this.times[0]}`);
        console.log(`Max: ${this.times[this.times.length - 1]}`);
      }, duration);
    };
  }
}
