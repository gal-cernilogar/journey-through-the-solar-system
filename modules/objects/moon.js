import * as THREE from 'three';

export default class Moon {
  #texture;
  #specularMap;
  #material;
  #geometry;

  constructor({ radius = 1, sphereSegments = 32, orbitCenter, sphericalPosition, textureURL, specularMapURL, shininess = 30 }) {
    this.radius = radius;
    this.orbitCenter = orbitCenter;
    this.sphericalPosition = sphericalPosition;
    this.cameraFocusPoint = new THREE.Vector3();
    this.cameraPosition = new THREE.Spherical();

    this.#texture = new THREE.TextureLoader().load(textureURL);
    this.#specularMap = new THREE.TextureLoader().load(specularMapURL);
    this.#material = new THREE.MeshPhongMaterial({ map: this.#texture, specularMap: this.#specularMap, shininess });
    this.#geometry = new THREE.SphereBufferGeometry(radius, sphereSegments, sphereSegments / 2);
    this.mesh = new THREE.Mesh(this.#geometry, this.#material);
    this.mesh.position.setFromSpherical(this.sphericalPosition);
    this.object = new THREE.Object3D();
    this.object.add(this.mesh);

    this.object.position.setFromSpherical(this.orbitCenter);
  }
}
