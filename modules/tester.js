import * as THREE from 'three';
import { roundToTwoDecimals, calculateFrequency, getMedian, getStandardDeviation } from './math';

export default class Tester {

  isTesting = false;
  times = [];
  #mode = '';

  constructor(mode, duration) {
    THREE.DefaultLoadingManager.onLoad = () => {
      this.isTesting = true;
      this.#mode = mode;
      console.log('Start of testing');

      if (this.#mode === 'passive') {
        setTimeout(this.#endTesting.bind(this), duration);
      }
    };
  }

  update(time) {
    this.times.push(time);

    if (this.#mode === 'active') {
      window.scrollBy({
        top: 5,
        behavior: 'instant'
      });

      if (window.innerHeight + window.scrollY >= document.body.offsetHeight) this.#endTesting();
    }
  }

  #endTesting() {
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

    const data = {
      min: this.times[0],
      max: this.times[this.times.length - 1],
      mean,
      standardDeviation,
      median,
      mode,
      frequencyMap
    };

    console.log(`Min: ${data.min}`);
    console.log(`Max: ${data.max}`);
    console.log(`Mean: ${data.mean}`);
    console.log(`Standard deviation: ${data.standardDeviation}`);
    console.log(`Median: ${data.median}`);
    console.log(`Mode: ${data.mode.toString()}`);
    console.log('Frequency map:');
    console.table(data.frequencyMap);

    this.#download(data);
  }

  #download(data) {
    const a = document.createElement("a");
    const content = JSON.stringify(data, null, 2);
    const file = new Blob([content], { type: 'text/json' });
    a.href = URL.createObjectURL(file);
    a.download = `${this.#mode}-test-data.json`;
    a.click();
  }

}
