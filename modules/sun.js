import * as THREE from 'three';
import perlinFragment from '/shaders/perlinShader/fragment.glsl';
import perlinVertex from '/shaders/perlinShader/vertex.glsl';
import sunVertex from '/shaders/sunShader/vertex.glsl';
import sunFragment from '/shaders/sunShader/fragment.glsl';
import coronaFragment from '/shaders/coronaShader/fragment.glsl';
import coronaVertex from '/shaders/coronaShader/vertex.glsl';


export default class Sun {
  radius;
  sphereSegments;
  cameraFocus;
  cameraPosition;

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
  corona;
  #material;
  #geometry;
  #mesh;
  sun;

  constructor(radius = 1, sphereSegments = 32) {
    this.radius = radius;
    this.sphereSegments = sphereSegments;
    this.cameraFocus = new THREE.Vector3();
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
    this.#perlinGeometry = new THREE.SphereBufferGeometry(this.radius, this.sphereSegments, this.sphereSegments / 2);
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
    this.#coronaGeometry = new THREE.SphereBufferGeometry(this.radius * 1.2, this.sphereSegments, this.sphereSegments / 2);
    this.#coronaMesh = new THREE.Mesh(this.#coronaGeometry, this.#coronaMaterial);
    this.corona = new THREE.Object3D().add(this.#coronaMesh);

    this.#material = new THREE.ShaderMaterial({
      side: THREE.DoubleSide,
      uniforms: {
        time: { value: 0 },
        uPerlin: { value: null },
      },
      vertexShader: sunVertex,
      fragmentShader: sunFragment
    });
    this.#geometry = new THREE.SphereBufferGeometry(this.radius, this.sphereSegments, this.sphereSegments / 2);
    this.#mesh = new THREE.Mesh(this.#geometry, this.#material);
    this.sun = new THREE.Object3D().add(this.#mesh, this.#sunLight);

  }
  update(renderer, time) {
    this.#perlinCamera.update(renderer, this.#offScene);
    this.#perlinMaterial.uniforms.time.value = time;
    this.#material.uniforms.time.value = time;
    this.#material.uniforms.uPerlin.value = this.#perlinRenderTarget.texture;
  }
}
