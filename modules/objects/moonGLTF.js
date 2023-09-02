import * as THREE from 'three';
import loadGLTF from '../loadGLTF';

export default class MoonGLTF extends THREE.Object3D {

  constructor({ modelURL, radius = 1, orbitCenter, sphericalPosition }) {
    super();
    this.radius = radius;
    this.orbitCenter = orbitCenter;
    this.sphericalPosition = sphericalPosition;

    loadGLTF(modelURL, gltf => {
      const planet = gltf.scene;
      console.log(planet.children[0].name, planet.children);

      planet.children[0].scale.setScalar(this.radius);

      this.mesh = planet;
      this.add(this.mesh);
      this.mesh.position.setFromSpherical(this.sphericalPosition);
    });

    this.position.setFromSpherical(this.orbitCenter);
  }

  update(dt) {
    if (this.mesh) this.mesh.rotateY(dt * 0.1 / 27);
  }
}
