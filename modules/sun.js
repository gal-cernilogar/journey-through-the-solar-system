import * as THREE from 'three';
import perlinFragment from '/shaders/perlinShader/fragment.glsl';
import perlinVertex from '/shaders/perlinShader/vertex.glsl';
import sunVertex from '/shaders/sunShader/vertex.glsl';
import sunFragment from '/shaders/sunShader/fragment.glsl';
import coronaFragment from '/shaders/coronaShader/fragment.glsl';
import coronaVertex from '/shaders/coronaShader/vertex.glsl';


export default class Sun {
  radius = 1;
  sphereSegments = 32;

  // Perlin material is generated off scene for better performance
  #perlinRenderTarget = new THREE.WebGLCubeRenderTarget(256, {
    format: THREE.RGBAFormat,
    generateMipmaps: true,
    minFilter: THREE.LinearMipmapLinearFilter,
    encoding: THREE.sRGBEncoding
  });
  #perlinCamera = new THREE.CubeCamera(this.radius - this.radius / 2, this.radius + this.radius / 2, this.#perlinRenderTarget);
  #perlinMaterial = new THREE.ShaderMaterial({
    side: THREE.DoubleSide,
    uniforms: {
      time: { value: 0 },
    },
    vertexShader: perlinVertex,
    fragmentShader: perlinFragment
  });
  #perlinGeometry = new THREE.SphereBufferGeometry(1, this.sphereSegments, this.sphereSegments / 2);
  #perlinMesh = new THREE.Mesh(this.#perlinGeometry, this.#perlinMaterial);
  #offScene = new THREE.Scene().add(this.#perlinMesh);

  // The Sun
  #coronaMaterial = new THREE.ShaderMaterial({
    side: THREE.BackSide,
    blending: THREE.AdditiveBlending,
    vertexShader: coronaVertex,
    fragmentShader: coronaFragment
  });
  #coronaGeometry = new THREE.SphereBufferGeometry(this.radius * 1.2, this.sphereSegments, this.sphereSegments / 2);
  #coronaMesh = new THREE.Mesh(this.#coronaGeometry, this.#coronaMaterial);
  corona = new THREE.Object3D().add(this.#coronaMesh)

  #material = new THREE.ShaderMaterial({
    side: THREE.DoubleSide,
    uniforms: {
      time: { value: 0 },
      uPerlin: { value: null },
    },
    vertexShader: sunVertex,
    fragmentShader: sunFragment
  });
  #geometry = new THREE.SphereBufferGeometry(this.radius, this.sphereSegments, this.sphereSegments / 2);
  #mesh = new THREE.Mesh(this.#geometry, this.#material);
  sun = new THREE.Object3D().add(this.#mesh);

  update(renderer, time) {
    this.#perlinCamera.update(renderer, this.#offScene);
    this.#perlinMaterial.uniforms.time.value = time;
    this.#material.uniforms.time.value = time;
    this.#material.uniforms.uPerlin.value = this.#perlinRenderTarget.texture;
  }
}
