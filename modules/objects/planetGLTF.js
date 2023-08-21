import * as THREE from 'three';
import loadGLTF from '../loadGLTF';

export default class PlanetGLTF extends THREE.Object3D {

  constructor({ modelURL, radius = 1, sphericalPosition }) {
    super();
    this.radius = radius;
    this.sphericalPosition = sphericalPosition;

    loadGLTF(modelURL, gltf => {
      const planet = gltf.scene;
      console.log(planet.children);

      planet.children[0].scale.setScalar(this.radius);

      this.mesh = planet.children[0];
      this.add(planet);
    });

    this.position.setFromSpherical(this.sphericalPosition);
  }

  update(dt, mouse) {
    if (this.mesh) this.mesh.rotateY(dt * 0.1);
    this.rotation.y = mouse.x / 2;
  }
}
