import * as THREE from 'three';

export default class Planet {
  #sphericalPosition;
  #textureURL;
  #texture;
  #material;
  #geometry;
  #shininess;

  constructor(radius = 1, sphereSegments = 32, sphericalPosition, textureURL, shininess = 0) {
    this.radius = radius;
    this.sphereSegments = sphereSegments;
    this.#sphericalPosition = sphericalPosition;
    this.cameraFocus = new THREE.Vector3();
    this.cameraPosition = new THREE.Spherical();
    this.#textureURL = textureURL;
    this.#shininess = shininess;

    this.#texture = new THREE.TextureLoader().load(this.#textureURL);
    this.#material = new THREE.MeshPhongMaterial({ map: this.#texture, shininess: this.#shininess });
    this.#geometry = new THREE.SphereBufferGeometry(this.radius, this.sphereSegments, this.sphereSegments / 2);
    this.mesh = new THREE.Mesh(this.#geometry, this.#material);
    this.planet = new THREE.Object3D();
    this.planet.add(this.mesh);

    this.planet.position.setFromSpherical(this.#sphericalPosition);
  }
}
