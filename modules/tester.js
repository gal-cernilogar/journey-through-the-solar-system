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

      if (window.innerHeight + window.scrollY >= document.body.offsetHeight - 10) this.#endTesting();
    }
  }

  #endTesting() {
    this.isTesting = false;
    console.log('End of testing');
    console.log(this.times);

    this.times.forEach((time, index) => this.times[index] = roundToTwoDecimals(time));
    const sortedTimes = [...this.times].sort((a, b) => a - b);

    const sum = sortedTimes.reduce((a, b) => a + b, 0);
    const mean = roundToTwoDecimals(sum / sortedTimes.length);
    const standardDeviation = getStandardDeviation(sortedTimes, mean);
    const median = getMedian(sortedTimes);
    const { mode, frequencyMap } = calculateFrequency(sortedTimes);

    const data = {
      min: sortedTimes[0],
      max: sortedTimes[sortedTimes.length - 1],
      mean,
      standardDeviation,
      median,
      mode,
      frequencyMap,
      times: this.times
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
