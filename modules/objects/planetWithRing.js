import * as THREE from 'three';
import Planet from './planet.js';

export default class PlanetWithRing extends Planet {
  #ringTexture;
  #ringMaterial;
  #ringGeometry;

  constructor({ radius = 1, sphereSegments = 32, sphericalPosition, textureURL, specularMapURL, roughness = 1.0, ringTextureURL }) {
    super({ radius, sphereSegments, sphericalPosition, textureURL, specularMapURL, roughness });

    this.#ringTexture = new THREE.TextureLoader().load(ringTextureURL);
    this.#ringMaterial = new THREE.MeshPhysicalMaterial({
      map: this.#ringTexture,
      emissiveMap: this.#ringTexture,
      emissive: 0xffffff,
      color: 0xffffff,
      side: THREE.DoubleSide,
      transparent: true,
      specularColor: 0x000000,
      reflectivity: 0,
      depthWrite: false
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