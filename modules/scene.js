import * as THREE from 'three';

export default class Scene extends THREE.Scene {
  constructor(objects) {
    super();
    Object.keys(objects).forEach(objectsKey => this.add(objects[objectsKey]));
  }
}