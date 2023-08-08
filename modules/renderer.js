import * as THREE from 'three';

export default class Renderer extends THREE.WebGLRenderer {
  constructor(domContainer, updateCallback) {
    super({ antialias: false });
    this.setPixelRatio(window.devicePixelRatio);
    this.setSize(domContainer.clientWidth, domContainer.clientHeight);
    this.outputEncoding = THREE.sRGBEncoding;
    this.setAnimationLoop(updateCallback);
    domContainer.appendChild(this.domElement);
  }
}