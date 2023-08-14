import * as THREE from 'three';
import Planet from './planet.js';

export default class PlanetWithRing extends Planet {
  #ringTexture;
  #ringMaterial;
  #ringGeometry;

  constructor({ radius = 1, sphereSegments = 32, sphericalPosition, textureURL, specularMapURL, shininess = 30, ringTextureURL }) {
    super({ radius, sphereSegments, sphericalPosition, textureURL, specularMapURL, shininess });

    this.#ringTexture = new THREE.TextureLoader().load(ringTextureURL);
    this.#ringMaterial = new THREE.MeshBasicMaterial({
      map: this.#ringTexture,
      color: 0xffffff,
      side: THREE.DoubleSide,
      transparent: true
    });
    this.#ringGeometry = new THREE.RingGeometry(radius * 1.3062, radius * 2.2859, sphereSegments);

    const pos = this.#ringGeometry.attributes.position;
    const v3 = new THREE.Vector3();
    for (let i = 0; i < pos.count; i++) {
      v3.fromBufferAttribute(pos, i);
      this.#ringGeometry.attributes.uv.setXY(i, v3.length() < radius * 1.79605 ? 0 : 1, 1);
    }

    this.ringMesh = new THREE.Mesh(this.#ringGeometry, this.#ringMaterial);
    this.mesh.add(this.ringMesh);
  }
}