import * as THREE from 'three';

export default class Moon extends THREE.Object3D {
  #texture;
  #specularMap;
  #material;
  #geometry;

  constructor({ radius = 1, sphereSegments = 32, orbitCenter, sphericalPosition, textureURL, specularMapURL }) {
    super();
    this.radius = radius;
    this.orbitCenter = orbitCenter;
    this.sphericalPosition = sphericalPosition;

    this.#texture = new THREE.TextureLoader().load(textureURL);
    if (specularMapURL) this.#specularMap = new THREE.TextureLoader().load(specularMapURL);
    else this.#specularMap = null;
    this.#material = new THREE.MeshPhysicalMaterial({
      map: this.#texture,
      specularColorMap: this.#specularMap,
      reflectivity: 0,
      side: THREE.DoubleSide
    });
    this.#geometry = new THREE.SphereGeometry(radius, sphereSegments, sphereSegments / 2);
    this.mesh = new THREE.Mesh(this.#geometry, this.#material);
    this.mesh.position.setFromSpherical(this.sphericalPosition);
    this.add(this.mesh);
    console.log(textureURL.split('2k_')[1], this.mesh);

    this.position.setFromSpherical(this.orbitCenter);
  }

  update(dt) {
    this.rotateY(dt * 0.1 / 27);
  }
}
