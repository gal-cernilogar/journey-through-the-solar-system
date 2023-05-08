import * as THREE from 'three';
import perlinFragment from '/shaders/perlinShader/fragment.glsl';
import perlinVertex from '/shaders/perlinShader/vertex.glsl';
import sunVertex from '/shaders/sunShader/vertex.glsl';
import sunFragment from '/shaders/sunShader/fragment.glsl';
import coronaFragment from '/shaders/coronaShader/fragment.glsl';
import coronaVertex from '/shaders/coronaShader/vertex.glsl';


export default class Sun extends THREE.Object3D {
  #perlinRenderTarget;
  #perlinCamera;
  #perlinMaterial;
  #perlinGeometry;
  #perlinMesh;
  #offScene;

  #sunLight;
  #coronaMaterial;
  #coronaGeometry;
  #coronaMesh;
  #material;
  #geometry;

  constructor(radius = 1, sphereSegments = 32) {
    super();
    this.radius = radius;
    this.sphereSegments = sphereSegments;
    this.cameraFocusPoint = new THREE.Vector3();
    this.cameraPosition = new THREE.Spherical();

    // Perlin material is generated off scene for better performance
    this.#perlinRenderTarget = new THREE.WebGLCubeRenderTarget(256, {
      format: THREE.RGBAFormat,
      generateMipmaps: true,
      minFilter: THREE.LinearMipmapLinearFilter,
      encoding: THREE.sRGBEncoding
    });
    this.#perlinCamera = new THREE.CubeCamera(this.radius - this.radius / 2, this.radius + this.radius / 2, this.#perlinRenderTarget);
    this.#perlinMaterial = new THREE.ShaderMaterial({
      side: THREE.DoubleSide,
      uniforms: {
        time: { value: 0 },
      },
      vertexShader: perlinVertex,
      fragmentShader: perlinFragment
    });
    this.#perlinGeometry = new THREE.SphereGeometry(this.radius, this.sphereSegments, this.sphereSegments / 2);
    this.#perlinMesh = new THREE.Mesh(this.#perlinGeometry, this.#perlinMaterial);
    this.#offScene = new THREE.Scene().add(this.#perlinMesh);

    // The Sun
    this.#sunLight = new THREE.PointLight(0xffffff, 1);
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
        uPerlin: { value: null },
      },
      vertexShader: sunVertex,
      fragmentShader: sunFragment
    });
    this.#geometry = new THREE.SphereGeometry(this.radius, this.sphereSegments, this.sphereSegments / 2);
    this.mesh = new THREE.Mesh(this.#geometry, this.#material);
    this.add(this.mesh, this.#coronaMesh, this.#sunLight);
  }

  update(camera, renderer, time) {
    this.#coronaMesh.lookAt(camera.position);
    this.#perlinCamera.update(renderer, this.#offScene);
    this.#perlinMaterial.uniforms.time.value = time;
    this.#material.uniforms.time.value = time;
    this.#material.uniforms.uPerlin.value = this.#perlinRenderTarget.texture;
  }
}
