import * as THREE from 'three';

export default class Renderer extends THREE.WebGLRenderer {
  constructor(domContainer, updateCallback) {
    super({ antialias: false });
    this.setPixelRatio(window.devicePixelRatio);
    this.setSize(domContainer.clientWidth, domContainer.clientHeight);
    this.outputColorSpace = THREE.SRGBColorSpace;
    this.setAnimationLoop(updateCallback);
    domContainer.appendChild(this.domElement);
  }
}