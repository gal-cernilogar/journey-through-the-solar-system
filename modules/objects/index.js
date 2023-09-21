import * as THREE from 'three';
import Stars from './stars.js';
import Sun from './sun.js';
import PlanetGLTF from './planetGLTF.js';
import MoonGLTF from './moonGLTF.js';
import { PI } from "/modules/math.js";

import mercuryModelURL from '/models/mercury.glb';
import venusModelURL from '/models/venus.glb';
import earthModelURL from '/models/earth.glb';
import moonModelURL from '/models/moon.glb';
import marsModelURL from '/models/mars.glb';
import jupiterModelURL from '/models/jupiter.glb';
import saturnModelURL from '/models/saturn.glb';
import uranusModelURL from '/models/uranus.glb';
import neptuneModelURL from '/models/neptune.glb';

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

const mercury = new PlanetGLTF({
  modelURL: mercuryModelURL,
  radius: 0.0035 * scalingFactor,
  sphericalPosition: new THREE.Spherical(49 / scalingFactor, PI / 2, - PI / 300)
});

const venus = new PlanetGLTF({
  modelURL: venusModelURL,
  radius: 0.0087 * scalingFactor,
  sphericalPosition: new THREE.Spherical(80 / scalingFactor, PI / 2, PI / 4)
});

const earth = new PlanetGLTF({
  modelURL: earthModelURL,
  radius: 0.0091 * scalingFactor,
  sphericalPosition: new THREE.Spherical(110 / scalingFactor, PI / 2, 0)
});

const moon = new MoonGLTF({
  modelURL: moonModelURL,
  radius: 0.0025 * scalingFactor,
  sphericalPosition: new THREE.Spherical(0.5637, PI / 2, 0),
  orbitCenter: earth.sphericalPosition
});

const mars = new PlanetGLTF({
  modelURL: marsModelURL,
  radius: 0.0049 * scalingFactor,
  sphericalPosition: new THREE.Spherical(150 / scalingFactor, PI / 2, PI / 2)
});

const jupiter = new PlanetGLTF({
  modelURL: jupiterModelURL,
  radius: 0.1004 * scalingFactor,
  sphericalPosition: new THREE.Spherical(535 / scalingFactor, PI / 2, - PI / 2),
});

const saturn = new PlanetGLTF({
  modelURL: saturnModelURL,
  radius: 0.0836 * scalingFactor,
  sphericalPosition: new THREE.Spherical(1060 / scalingFactor, PI / 2, - PI / 4),
});

const uranus = new PlanetGLTF({
  modelURL: uranusModelURL,
  radius: 0.0364 * scalingFactor,
  sphericalPosition: new THREE.Spherical(2115 / scalingFactor, PI / 2, PI),
});

const neptune = new PlanetGLTF({
  modelURL: neptuneModelURL,
  radius: 0.0354 * scalingFactor,
  sphericalPosition: new THREE.Spherical(3215 / scalingFactor, PI / 2, - 3 * PI / 4),
});

export { stars, sun, mercury, venus, earth, moon, mars, jupiter, saturn, uranus, neptune };