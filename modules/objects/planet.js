import * as THREE from 'three';

export default class Planet extends THREE.Object3D {
  #texture;
  #specularMap;
  #material;
  #geometry;

  constructor({ radius = 1, sphereSegments = 32, sphericalPosition, textureURL, specularMapURL, shininess = 30 }) {
    super();
    this.radius = radius;
    this.sphericalPosition = sphericalPosition;

    this.#texture = new THREE.TextureLoader().load(textureURL);
    this.#specularMap = new THREE.TextureLoader().load(specularMapURL);
    this.#material = new THREE.MeshPhongMaterial({ map: this.#texture, specularMap: this.#specularMap, shininess });
    this.#geometry = new THREE.SphereGeometry(radius, sphereSegments, sphereSegments / 2);
    this.mesh = new THREE.Mesh(this.#geometry, this.#material);
    this.add(this.mesh);

    this.position.setFromSpherical(this.sphericalPosition);
  }

  update(dt, mouse) {
    this.mesh.rotateY(dt * 0.1);
    this.rotation.y = mouse.x / 2;
  }
}
