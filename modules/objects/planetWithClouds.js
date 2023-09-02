import * as THREE from 'three';
import Planet from './planet.js';

export default class PlanetWithClouds extends Planet {
  #cloudsTexture;
  #cloudsMaterial;
  #cloudsGeometry;

  constructor({
    radius = 1,
    sphereSegments = 32,
    sphericalPosition,
    textureURL,
    specularMapURL,
    roughness = 0.5,
    reflectivity = 0.5,
    specularColor = 0xffffff,
    cloudsTextureURL
  }) {
    super({ radius, sphereSegments, sphericalPosition, textureURL, specularMapURL, roughness, reflectivity, specularColor });

    this.#cloudsTexture = new THREE.TextureLoader().load(cloudsTextureURL);
    this.#cloudsMaterial = new THREE.MeshPhysicalMaterial({
      alphaMap: this.#cloudsTexture,
      transparent: true,
      specularColor: 0x000000,
      reflectivity: 0,
      side: THREE.DoubleSide,
      depthWrite: false
    });
    this.#cloudsGeometry = new THREE.SphereGeometry(radius * 1.005, sphereSegments, sphereSegments / 2);
    this.cloudsMesh = new THREE.Mesh(this.#cloudsGeometry, this.#cloudsMaterial);
    this.mesh.add(this.cloudsMesh);
  }
}
