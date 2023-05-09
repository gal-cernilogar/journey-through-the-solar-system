import * as THREE from 'three';

export default class Moon extends THREE.Object3D {
  #texture;
  #specularMap;
  #material;
  #geometry;

  constructor({ radius = 1, sphereSegments = 32, orbitCenter, sphericalPosition, textureURL, specularMapURL, shininess = 30 }) {
    super();
    this.radius = radius;
    this.orbitCenter = orbitCenter;
    this.sphericalPosition = sphericalPosition;

    this.#texture = new THREE.TextureLoader().load(textureURL);
    this.#specularMap = new THREE.TextureLoader().load(specularMapURL);
    this.#material = new THREE.MeshPhongMaterial({ map: this.#texture, specularMap: this.#specularMap, shininess });
    this.#geometry = new THREE.SphereGeometry(radius, sphereSegments, sphereSegments / 2);
    this.mesh = new THREE.Mesh(this.#geometry, this.#material);
    this.mesh.position.setFromSpherical(this.sphericalPosition);
    this.add(this.mesh);

    this.position.setFromSpherical(this.orbitCenter);
  }

  update(dt) {
    this.rotateY(dt * 0.1 / 27);
  }
}
