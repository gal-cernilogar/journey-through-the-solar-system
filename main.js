import * as THREE from 'three';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js';

import perlinFragment from '/shaders/perlinShader/fragment.glsl';
import perlinVertex from '/shaders/perlinShader/vertex.glsl';
import sunVertex from '/shaders/sunShader/vertex.glsl';
import sunFragment from '/shaders/sunShader/fragment.glsl';
import coronaFragment from '/shaders/coronaShader/fragment.glsl';
import coronaVertex from '/shaders/coronaShader/vertex.glsl';

// import starsTextureURL from '/images/textures/2k_stars.jpg';
import mercuryTextureURL from '/images/textures/2k_mercury-optimized.jpg';
import venusTextureURL from '/images/textures/2k_venus_surface-optimized.jpg';
import earthTextureURL from '/images/textures/2k_earth_daymap-optimized.jpg';
import earthSpecularMapURL from '/images/textures/2k_earth_specular_map-optimized.jpg';
import cloudsTextureURL from '/images/textures/2k_earth_clouds-optimized.jpg';
import moonTextureURL from '/images/textures/2k_moon-optimized.jpg';
import marsTextureURL from '/images/textures/2k_mars-optimized.jpg';
import jupiterTextureURL from '/images/textures/2k_jupiter-optimized.jpg';
import saturnTextureURL from '/images/textures/2k_saturn-optimized.jpg';
import uranusTextureURL from '/images/textures/2k_uranus-optimized.jpg';
import neptuneTextureURL from '/images/textures/2k_neptune-optimized.jpg';



// INIT //

const welcomeSection = document.querySelector('#welcome');
const mercurySection = document.querySelector('#mercury');
const venusSection = document.querySelector('#venus');
const earthSection = document.querySelector('#earth');
const marsSection = document.querySelector('#mars');
const jupiterSection = document.querySelector('#jupiter');
const toMercurySection = document.querySelector('#toMercurySection');
const toVenusSection = document.querySelector('#toVenusSection');
const toEarthSection = document.querySelector('#toEarthSection');
const toMarsSection = document.querySelector('#toMarsSection');
const toJupiterSection = document.querySelector('#toJupiterSection');

const mobile = window.matchMedia("(max-width: 1023px)"); // Mobile media query

const PI = Math.PI;
const sin = Math.sin;
const cos = Math.cos;
const acos = Math.acos;
const random = Math.random;

function easeInOutSine(x) {
  return -(cos(PI * x) - 1) / 2;
}

function easeInOutQuad(x) {
  return x < 0.5 ? 2 * x * x : 1 - Math.pow(-2 * x + 2, 2) / 2;
}

function easeInOutCubic(x) {
  return x < 0.5 ? 4 * x * x * x : 1 - Math.pow(-2 * x + 2, 3) / 2;
}

function easeInOutQuart(x) {
  return x < 0.5 ? 8 * x * x * x * x : 1 - Math.pow(-2 * x + 2, 4) / 2;
}

function easeInOutQuint(x) {
  return x < 0.5 ? 16 * x * x * x * x * x : 1 - Math.pow(-2 * x + 2, 5) / 2;
}

function easeInOutExpo(x) {
  return x === 0 ? 0
    : x === 1 ? 1
      : x < 0.5 ? Math.pow(2, 20 * x - 10) / 2
        : (2 - Math.pow(2, -20 * x + 10)) / 2;
}

function easeInOutCirc(x) {
  return x < 0.5
    ? (1 - Math.sqrt(1 - Math.pow(2 * x, 2))) / 2
    : (Math.sqrt(1 - Math.pow(-2 * x + 2, 2)) + 1) / 2;
}

const sunRadius = 1;
const mercuryRadius = 0.0035 * 10;
const venusRadius = 0.0087 * 10;
const earthRadius = 0.0091 * 10;
const moonRadius = 0.0025 * 10;
const marsRadius = 0.0049 * 10;
const jupiterRadius = 0.1004 * 10;
const saturnRadius = 0.0836 * 10;
const uranusRadius = 0.0364 * 10;
const neptuneRadius = 0.0354 * 10;

const mercurySunDist = 49 / 10;
const venusSunDist = 80 / 10;
const earthSunDist = 110 / 10;
const moonEarthDist = 0.5637;
const marsSunDist = 150 / 10;
const jupiterSunDist = 535 / 10;
const saturnSunDist = 1060 / 10;
const uranusSunDist = 2115 / 10;
const neptuneSunDist = 3215 / 10;

const clock = new THREE.Clock();

let sphereSegmentsHor;
let sphereSegmentsVer;
if (mobile.matches) {
  sphereSegmentsHor = 32;
  sphereSegmentsVer = sphereSegmentsHor / 2;
} else {
  sphereSegmentsHor = 64;
  sphereSegmentsVer = sphereSegmentsHor / 2;
}



// Off scene

const cubeRenderTarget = new THREE.WebGLCubeRenderTarget(256, {
  format: THREE.RGBAFormat,
  generateMipmaps: true,
  minFilter: THREE.LinearMipmapLinearFilter,
  encoding: THREE.sRGBEncoding
});

const cubeCamera = new THREE.CubeCamera(0.5, 1.5, cubeRenderTarget);

const offScene = new THREE.Scene();

const perlinMaterial = new THREE.ShaderMaterial({
  side: THREE.DoubleSide,
  uniforms: {
    time: { value: 0 },
  },
  vertexShader: perlinVertex,
  fragmentShader: perlinFragment
});
const perlinGeometry = new THREE.SphereBufferGeometry(1, sphereSegmentsHor, sphereSegmentsVer);
const perlinMesh = new THREE.Mesh(perlinGeometry, perlinMaterial);
offScene.add(perlinMesh);



// On scene

const cameraPivotPoint = new THREE.Vector3(); // CPP

const camera = new THREE.PerspectiveCamera(45, window.innerWidth / window.innerHeight, 0.001, 5000);
const cameraOrbitPosition = new THREE.Vector3(); // COP

const scene = new THREE.Scene();

// Light
const sunLight = new THREE.PointLight(0xffffff, 1);
scene.add(sunLight);

// Stars
/* const starsTexture = new THREE.TextureLoader().load(starsTextureURL);
const starsMaterial = new THREE.MeshBasicMaterial({
  map: starsTexture,
  side: THREE.BackSide
});
const starsGeometry = new THREE.BoxBufferGeometry(1000, 500, 1000);
const starsMesh = new THREE.Mesh(starsGeometry, starsMaterial);
scene.add(starsMesh); */

const starsMaterial = new THREE.PointsMaterial({ color: 0xffffff });
const starsGeometry = new THREE.BufferGeometry();

createStars();
function createStars() {
  const starSpherical = new THREE.Spherical();
  const starCartesian = new THREE.Vector3();
  const starPositions = [];

  for (let i = 0; i < 10000; i++) {
    starSpherical.set(
      random() * 500 + 500,
      acos((random() * 2) - 1),
      random() * 2 * PI
    )
    starCartesian.setFromSpherical(starSpherical);
    starPositions.push(...starCartesian);
  }
  starsGeometry.setAttribute('position', new THREE.Float32BufferAttribute(starPositions, 3));
}

const stars = new THREE.Points(starsGeometry, starsMaterial);
scene.add(stars);

// The Sun
const coronaMaterial = new THREE.ShaderMaterial({
  side: THREE.BackSide,
  blending: THREE.AdditiveBlending,
  vertexShader: coronaVertex,
  fragmentShader: coronaFragment
});
const coronaGeometry = new THREE.SphereBufferGeometry(sunRadius * 1.2, sphereSegmentsHor, sphereSegmentsVer);
const coronaMesh = new THREE.Mesh(coronaGeometry, coronaMaterial);
scene.add(coronaMesh);

const sunMaterial = new THREE.ShaderMaterial({
  side: THREE.DoubleSide,
  uniforms: {
    time: { value: 0 },
    uPerlin: { value: null },
  },
  vertexShader: sunVertex,
  fragmentShader: sunFragment
});
const sunGeometry = new THREE.SphereBufferGeometry(sunRadius, sphereSegmentsHor, sphereSegmentsVer);
const sunMesh = new THREE.Mesh(sunGeometry, sunMaterial);
scene.add(sunMesh);

const sunCPP = new THREE.Vector3();
const sunCOPSpherical = new THREE.Spherical();

// Mercury
const mercuryTexture = new THREE.TextureLoader().load(mercuryTextureURL);
const mercuryMaterial = new THREE.MeshPhongMaterial({ map: mercuryTexture, shininess: 0 });
const mercuryGeometry = new THREE.SphereBufferGeometry(mercuryRadius, sphereSegmentsHor, sphereSegmentsVer);
const mercuryMesh = new THREE.Mesh(mercuryGeometry, mercuryMaterial);
const mercurySpherical = new THREE.Spherical(mercurySunDist, PI / 2, - PI / 300);
mercuryMesh.position.setFromSpherical(mercurySpherical);
scene.add(mercuryMesh);

const mercuryCPP = new THREE.Vector3();
const mercuryCPPOffset = new THREE.Vector3().setFromSphericalCoords(mercuryRadius, PI / 2, mercurySpherical.theta + PI / 2);
const mercuryCOPSpherical = new THREE.Spherical();

// Venus
const venusTexture = new THREE.TextureLoader().load(venusTextureURL);
const venusMaterial = new THREE.MeshPhongMaterial({ map: venusTexture, shininess: 0 });
const venusGeometry = new THREE.SphereBufferGeometry(venusRadius, sphereSegmentsHor, sphereSegmentsVer);
const venusMesh = new THREE.Mesh(venusGeometry, venusMaterial);
const venusSpherical = new THREE.Spherical(venusSunDist, PI / 2, PI / 4);
venusMesh.position.setFromSpherical(venusSpherical);
scene.add(venusMesh);

const venusCPP = new THREE.Vector3();
const venusCPPOffset = new THREE.Vector3().setFromSphericalCoords(venusRadius, PI / 2, venusSpherical.theta - PI / 2);
const venusCOPSpherical = new THREE.Spherical();

// Earth
const earthTexture = new THREE.TextureLoader().load(earthTextureURL);
const earthSpecularMap = new THREE.TextureLoader().load(earthSpecularMapURL);
const earthMaterial = new THREE.MeshPhongMaterial({
  map: earthTexture,
  specularMap: earthSpecularMap
});
const earthGeometry = new THREE.SphereBufferGeometry(earthRadius, sphereSegmentsHor, sphereSegmentsVer);
const earthMesh = new THREE.Mesh(earthGeometry, earthMaterial);
const earthSpherical = new THREE.Spherical(earthSunDist, PI / 2, 0);
earthMesh.position.setFromSpherical(earthSpherical);
scene.add(earthMesh);

const cloudsTexture = new THREE.TextureLoader().load(cloudsTextureURL);
const cloudsMaterial = new THREE.MeshLambertMaterial({
  map: cloudsTexture,
  opacity: 0.5,
  transparent: true,
  blending: THREE.AdditiveBlending
});
const cloudsGeometry = new THREE.SphereBufferGeometry(earthRadius * 1, sphereSegmentsHor, sphereSegmentsVer);
const cloudsMesh = new THREE.Mesh(cloudsGeometry, cloudsMaterial);
earthMesh.add(cloudsMesh);

const earthCPP = new THREE.Vector3();
const earthCPPOffset = new THREE.Vector3().setFromSphericalCoords(earthRadius, PI / 2, earthSpherical.theta + PI / 2);
const earthCOPSpherical = new THREE.Spherical(0.03, PI / 2.1, PI * 0.8);

// The Moon
const moonTexture = new THREE.TextureLoader().load(moonTextureURL);
const moonMaterial = new THREE.MeshPhongMaterial({ map: moonTexture, shininess: 0 });
const moonGeometry = new THREE.SphereBufferGeometry(moonRadius, sphereSegmentsHor, sphereSegmentsVer);
const moonMesh = new THREE.Mesh(moonGeometry, moonMaterial);
const moonSpherical = new THREE.Spherical(moonEarthDist, PI / 2, 0);
moonMesh.position.setFromSpherical(moonSpherical);
moonMesh.rotation.y = PI / 2;
earthMesh.add(moonMesh);

// Mars
const marsTexture = new THREE.TextureLoader().load(marsTextureURL);
const marsMaterial = new THREE.MeshPhongMaterial({ map: marsTexture, shininess: 0 });
const marsGeometry = new THREE.SphereBufferGeometry(marsRadius, sphereSegmentsHor, sphereSegmentsVer);
const marsMesh = new THREE.Mesh(marsGeometry, marsMaterial);
const marsSpherical = new THREE.Spherical(marsSunDist, PI / 2, PI / 2);
marsMesh.position.setFromSpherical(marsSpherical);
scene.add(marsMesh);

const marsCPP = new THREE.Vector3();
const marsCPPOffset = new THREE.Vector3().setFromSphericalCoords(marsRadius, PI / 2, marsSpherical.theta - PI / 2);
const marsCOPSpherical = new THREE.Spherical();

// Jupiter
const jupiterTexture = new THREE.TextureLoader().load(jupiterTextureURL);
const jupiterMaterial = new THREE.MeshPhongMaterial({ map: jupiterTexture, shininess: 0 });
const jupiterGeometry = new THREE.SphereBufferGeometry(jupiterRadius, sphereSegmentsHor, sphereSegmentsVer);
const jupiterMesh = new THREE.Mesh(jupiterGeometry, jupiterMaterial);
const jupiterSpherical = new THREE.Spherical(jupiterSunDist, PI / 2, - PI / 2);
jupiterMesh.position.setFromSpherical(jupiterSpherical);
scene.add(jupiterMesh);

const jupiterCPP = new THREE.Vector3();
const jupiterCPPOffset = new THREE.Vector3().setFromSphericalCoords(jupiterRadius, PI / 2, jupiterSpherical.theta + PI / 2);
const jupiterCOPSpherical = new THREE.Spherical();

// Saturn
const saturnTexture = new THREE.TextureLoader().load(saturnTextureURL);
const saturnMaterial = new THREE.MeshPhongMaterial({ map: saturnTexture, shininess: 0 });
const saturnGeometry = new THREE.SphereBufferGeometry(saturnRadius, sphereSegmentsHor, sphereSegmentsVer);
const saturnMesh = new THREE.Mesh(saturnGeometry, saturnMaterial);
const saturnSpherical = new THREE.Spherical(saturnSunDist, PI / 2, - PI / 4);
saturnMesh.position.setFromSpherical(saturnSpherical);
scene.add(saturnMesh);

const saturnCPP = new THREE.Vector3();
const saturnCPPOffset = new THREE.Vector3().setFromSphericalCoords(saturnRadius, PI / 2, saturnSpherical.theta - PI / 2);;
const saturnCOPSpherical = new THREE.Spherical();

// Uranus
const uranusTexture = new THREE.TextureLoader().load(uranusTextureURL);
const uranusMaterial = new THREE.MeshPhongMaterial({ map: uranusTexture, shininess: 0 });
const uranusGeometry = new THREE.SphereBufferGeometry(uranusRadius, sphereSegmentsHor, sphereSegmentsVer);
const uranusMesh = new THREE.Mesh(uranusGeometry, uranusMaterial);
const uranusSpherical = new THREE.Spherical(uranusSunDist, PI / 2, - 3 * PI / 4);
uranusMesh.position.setFromSpherical(uranusSpherical);
scene.add(uranusMesh);

const uranusCPP = new THREE.Vector3();
const uranusCPPOffset = new THREE.Vector3().setFromSphericalCoords(uranusRadius, PI / 2, uranusSpherical.theta + PI / 2);;
const uranusCOPSpherical = new THREE.Spherical();

// Neptune
const neptuneTexture = new THREE.TextureLoader().load(neptuneTextureURL);
const neptuneMaterial = new THREE.MeshPhongMaterial({ map: neptuneTexture, shininess: 0 });
const neptuneGeometry = new THREE.SphereBufferGeometry(neptuneRadius, sphereSegmentsHor, sphereSegmentsVer);
const neptuneMesh = new THREE.Mesh(neptuneGeometry, neptuneMaterial);
const neptuneSpherical = new THREE.Spherical(neptuneSunDist, PI / 2, PI);
neptuneMesh.position.setFromSpherical(neptuneSpherical);
scene.add(neptuneMesh);

const neptuneCPP = new THREE.Vector3();
const neptuneCPPOffset = new THREE.Vector3().setFromSphericalCoords(neptuneRadius, PI / 2, neptuneSpherical.theta - PI / 2);;
const neptuneCOPSpherical = new THREE.Spherical();



// Helpers
/* const gridHelper = new THREE.GridHelper(10, 50);
scene.add(gridHelper); */



// Renderer
const renderer = new THREE.WebGLRenderer({ antialias: true });
renderer.setPixelRatio(window.devicePixelRatio);
renderer.setSize(window.innerWidth, window.innerHeight);
renderer.outputEncoding = THREE.sRGBEncoding;
renderer.physicallyCorrectLights = false;
renderer.setAnimationLoop(animation);
document.body.appendChild(renderer.domElement);



// Controls
const controls = new OrbitControls(camera, renderer.domElement);
/* controls.enabled = false;
controls.autoRotate = false;
controls.autoRotateSpeed = -0.5; */



// MEDIA QUERY //

mobileMediaChange(mobile); // Call listener function at run time

function mobileMediaChange(mediaQuery) {

  if (mediaQuery.matches) {

    // If media query matches
    sunCPP.set(...sunMesh.position);
    mercuryCPP.set(...mercuryMesh.position);
    venusCPP.set(...venusMesh.position);
    earthCPP.set(...earthMesh.position);
    marsCPP.set(...marsMesh.position);
    jupiterCPP.set(...jupiterMesh.position);
    saturnCPP.set(...saturnMesh.position);
    uranusCPP.set(...uranusMesh.position);
    neptuneCPP.set(...neptuneMesh.position);

    sunCOPSpherical.set(sunRadius * 6, PI / 2.05, PI / 100);
    mercuryCOPSpherical.set(mercuryRadius * 6, PI / 2.1, PI * 0.8);
    venusCOPSpherical.set(venusRadius * 6, PI / 2.1, PI * 1.4);
    earthCOPSpherical.set(earthRadius * 6, PI / 2.1, PI * 0.8);
    marsCOPSpherical.set(marsRadius * 6, PI / 2.1, PI * 1.7);
    jupiterCOPSpherical.set(jupiterRadius * 6, PI / 2.1, PI * 0.3);
    saturnCOPSpherical.set(saturnRadius * 6, PI / 2.1, PI * 0.8);
    uranusCOPSpherical.set(uranusRadius * 6, PI / 2.1, PI * 0.8);
    neptuneCOPSpherical.set(neptuneRadius * 6, PI / 2.1, PI * 0.8);

    moveCamera();
    document.body.onscroll = moveCamera;

  } else {

    // If media query doesn't match
    sunCPP.set(...sunMesh.position);
    mercuryCPP.set(
      mercuryMesh.position.x + mercuryCPPOffset.x,
      mercuryMesh.position.y + mercuryCPPOffset.y,
      mercuryMesh.position.z + mercuryCPPOffset.z
    );
    venusCPP.set(
      venusMesh.position.x + venusCPPOffset.x,
      venusMesh.position.y + venusCPPOffset.y,
      venusMesh.position.z + venusCPPOffset.z
    );
    earthCPP.set(
      earthMesh.position.x + earthCPPOffset.x,
      earthMesh.position.y + earthCPPOffset.y,
      earthMesh.position.z + earthCPPOffset.z
    );
    marsCPP.set(
      marsMesh.position.x + marsCPPOffset.x,
      marsMesh.position.y + marsCPPOffset.y,
      marsMesh.position.z + marsCPPOffset.z
    );
    jupiterCPP.set(
      jupiterMesh.position.x + jupiterCPPOffset.x,
      jupiterMesh.position.y + jupiterCPPOffset.y,
      jupiterMesh.position.z + jupiterCPPOffset.z
    );
    saturnCPP.set(
      saturnMesh.position.x + saturnCPPOffset.x,
      saturnMesh.position.y + saturnCPPOffset.y,
      saturnMesh.position.z + saturnCPPOffset.z
    );
    uranusCPP.set(
      uranusMesh.position.x + uranusCPPOffset.x,
      uranusMesh.position.y + uranusCPPOffset.y,
      uranusMesh.position.z + uranusCPPOffset.z
    );
    neptuneCPP.set(
      neptuneMesh.position.x + neptuneCPPOffset.x,
      neptuneMesh.position.y + neptuneCPPOffset.y,
      neptuneMesh.position.z + neptuneCPPOffset.z
    );

    sunCOPSpherical.set(sunRadius * 5, PI / 2.005, PI / 1000);
    mercuryCOPSpherical.set(mercuryRadius * 3, PI / 2.1, PI * 0.8);
    venusCOPSpherical.set(venusRadius * 3, PI / 2.1, PI * 1.4);
    earthCOPSpherical.set(earthRadius * 3, PI / 2.1, PI * 0.8);
    marsCOPSpherical.set(marsRadius * 3, PI / 2.1, PI * 1.7);
    jupiterCOPSpherical.set(jupiterRadius * 3, PI / 2.1, PI * 0.3);
    saturnCOPSpherical.set(saturnRadius * 3, PI / 2.1, PI * 0.8);
    uranusCOPSpherical.set(uranusRadius * 3, PI / 2.1, PI * 0.8);
    neptuneCOPSpherical.set(neptuneRadius * 3, PI / 2.1, PI * 0.8);

    moveCamera();
    document.body.onscroll = moveCamera;

  }

}



// ANIMATION //

function animation() {

  const timeDelta = clock.getDelta();

  cubeCamera.update(renderer, offScene);
  perlinMaterial.uniforms.time.value = clock.elapsedTime;
  sunMaterial.uniforms.time.value = clock.elapsedTime;
  sunMaterial.uniforms.uPerlin.value = cubeRenderTarget.texture;

  stars.rotateY(- timeDelta * 0.02);

  coronaMesh.lookAt(camera.position);

  mercuryMesh.rotateY(timeDelta * 0.1);
  venusMesh.rotateY(timeDelta * 0.1);
  earthMesh.rotateY(timeDelta * 0.1);
  marsMesh.rotateY(timeDelta * 0.1);
  jupiterMesh.rotateY(timeDelta * 0.1);
  saturnMesh.rotateY(timeDelta * 0.1);
  uranusMesh.rotateY(timeDelta * 0.1);
  neptuneMesh.rotateY(timeDelta * 0.1);

  controls.target.set(...cameraPivotPoint);
  controls.update();

  renderer.render(scene, camera);

}



// ON SCROLL ANIMATION //

function moveCamera() {

  const s = window.pageYOffset / (document.documentElement.scrollHeight - window.innerHeight); // Scroll parameter, from 0 to 1

  // Init
  if (s === 0) {
    cameraPivotPoint.set(...sunCPP);
    cameraOrbitPosition.setFromSpherical(sunCOPSpherical);
    camera.position.set(
      cameraPivotPoint.x + cameraOrbitPosition.x,
      cameraPivotPoint.y + cameraOrbitPosition.y,
      cameraPivotPoint.z + cameraOrbitPosition.z
    );
  }

  // To Mercury animation
  let start = 0;
  let end = (window.pageYOffset + toMercurySection.getBoundingClientRect().bottom) / document.documentElement.scrollHeight;
  if (start < s && s <= end) {
    const interval = end - start;
    cameraPivotPoint.set(
      mercuryCPP.x * easeInOutQuint((s - start) / interval),
      mercuryCPP.y * easeInOutQuint((s - start) / interval),
      mercuryCPP.z * easeInOutQuint((s - start) / interval)
    );
    cameraOrbitPosition.setFromSphericalCoords(
      sunCOPSpherical.radius + (mercuryCOPSpherical.radius - sunCOPSpherical.radius) * easeInOutQuint((s - start) / interval),
      sunCOPSpherical.phi + (mercuryCOPSpherical.phi - sunCOPSpherical.phi) * easeInOutQuint((s - start) / interval),
      sunCOPSpherical.theta + (mercuryCOPSpherical.theta - sunCOPSpherical.theta) * easeInOutQuint((s - start) / interval)
    );
    camera.position.set(
      cameraPivotPoint.x + cameraOrbitPosition.x,
      cameraPivotPoint.y + cameraOrbitPosition.y,
      cameraPivotPoint.z + cameraOrbitPosition.z
    );
  }

  // Mercury shot
  start = (window.pageYOffset + toMercurySection.getBoundingClientRect().bottom) / document.documentElement.scrollHeight;
  end = (window.pageYOffset + mercurySection.getBoundingClientRect().bottom) / document.documentElement.scrollHeight;
  if (start < s && s <= end) {
    cameraPivotPoint.set(...mercuryCPP);
    cameraOrbitPosition.setFromSpherical(mercuryCOPSpherical);
    camera.position.set(
      cameraPivotPoint.x + cameraOrbitPosition.x,
      cameraPivotPoint.y + cameraOrbitPosition.y,
      cameraPivotPoint.z + cameraOrbitPosition.z
    );
  }

  // To Venus animation
  start = (window.pageYOffset + mercurySection.getBoundingClientRect().bottom) / document.documentElement.scrollHeight;
  end = (window.pageYOffset + toVenusSection.getBoundingClientRect().bottom) / document.documentElement.scrollHeight;
  if (start < s && s <= end) {
    const interval = end - start;
    cameraPivotPoint.set(
      mercuryCPP.x + (venusCPP.x - mercuryCPP.x) * easeInOutQuint((s - start) / interval),
      mercuryCPP.y + (venusCPP.y - mercuryCPP.y) * easeInOutQuint((s - start) / interval),
      mercuryCPP.z + (venusCPP.z - mercuryCPP.z) * easeInOutQuint((s - start) / interval)
    );
    if (start < s && s <= start + interval / 2) {
      cameraOrbitPosition.setFromSphericalCoords(
        mercuryCOPSpherical.radius + 10 * easeInOutQuint((s - start) / interval),
        mercuryCOPSpherical.phi + (venusCOPSpherical.phi - mercuryCOPSpherical.phi) * easeInOutQuint((s - start) / interval),
        mercuryCOPSpherical.theta + (venusCOPSpherical.theta - mercuryCOPSpherical.theta) * easeInOutQuint((s - start) / interval)
      );
    }
    if (start + interval / 2 < s && s <= end) {
      cameraOrbitPosition.setFromSphericalCoords(
        (mercuryCOPSpherical.radius + 10) + venusCOPSpherical.radius - (mercuryCOPSpherical.radius + 10) * easeInOutQuint((s - start) / interval),
        mercuryCOPSpherical.phi + (venusCOPSpherical.phi - mercuryCOPSpherical.phi) * easeInOutQuint((s - start) / interval),
        mercuryCOPSpherical.theta + (venusCOPSpherical.theta - mercuryCOPSpherical.theta) * easeInOutQuint((s - start) / interval)
      );
    }
    camera.position.set(
      cameraPivotPoint.x + cameraOrbitPosition.x,
      cameraPivotPoint.y + cameraOrbitPosition.y,
      cameraPivotPoint.z + cameraOrbitPosition.z
    );
  }

  // Venus shot
  start = (window.pageYOffset + toVenusSection.getBoundingClientRect().bottom) / document.documentElement.scrollHeight;
  end = (window.pageYOffset + venusSection.getBoundingClientRect().bottom) / document.documentElement.scrollHeight;
  if (start < s && s <= end) {
    cameraPivotPoint.set(...venusCPP);
    cameraOrbitPosition.setFromSpherical(venusCOPSpherical);
    camera.position.set(
      cameraPivotPoint.x + cameraOrbitPosition.x,
      cameraPivotPoint.y + cameraOrbitPosition.y,
      cameraPivotPoint.z + cameraOrbitPosition.z
    );
  }

  // To Earth animation
  start = (window.pageYOffset + venusSection.getBoundingClientRect().bottom) / document.documentElement.scrollHeight;
  end = (window.pageYOffset + toEarthSection.getBoundingClientRect().bottom) / document.documentElement.scrollHeight;
  if (start < s && s <= end) {
    const interval = end - start;
    cameraPivotPoint.set(
      venusCPP.x + (earthCPP.x - venusCPP.x) * easeInOutQuint((s - start) / interval),
      venusCPP.y + (earthCPP.y - venusCPP.y) * easeInOutQuint((s - start) / interval),
      venusCPP.z + (earthCPP.z - venusCPP.z) * easeInOutQuint((s - start) / interval)
    );
    if (start < s && s <= start + interval / 2) {
      cameraOrbitPosition.setFromSphericalCoords(
        venusCOPSpherical.radius + 10 * easeInOutQuint((s - start) / interval),
        venusCOPSpherical.phi + (earthCOPSpherical.phi - venusCOPSpherical.phi) * easeInOutQuint((s - start) / interval),
        venusCOPSpherical.theta + (earthCOPSpherical.theta - venusCOPSpherical.theta) * easeInOutQuint((s - start) / interval)
      );
    }
    if (start + interval / 2 < s && s <= end) {
      cameraOrbitPosition.setFromSphericalCoords(
        (venusCOPSpherical.radius + 10) + earthCOPSpherical.radius - (venusCOPSpherical.radius + 10) * easeInOutQuint((s - start) / interval),
        venusCOPSpherical.phi + (earthCOPSpherical.phi - venusCOPSpherical.phi) * easeInOutQuint((s - start) / interval),
        venusCOPSpherical.theta + (earthCOPSpherical.theta - venusCOPSpherical.theta) * easeInOutQuint((s - start) / interval)
      );
    }
    camera.position.set(
      cameraPivotPoint.x + cameraOrbitPosition.x,
      cameraPivotPoint.y + cameraOrbitPosition.y,
      cameraPivotPoint.z + cameraOrbitPosition.z
    );
  }

  // Earth shot
  start = (window.pageYOffset + toEarthSection.getBoundingClientRect().bottom) / document.documentElement.scrollHeight;
  end = (window.pageYOffset + earthSection.getBoundingClientRect().bottom) / document.documentElement.scrollHeight;
  if (start < s && s <= end) {
    cameraPivotPoint.set(...earthCPP);
    cameraOrbitPosition.setFromSpherical(earthCOPSpherical);
    camera.position.set(
      cameraPivotPoint.x + cameraOrbitPosition.x,
      cameraPivotPoint.y + cameraOrbitPosition.y,
      cameraPivotPoint.z + cameraOrbitPosition.z
    );
  }

  // To Mars animation
  start = (window.pageYOffset + earthSection.getBoundingClientRect().bottom) / document.documentElement.scrollHeight;
  end = (window.pageYOffset + toMarsSection.getBoundingClientRect().bottom) / document.documentElement.scrollHeight;
  if (start < s && s <= end) {
    const interval = end - start;
    cameraPivotPoint.set(
      earthCPP.x + (marsCPP.x - earthCPP.x) * easeInOutQuint((s - start) / interval),
      earthCPP.y + (marsCPP.y - earthCPP.y) * easeInOutQuint((s - start) / interval),
      earthCPP.z + (marsCPP.z - earthCPP.z) * easeInOutQuint((s - start) / interval)
    );
    if (start < s && s <= start + interval / 2) {
      cameraOrbitPosition.setFromSphericalCoords(
        earthCOPSpherical.radius + 10 * easeInOutQuint((s - start) / interval),
        earthCOPSpherical.phi + (marsCOPSpherical.phi - earthCOPSpherical.phi) * easeInOutQuint((s - start) / interval),
        earthCOPSpherical.theta + (marsCOPSpherical.theta - earthCOPSpherical.theta) * easeInOutQuint((s - start) / interval)
      );
    }
    if (start + interval / 2 < s && s <= end) {
      cameraOrbitPosition.setFromSphericalCoords(
        (earthCOPSpherical.radius + 10) + marsCOPSpherical.radius - (earthCOPSpherical.radius + 10) * easeInOutQuint((s - start) / interval),
        earthCOPSpherical.phi + (marsCOPSpherical.phi - earthCOPSpherical.phi) * easeInOutQuint((s - start) / interval),
        earthCOPSpherical.theta + (marsCOPSpherical.theta - earthCOPSpherical.theta) * easeInOutQuint((s - start) / interval)
      );
    }
    camera.position.set(
      cameraPivotPoint.x + cameraOrbitPosition.x,
      cameraPivotPoint.y + cameraOrbitPosition.y,
      cameraPivotPoint.z + cameraOrbitPosition.z
    );
  }

  // Mars shot
  start = (window.pageYOffset + toMarsSection.getBoundingClientRect().bottom) / document.documentElement.scrollHeight;
  end = (window.pageYOffset + marsSection.getBoundingClientRect().bottom) / document.documentElement.scrollHeight;
  if (start < s && s <= end) {
    cameraPivotPoint.set(...marsCPP);
    cameraOrbitPosition.setFromSpherical(marsCOPSpherical);
    camera.position.set(
      cameraPivotPoint.x + cameraOrbitPosition.x,
      cameraPivotPoint.y + cameraOrbitPosition.y,
      cameraPivotPoint.z + cameraOrbitPosition.z
    );
  }

  // To Jupiter animation
  start = (window.pageYOffset + marsSection.getBoundingClientRect().bottom) / document.documentElement.scrollHeight;
  end = (window.pageYOffset + toJupiterSection.getBoundingClientRect().bottom) / document.documentElement.scrollHeight;
  if (start < s && s <= end) {
    const interval = end - start;
    cameraPivotPoint.set(
      marsCPP.x + (jupiterCPP.x - marsCPP.x) * easeInOutQuint((s - start) / interval),
      marsCPP.y + (jupiterCPP.y - marsCPP.y) * easeInOutQuint((s - start) / interval),
      marsCPP.z + (jupiterCPP.z - marsCPP.z) * easeInOutQuint((s - start) / interval)
    );
    if (start < s && s <= start + interval / 2) {
      cameraOrbitPosition.setFromSphericalCoords(
        marsCOPSpherical.radius + 100 * easeInOutQuint((s - start) / interval),
        marsCOPSpherical.phi + (jupiterCOPSpherical.phi - marsCOPSpherical.phi) * easeInOutQuint((s - start) / interval),
        marsCOPSpherical.theta + (jupiterCOPSpherical.theta - marsCOPSpherical.theta) * easeInOutQuint((s - start) / interval)
      );
    }
    if (start + interval / 2 < s && s <= end) {
      cameraOrbitPosition.setFromSphericalCoords(
        (marsCOPSpherical.radius + 100) + jupiterCOPSpherical.radius - (marsCOPSpherical.radius + 100) * easeInOutQuint((s - start) / interval),
        marsCOPSpherical.phi + (jupiterCOPSpherical.phi - marsCOPSpherical.phi) * easeInOutQuint((s - start) / interval),
        marsCOPSpherical.theta + (jupiterCOPSpherical.theta - marsCOPSpherical.theta) * easeInOutQuint((s - start) / interval)
      );
    }
    camera.position.set(
      cameraPivotPoint.x + cameraOrbitPosition.x,
      cameraPivotPoint.y + cameraOrbitPosition.y,
      cameraPivotPoint.z + cameraOrbitPosition.z
    );
  }

  // Jupiter shot
  start = (window.pageYOffset + toJupiterSection.getBoundingClientRect().bottom) / document.documentElement.scrollHeight;
  end = (window.pageYOffset + jupiterSection.getBoundingClientRect().bottom) / document.documentElement.scrollHeight;
  if (start < s && s <= end) {
    cameraPivotPoint.set(...jupiterCPP);
    cameraOrbitPosition.setFromSpherical(jupiterCOPSpherical);
    camera.position.set(
      cameraPivotPoint.x + cameraOrbitPosition.x,
      cameraPivotPoint.y + cameraOrbitPosition.y,
      cameraPivotPoint.z + cameraOrbitPosition.z
    );
  }

}



// WINDOW RESIZE //

function onWindowResize() {
  camera.aspect = window.innerWidth / window.innerHeight;
  camera.updateProjectionMatrix();
  renderer.setSize(window.innerWidth, window.innerHeight);
  mobileMediaChange(mobile);
}

window.addEventListener("resize", onWindowResize, false);
