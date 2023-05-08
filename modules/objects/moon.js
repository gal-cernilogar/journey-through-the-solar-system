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
    this.cameraFocusPoint = new THREE.Vector3();
    this.cameraPosition = new THREE.Spherical();

    this.#texture = new THREE.TextureLoader().load(textureURL);
    this.#specularMap = new THREE.TextureLoader().load(specularMapURL);
    this.#material = new THREE.MeshPhongMaterial({ map: this.#texture, specularMap: this.#specularMap, shininess });
    this.#geometry = new THREE.SphereGeometry(radius, sphereSegments, sphereSegments / 2);
    this.mesh = new THREE.Mesh(this.#geometry, this.#material);
    this.mesh.position.setFromSpherical(this.sphericalPosition);
    this.add(this.mesh);

    this.position.setFromSpherical(this.orbitCenter);
  }

  update(timeDelta) {
    this.rotateY(timeDelta * 0.1 / 27);
  }
}
