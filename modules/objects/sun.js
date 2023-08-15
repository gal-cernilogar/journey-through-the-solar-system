import * as THREE from 'three';
import noiseFragment from '/shaders/noiseShader/fragment.glsl';
import noiseVertex from '/shaders/noiseShader/vertex.glsl';
import sunVertex from '/shaders/sunShader/vertex.glsl';
import sunFragment from '/shaders/sunShader/fragment.glsl';
import coronaFragment from '/shaders/coronaShader/fragment.glsl';
import coronaVertex from '/shaders/coronaShader/vertex.glsl';


export default class Sun extends THREE.Object3D {
  #noiseRenderTarget;
  #noiseCamera;
  #noiseMaterial;
  #noiseGeometry;
  #noiseMesh;
  #offScene;

  #light;
  #coronaMaterial;
  #coronaGeometry;
  #coronaMesh;
  #material;
  #geometry;

  constructor(radius = 1, sphereSegments = 32) {
    super();
    this.radius = radius;
    this.sphereSegments = sphereSegments;

    // Noise material is generated off scene for better performance
    this.#noiseRenderTarget = new THREE.WebGLCubeRenderTarget(sphereSegments * 8, {
      format: THREE.RGBAFormat,
      generateMipmaps: true,
      minFilter: THREE.LinearMipmapLinearFilter,
      encoding: THREE.SRGBColorSpace
    });
    this.#noiseCamera = new THREE.CubeCamera(this.radius - this.radius / 2, this.radius + this.radius / 2, this.#noiseRenderTarget);
    this.#noiseMaterial = new THREE.ShaderMaterial({
      side: THREE.DoubleSide,
      uniforms: {
        time: { value: 0 },
      },
      vertexShader: noiseVertex,
      fragmentShader: noiseFragment
    });
    this.#noiseGeometry = new THREE.SphereGeometry(this.radius, this.sphereSegments, this.sphereSegments / 2);
    this.#noiseMesh = new THREE.Mesh(this.#noiseGeometry, this.#noiseMaterial);
    this.#offScene = new THREE.Scene().add(this.#noiseMesh);

    // The Sun
    this.#light = new THREE.PointLight(0xffffff, 1);
    this.#coronaMaterial = new THREE.ShaderMaterial({
      side: THREE.BackSide,
      blending: THREE.AdditiveBlending,
      vertexShader: coronaVertex,
      fragmentShader: coronaFragment
    });
    this.#coronaGeometry = new THREE.SphereGeometry(this.radius * 1.2, this.sphereSegments, this.sphereSegments / 2);
    this.#coronaMesh = new THREE.Mesh(this.#coronaGeometry, this.#coronaMaterial);

    this.#material = new THREE.ShaderMaterial({
      side: THREE.DoubleSide,
      uniforms: {
        time: { value: 0 },
        uNoise: { value: null },
      },
      vertexShader: sunVertex,
      fragmentShader: sunFragment
    });
    this.#geometry = new THREE.SphereGeometry(this.radius, this.sphereSegments, this.sphereSegments / 2);
    this.mesh = new THREE.Mesh(this.#geometry, this.#material);
    this.add(this.mesh, this.#coronaMesh, this.#light);
  }

  update(camera, renderer, time) {
    this.#coronaMesh.lookAt(camera.position);
    this.#noiseMaterial.uniforms.time.value = time;
    this.#noiseCamera.update(renderer, this.#offScene);
    this.#material.uniforms.time.value = time;
    this.#material.uniforms.uNoise.value = this.#noiseRenderTarget.texture;
  }
}
