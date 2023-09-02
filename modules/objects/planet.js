import * as THREE from 'three';

export default class Planet extends THREE.Object3D {
  #texture;
  #specularMap;
  #material;
  #geometry;

  constructor({
    radius = 1,
    sphereSegments = 32,
    sphericalPosition,
    textureURL,
    specularMapURL,
    roughness = 1.0,
    reflectivity = 0,
    specularColor = 0x000000
  }) {
    super();
    this.radius = radius;
    this.sphericalPosition = sphericalPosition;

    this.#texture = new THREE.TextureLoader().load(textureURL);
    if (specularMapURL) this.#specularMap = new THREE.TextureLoader().load(specularMapURL);
    else this.#specularMap = null;
    this.#material = new THREE.MeshPhysicalMaterial({
      map: this.#texture,
      specularColorMap: this.#specularMap,
      specularColor,
      roughness,
      reflectivity,
      side: THREE.DoubleSide
    });
    this.#geometry = new THREE.SphereGeometry(radius, sphereSegments, sphereSegments / 2);
    this.mesh = new THREE.Mesh(this.#geometry, this.#material);
    this.add(this.mesh);
    console.log(textureURL.split('2k_')[1], this.mesh);

    this.position.setFromSpherical(this.sphericalPosition);
  }

  update(dt, mouse) {
    this.mesh.rotateY(dt * 0.1);
    this.rotation.y = mouse.x / 2;
  }
}
