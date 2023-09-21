import * as THREE from 'three';
import Stars from './stars.js';
import Sun from './sun.js';
import Planet from './planet.js';
import PlanetWithClouds from './planetWithClouds.js';
import PlanetWithRing from './planetWithRing.js';
import Moon from './moon.js';
import { PI } from "/modules/math.js";

import mercuryTextureURL from '/images/textures/2k_mercury-optimized.jpg';
import venusTextureURL from '/images/textures/2k_venus_surface-optimized.jpg';
import earthTextureURL from '/images/textures/2k_earth_daymap-optimized.jpg';
import earthSpecularMapURL from '/images/textures/2k_earth_specular_map-optimized.jpg';
import earthCloudsTextureURL from '/images/textures/2k_earth_clouds-optimized.jpg';
import moonTextureURL from '/images/textures/2k_moon-optimized.jpg';
import marsTextureURL from '/images/textures/2k_mars-optimized.jpg';
import jupiterTextureURL from '/images/textures/2k_jupiter-optimized.jpg';
import saturnTextureURL from '/images/textures/2k_saturn-optimized.jpg';
import saturnRingTextureURL from '/images/textures/2k_saturn_ring_alpha.png';
import uranusTextureURL from '/images/textures/2k_uranus-optimized.jpg';
import neptuneTextureURL from '/images/textures/2k_neptune-optimized.jpg';

const scalingFactor = 10;
const mobile = window.matchMedia("(max-width: 1023px)"); // Mobile media query

let sphereSegments;
mobile.matches ? sphereSegments = 32 : sphereSegments = 64;

const stars = new Stars({
  fromDistance: 500,
  forDistance: 500,
  amount: 10000
});

const sun = new Sun(1, sphereSegments);

const mercury = new Planet({
  radius: 0.0035 * scalingFactor,
  sphereSegments,
  sphericalPosition: new THREE.Spherical(49 / scalingFactor, PI / 2, - PI / 300),
  textureURL: mercuryTextureURL
});

const venus = new Planet({
  radius: 0.0087 * scalingFactor,
  sphereSegments,
  sphericalPosition: new THREE.Spherical(80 / scalingFactor, PI / 2, PI / 4),
  textureURL: venusTextureURL
});

const earth = new PlanetWithClouds({
  radius: 0.0091 * scalingFactor,
  sphereSegments,
  sphericalPosition: new THREE.Spherical(110 / scalingFactor, PI / 2, 0),
  textureURL: earthTextureURL,
  specularMapURL: earthSpecularMapURL,
  cloudsTextureURL: earthCloudsTextureURL,
  shininess: 30
});

const moon = new Moon({
  radius: 0.0025 * scalingFactor,
  sphereSegments,
  sphericalPosition: new THREE.Spherical(0.5637, PI / 2, 0),
  orbitCenter: earth.sphericalPosition,
  textureURL: moonTextureURL
});
moon.mesh.rotation.y = PI / 2;

const mars = new Planet({
  radius: 0.0049 * scalingFactor,
  sphereSegments,
  sphericalPosition: new THREE.Spherical(150 / scalingFactor, PI / 2, PI / 2),
  textureURL: marsTextureURL
});

const jupiter = new Planet({
  radius: 0.1004 * scalingFactor,
  sphereSegments,
  sphericalPosition: new THREE.Spherical(535 / scalingFactor, PI / 2, - PI / 2),
  textureURL: jupiterTextureURL
});

const saturn = new PlanetWithRing({
  radius: 0.0836 * scalingFactor,
  sphereSegments,
  sphericalPosition: new THREE.Spherical(1060 / scalingFactor, PI / 2, - PI / 4),
  textureURL: saturnTextureURL,
  ringTextureURL: saturnRingTextureURL
});
saturn.mesh.rotation.z = PI * 0.1485;
saturn.mesh.rotation.y = - PI * 0.1485;
saturn.ringMesh.rotation.x = PI / 2;

const uranus = new Planet({
  radius: 0.0364 * scalingFactor,
  sphereSegments,
  sphericalPosition: new THREE.Spherical(2115 / scalingFactor, PI / 2, PI),
  textureURL: uranusTextureURL
});
uranus.mesh.rotation.z = - PI / 2;
uranus.mesh.rotation.y = - PI / 4;

const neptune = new Planet({
  radius: 0.0354 * scalingFactor,
  sphereSegments,
  sphericalPosition: new THREE.Spherical(3215 / scalingFactor, PI / 2, - 3 * PI / 4),
  textureURL: neptuneTextureURL
});


export { stars, sun, mercury, venus, earth, moon, mars, jupiter, saturn, uranus, neptune };