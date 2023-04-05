import * as THREE from 'three';
import Planet from './planet.js';

export default class PlanetWithClouds extends Planet {
  #cloudsTexture;
  #cloudsMaterial;
  #cloudsGeometry;

  constructor({ radius = 1, sphereSegments = 32, sphericalPosition, textureURL, specularMapURL, shininess = 30, cloudsTextureURL, cloudsOpacity = 1 }) {
    super({ radius, sphereSegments, sphericalPosition, textureURL, specularMapURL, shininess });

    this.#cloudsTexture = new THREE.TextureLoader().load(cloudsTextureURL);
    this.#cloudsMaterial = new THREE.MeshPhongMaterial({
      map: this.#cloudsTexture,
      opacity: cloudsOpacity,
      transparent: true,
      blending: THREE.AdditiveBlending,
      shininess: null
    });
    this.#cloudsGeometry = new THREE.SphereBufferGeometry(radius * 1.01, sphereSegments, sphereSegments / 2);
    this.cloudsMesh = new THREE.Mesh(this.#cloudsGeometry, this.#cloudsMaterial);
    this.mesh.add(this.cloudsMesh);
  }
}
