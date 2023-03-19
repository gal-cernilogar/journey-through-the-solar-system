import * as THREE from 'three';

export default class Planet {
  #texture;
  #specularMap;
  #material;
  #geometry;

  constructor({ radius = 1, sphereSegments = 32, sphericalPosition, textureURL, specularMapURL, shininess = 30 }) {
    this.radius = radius;
    this.sphericalPosition = sphericalPosition;
    this.cameraFocus = new THREE.Vector3();
    this.cameraPosition = new THREE.Spherical();

    this.#texture = new THREE.TextureLoader().load(textureURL);
    this.#specularMap = new THREE.TextureLoader().load(specularMapURL);
    this.#material = new THREE.MeshPhongMaterial({ map: this.#texture, specularMap: this.#specularMap, shininess });
    this.#geometry = new THREE.SphereBufferGeometry(radius, sphereSegments, sphereSegments / 2);
    this.mesh = new THREE.Mesh(this.#geometry, this.#material);
    this.object = new THREE.Object3D();
    this.object.add(this.mesh);

    this.object.position.setFromSpherical(this.sphericalPosition);
  }
}
