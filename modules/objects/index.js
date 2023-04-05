import * as THREE from 'three';
import createStars from './createStars.js';
import Sun from './sun.js';
import Planet from './planet.js';
import PlanetWithClouds from './planetWithClouds.js';
import PlanetWithRing from './planetWithRing.js';
import Moon from './moon.js';
import { PI } from "/modules/math.js";

const scalingFactor = 10;
const mobile = window.matchMedia("(max-width: 1023px)"); // Mobile media query

let sphereSegments;
mobile.matches ? sphereSegments = 32 : sphereSegments = 64;

const stars = createStars({
  fromDistance: 500,
  forDistance: 500,
  amount: 100000
});

const sun = new Sun(1, 64);

const mercury = new Planet({
  radius: 0.0035 * scalingFactor,
  sphereSegments,
  sphericalPosition: new THREE.Spherical(49 / scalingFactor, PI / 2, - PI / 300),
  textureURL: '/images/textures/2k_mercury-optimized.jpg'
});

const venus = new Planet({
  radius: 0.0087 * scalingFactor,
  sphereSegments,
  sphericalPosition: new THREE.Spherical(80 / scalingFactor, PI / 2, PI / 4),
  textureURL: '/images/textures/2k_venus_surface-optimized.jpg',
  shininess: null
});

const earth = new PlanetWithClouds({
  radius: 0.0091 * scalingFactor,
  sphereSegments,
  sphericalPosition: new THREE.Spherical(110 / scalingFactor, PI / 2, 0),
  textureURL: '/images/textures/2k_earth_daymap-optimized.jpg',
  specularMapURL: '/images/textures/2k_earth_specular_map-optimized.jpg',
  cloudsTextureURL: '/images/textures/2k_earth_clouds-optimized.jpg',
  cloudsOpacity: 0.5
});

const moon = new Moon({
  radius: 0.0025 * scalingFactor,
  sphereSegments,
  sphericalPosition: new THREE.Spherical(0.5637, PI / 2, 0),
  orbitCenter: earth.sphericalPosition,
  textureURL: '/images/textures/2k_moon-optimized.jpg',
  shininess: null
});
moon.mesh.rotation.y = PI / 2;

const mars = new Planet({
  radius: 0.0049 * scalingFactor,
  sphereSegments,
  sphericalPosition: new THREE.Spherical(150 / scalingFactor, PI / 2, PI / 2),
  textureURL: '/images/textures/2k_mars-optimized.jpg'
});

const jupiter = new Planet({
  radius: 0.1004 * scalingFactor,
  sphereSegments,
  sphericalPosition: new THREE.Spherical(535 / scalingFactor, PI / 2, - PI / 2),
  textureURL: '/images/textures/2k_jupiter-optimized.jpg',
  shininess: null
});

const saturn = new PlanetWithRing({
  radius: 0.0836 * scalingFactor,
  sphereSegments,
  sphericalPosition: new THREE.Spherical(1060 / scalingFactor, PI / 2, - PI / 4),
  textureURL: '/images/textures/2k_saturn-optimized.jpg',
  shininess: null,
  ringTextureURL: '/images/textures/2k_saturn_ring_alpha.png'
});
saturn.mesh.rotation.z = PI * 0.1485;
saturn.mesh.rotation.y = - PI * 0.1485;
saturn.ringMesh.rotation.x = PI / 2;

const uranus = new Planet({
  radius: 0.0364 * scalingFactor,
  sphereSegments,
  sphericalPosition: new THREE.Spherical(2115 / scalingFactor, PI / 2, PI),
  textureURL: '/images/textures/2k_uranus-optimized.jpg',
  shininess: null
});
uranus.mesh.rotation.z = - PI / 2;
uranus.mesh.rotation.y = - PI / 4;

const neptune = new Planet({
  radius: 0.0354 * scalingFactor,
  sphereSegments,
  sphericalPosition: new THREE.Spherical(3215 / scalingFactor, PI / 2, - 3 * PI / 4),
  textureURL: '/images/textures/2k_neptune-optimized.jpg',
  shininess: null
});

export { stars, sun, mercury, venus, earth, moon, mars, jupiter, saturn, uranus, neptune };