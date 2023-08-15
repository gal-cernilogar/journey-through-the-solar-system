import * as THREE from 'three';
import Planet from './planet.js';

export default class PlanetWithClouds extends Planet {
  #cloudsTexture;
  #cloudsMaterial;
  #cloudsGeometry;

  constructor({ radius = 1, sphereSegments = 32, sphericalPosition, textureURL, specularMapURL, shininess = null, cloudsTextureURL }) {
    super({ radius, sphereSegments, sphericalPosition, textureURL, specularMapURL, shininess });

    this.#cloudsTexture = new THREE.TextureLoader().load(cloudsTextureURL);
    this.#cloudsMaterial = new THREE.MeshLambertMaterial({
      alphaMap: this.#cloudsTexture,
      transparent: true
    });
    this.#cloudsGeometry = new THREE.SphereGeometry(radius * 1.005, sphereSegments, sphereSegments / 2);
    this.cloudsMesh = new THREE.Mesh(this.#cloudsGeometry, this.#cloudsMaterial);
    this.mesh.add(this.cloudsMesh);
  }
}
