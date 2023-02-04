import * as THREE from 'three';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js';
import { PI, acos, random, easeInOutQuint } from "./modules/math.js";


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
import saturnRingTextureURL from '/images/textures/2k_saturn_ring_alpha.png';
import uranusTextureURL from '/images/textures/2k_uranus-optimized.jpg';
import neptuneTextureURL from '/images/textures/2k_neptune-optimized.jpg';
import Sun from '/modules/sun.js';
import Planet from './modules/planet.js';



// INIT //

// const welcomeSection = document.querySelector('#welcome');
const venusSection = document.querySelector('#venus');
const earthSection = document.querySelector('#earth');
const marsSection = document.querySelector('#mars');
const jupiterSection = document.querySelector('#jupiter');
const saturnSection = document.querySelector('#saturn');
const uranusSection = document.querySelector('#uranus');
const neptuneSection = document.querySelector('#neptune');
const sunSection = document.querySelector('#sun');
const toMercurySection = document.querySelector('#toMercurySection');
const toVenusSection = document.querySelector('#toVenusSection');
const toEarthSection = document.querySelector('#toEarthSection');
const toMarsSection = document.querySelector('#toMarsSection');
const toJupiterSection = document.querySelector('#toJupiterSection');
const toSaturnSection = document.querySelector('#toSaturnSection');
const toUranusSection = document.querySelector('#toUranusSection');
const toNeptuneSection = document.querySelector('#toNeptuneSection');
const toSunSection = document.querySelector('#toSunSection');

const permissionBtn = document.querySelector('#permission-btn');

const mobile = window.matchMedia("(max-width: 1023px)"); // Mobile media query

const scalingFactor = 10;

const venusRadius = 0.0087 * scalingFactor;
const earthRadius = 0.0091 * scalingFactor;
const moonRadius = 0.0025 * scalingFactor;
const marsRadius = 0.0049 * scalingFactor;
const jupiterRadius = 0.1004 * scalingFactor;
const saturnRadius = 0.0836 * scalingFactor;
const uranusRadius = 0.0364 * scalingFactor;
const neptuneRadius = 0.0354 * scalingFactor;

const venusSunDist = 80 / scalingFactor;
const earthSunDist = 110 / scalingFactor;
const moonEarthDist = 0.5637;
const marsSunDist = 150 / scalingFactor;
const jupiterSunDist = 535 / scalingFactor;
const saturnSunDist = 1060 / scalingFactor;
const uranusSunDist = 2115 / scalingFactor;
const neptuneSunDist = 3215 / scalingFactor;

let sphereSegments;
let sphereSegmentsHor;
let sphereSegmentsVer;

if (mobile.matches) {
  sphereSegments = 32;
  sphereSegmentsHor = 32;
  sphereSegmentsVer = sphereSegmentsHor / 2;
} else {
  sphereSegments = 64;
  sphereSegmentsHor = 64;
  sphereSegmentsVer = sphereSegmentsHor / 2;
}

const clock = new THREE.Clock();
const mouse = {
  x: 0,
  y: 0
};

function mouseMoveHandler(event) {
  mouse.x = (event.clientX / innerWidth) * 2 - 1;
  // mouse.y = -(event.clientY / innerHeight) * 2 + 1;
}

window.addEventListener('mousemove', mouseMoveHandler);

function deviceOrientationHandler(event) {
  if (window.innerWidth < window.innerHeight) {
    mouse.x = event.gamma / 90;
  } else {
    mouse.x = event.beta * 2 / 180;
  }
}

window.addEventListener('deviceorientation', deviceOrientationHandler);


function permissionHandler() {
  if (typeof DeviceOrientationEvent.requestPermission === 'function') {
    // Handle iOS 13+ devices.
    DeviceOrientationEvent.requestPermission()
      .then((state) => {
        if (state === 'granted') {
          window.addEventListener('deviceorientation', deviceOrientationHandler);
          permissionBtn.remove();
        } else {
          console.error('Request to access the orientation was rejected');
        }
      })
      .catch(console.error);
  } else {
    // Handle regular non iOS 13+ devices.
    window.addEventListener('deviceorientation', deviceOrientationHandler);
  }
  permissionBtn.remove();
}

permissionBtn.addEventListener('click', permissionHandler);

const camera = new THREE.PerspectiveCamera(45, window.innerWidth / window.innerHeight, 0.001, 2000);
const cameraFocus = new THREE.Vector3();
const cameraPosition = new THREE.Vector3();

const scene = new THREE.Scene();

// Stars
// const starsTexture = new THREE.TextureLoader().load(starsTextureURL);
// const starsMaterial = new THREE.MeshBasicMaterial({
//   map: starsTexture,
//   side: THREE.BackSide
// });
// const starsGeometry = new THREE.BoxBufferGeometry(1000, 500, 1000);
// const stars = new THREE.Mesh(starsGeometry, starsMaterial);
// scene.add(stars);

const starsMaterial = new THREE.PointsMaterial({ color: 0xffffff });
const starsGeometry = new THREE.BufferGeometry();

function createStars() {
  const starSpherical = new THREE.Spherical();
  const starCartesian = new THREE.Vector3();
  const starPositions = [];

  for (let i = 0; i < 10000; i++) {
    starSpherical.set(
      random() * 500 + 500,
      acos((random() * 2) - 1),
      random() * 2 * PI
    );
    starCartesian.setFromSpherical(starSpherical);
    starPositions.push(...starCartesian);
  }
  starsGeometry.setAttribute('position', new THREE.Float32BufferAttribute(starPositions, 3));
}

createStars();

const stars = new THREE.Points(starsGeometry, starsMaterial);
scene.add(stars);

const testSun = new Sun(1, 64);
scene.add(testSun.corona, testSun.sun);

const welcomecameraPosition = new THREE.Spherical();

// Mercury
const mercurySection = document.querySelector('#mercury');
const mercuryRadius = 0.0035 * scalingFactor;
const mercurySunDist = 49 / scalingFactor;
const mercuryPosition = new THREE.Spherical(mercurySunDist, PI / 2, - PI / 300);
const mercury = new Planet(mercuryRadius, sphereSegments, mercuryPosition, mercuryTextureURL);
scene.add(mercury.planet);

// Venus
const venusTexture = new THREE.TextureLoader().load(venusTextureURL);
const venusMaterial = new THREE.MeshPhongMaterial({ map: venusTexture, shininess: 0 });
const venusGeometry = new THREE.SphereBufferGeometry(venusRadius, sphereSegmentsHor, sphereSegmentsVer);
const venusMesh = new THREE.Mesh(venusGeometry, venusMaterial);
const venusSpherical = new THREE.Spherical(venusSunDist, PI / 2, PI / 4);
const venus = new THREE.Object3D();
venus.add(venusMesh);
venus.position.setFromSpherical(venusSpherical);
scene.add(venus);

const venuscameraFocus = new THREE.Vector3();
const venuscameraFocusOffset = new THREE.Vector3().setFromSphericalCoords(venusRadius, PI / 2, venusSpherical.theta - PI / 2);
const venuscameraPosition = new THREE.Spherical();

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
const earth = new THREE.Object3D();
earth.add(earthMesh);
earth.position.setFromSpherical(earthSpherical);
scene.add(earth);

const cloudsTexture = new THREE.TextureLoader().load(cloudsTextureURL);
const cloudsMaterial = new THREE.MeshPhongMaterial({
  map: cloudsTexture,
  opacity: 0.5,
  transparent: true,
  blending: THREE.AdditiveBlending,
  shininess: 0
});
const cloudsGeometry = new THREE.SphereBufferGeometry(earthRadius * 1.01, sphereSegmentsHor, sphereSegmentsVer);
const cloudsMesh = new THREE.Mesh(cloudsGeometry, cloudsMaterial);
earthMesh.add(cloudsMesh);

const earthcameraFocus = new THREE.Vector3();
const earthcameraFocusOffset = new THREE.Vector3().setFromSphericalCoords(earthRadius, PI / 2, earthSpherical.theta + PI / 2);
const earthcameraPosition = new THREE.Spherical(0.03, PI / 2.1, PI * 0.8);

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
const mars = new THREE.Object3D();
mars.add(marsMesh);
mars.position.setFromSpherical(marsSpherical);
scene.add(mars);

const marscameraFocus = new THREE.Vector3();
const marscameraFocusOffset = new THREE.Vector3().setFromSphericalCoords(marsRadius, PI / 2, marsSpherical.theta - PI / 2);
const marscameraPosition = new THREE.Spherical();

// Jupiter
const jupiterTexture = new THREE.TextureLoader().load(jupiterTextureURL);
const jupiterMaterial = new THREE.MeshPhongMaterial({ map: jupiterTexture, shininess: 0 });
const jupiterGeometry = new THREE.SphereBufferGeometry(jupiterRadius, sphereSegmentsHor, sphereSegmentsVer);
const jupiterMesh = new THREE.Mesh(jupiterGeometry, jupiterMaterial);
const jupiterSpherical = new THREE.Spherical(jupiterSunDist, PI / 2, - PI / 2);
const jupiter = new THREE.Object3D();
jupiter.add(jupiterMesh);
jupiter.position.setFromSpherical(jupiterSpherical);
scene.add(jupiter);

const jupitercameraFocus = new THREE.Vector3();
const jupitercameraFocusOffset = new THREE.Vector3().setFromSphericalCoords(jupiterRadius, PI / 2, jupiterSpherical.theta + PI / 2);
const jupitercameraPosition = new THREE.Spherical();

// Saturn
const saturnTexture = new THREE.TextureLoader().load(saturnTextureURL);
const saturnMaterial = new THREE.MeshPhongMaterial({ map: saturnTexture, shininess: 0 });
const saturnGeometry = new THREE.SphereBufferGeometry(saturnRadius, sphereSegmentsHor, sphereSegmentsVer);
const saturnMesh = new THREE.Mesh(saturnGeometry, saturnMaterial);
const saturnSpherical = new THREE.Spherical(saturnSunDist, PI / 2, - PI / 4);
const saturn = new THREE.Object3D();
saturn.add(saturnMesh);
saturn.position.setFromSpherical(saturnSpherical);
saturnMesh.rotation.z = PI * 0.1485;
saturnMesh.rotation.y = - PI * 0.1485;
scene.add(saturn);

const saturnRingTexture = new THREE.TextureLoader().load(saturnRingTextureURL);
const saturnRingMaterial = new THREE.MeshBasicMaterial({
  map: saturnRingTexture,
  color: 0xffffff,
  side: THREE.DoubleSide,
  transparent: true
});
const saturnRingGeometry = new THREE.RingBufferGeometry(saturnRadius * 1.3062, saturnRadius * 2.2859, sphereSegmentsHor);
const pos = saturnRingGeometry.attributes.position;
const v3 = new THREE.Vector3();
for (let i = 0; i < pos.count; i++) {
  v3.fromBufferAttribute(pos, i);
  saturnRingGeometry.attributes.uv.setXY(i, v3.length() < saturnRadius * 1.79605 ? 0 : 1, 1);
}
const saturnRingMesh = new THREE.Mesh(saturnRingGeometry, saturnRingMaterial);
saturnRingMesh.rotation.x = PI / 2;
saturnMesh.add(saturnRingMesh);

const saturncameraFocus = new THREE.Vector3();
const saturncameraFocusOffset = new THREE.Vector3().setFromSphericalCoords(saturnRadius, PI / 2, saturnSpherical.theta - PI / 2);
const saturncameraPosition = new THREE.Spherical();

// Uranus
const uranusTexture = new THREE.TextureLoader().load(uranusTextureURL);
const uranusMaterial = new THREE.MeshPhongMaterial({ map: uranusTexture, shininess: 0 });
const uranusGeometry = new THREE.SphereBufferGeometry(uranusRadius, sphereSegmentsHor, sphereSegmentsVer);
const uranusMesh = new THREE.Mesh(uranusGeometry, uranusMaterial);
const uranusSpherical = new THREE.Spherical(uranusSunDist, PI / 2, PI);
const uranus = new THREE.Object3D();
uranus.add(uranusMesh);
uranus.position.setFromSpherical(uranusSpherical);
uranusMesh.rotation.z = - PI / 2;
uranusMesh.rotation.y = - PI / 4;
scene.add(uranus);

const uranuscameraFocus = new THREE.Vector3();
const uranuscameraFocusOffset = new THREE.Vector3().setFromSphericalCoords(uranusRadius, PI / 2, uranusSpherical.theta + PI / 2);
const uranuscameraPosition = new THREE.Spherical();

// Neptune
const neptuneTexture = new THREE.TextureLoader().load(neptuneTextureURL);
const neptuneMaterial = new THREE.MeshPhongMaterial({ map: neptuneTexture, shininess: 0 });
const neptuneGeometry = new THREE.SphereBufferGeometry(neptuneRadius, sphereSegmentsHor, sphereSegmentsVer);
const neptuneMesh = new THREE.Mesh(neptuneGeometry, neptuneMaterial);
const neptuneSpherical = new THREE.Spherical(neptuneSunDist, PI / 2, - 3 * PI / 4);
const neptune = new THREE.Object3D();
neptune.add(neptuneMesh);
neptune.position.setFromSpherical(neptuneSpherical);
scene.add(neptune);

const neptunecameraFocus = new THREE.Vector3();
const neptunecameraFocusOffset = new THREE.Vector3().setFromSphericalCoords(neptuneRadius, PI / 2, neptuneSpherical.theta - PI / 2);
const neptunecameraPosition = new THREE.Spherical();



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
/* controls.autoRotate = false;
controls.autoRotateSpeed = -0.5; */



// MEDIA QUERY //

function mobileMediaChange(mediaQuery) {

  if (mediaQuery.matches) {

    // If media query matches
    mercury.cameraFocus.set(...mercury.planet.position);
    venuscameraFocus.set(...venus.position);
    earthcameraFocus.set(...earth.position);
    marscameraFocus.set(...mars.position);
    jupitercameraFocus.set(...jupiter.position);
    saturncameraFocus.set(...saturn.position);
    uranuscameraFocus.set(...uranus.position);
    neptunecameraFocus.set(...neptune.position);
    testSun.cameraFocus.set(...testSun.sun.position);

    welcomecameraPosition.set(testSun.radius * 6, PI / 2.05, PI / 100);
    mercury.cameraPosition.set(mercury.radius * 6, PI / 2.1, PI * 0.8);
    venuscameraPosition.set(venusRadius * 6, PI / 2.1, PI * 1.4);
    earthcameraPosition.set(earthRadius * 6, PI / 2.1, PI * 0.8);
    marscameraPosition.set(marsRadius * 6, PI / 2.1, PI * 1.7);
    jupitercameraPosition.set(jupiterRadius * 6, PI / 2.1, PI * 0.3);
    saturncameraPosition.set(saturnRadius * 6, PI / 2.1, PI * 1);
    uranuscameraPosition.set(uranusRadius * 6, PI / 2.1, PI * (-0.2));
    neptunecameraPosition.set(neptuneRadius * 6, PI / 2.1, PI * 0.5);
    testSun.cameraPosition.set(testSun.radius * 6, PI / 2, 5 * PI / 4);

    onScrollAnimation();

  } else {

    // If media query doesn't match
    mercury.cameraFocus.set(...new THREE.Vector3(...mercury.planet.position).add(
      new THREE.Vector3().setFromSphericalCoords(mercuryRadius, PI / 2, mercuryPosition.theta + PI / 2)
    ));
    venuscameraFocus.set(
      venus.position.x + venuscameraFocusOffset.x,
      venus.position.y + venuscameraFocusOffset.y,
      venus.position.z + venuscameraFocusOffset.z
    );
    earthcameraFocus.set(
      earth.position.x + earthcameraFocusOffset.x,
      earth.position.y + earthcameraFocusOffset.y,
      earth.position.z + earthcameraFocusOffset.z
    );
    marscameraFocus.set(
      mars.position.x + marscameraFocusOffset.x,
      mars.position.y + marscameraFocusOffset.y,
      mars.position.z + marscameraFocusOffset.z
    );
    jupitercameraFocus.set(
      jupiter.position.x + jupitercameraFocusOffset.x,
      jupiter.position.y + jupitercameraFocusOffset.y,
      jupiter.position.z + jupitercameraFocusOffset.z
    );
    saturncameraFocus.set(
      saturn.position.x + saturncameraFocusOffset.x,
      saturn.position.y + saturncameraFocusOffset.y,
      saturn.position.z + saturncameraFocusOffset.z
    );
    uranuscameraFocus.set(
      uranus.position.x + uranuscameraFocusOffset.x,
      uranus.position.y + uranuscameraFocusOffset.y,
      uranus.position.z + uranuscameraFocusOffset.z
    );
    neptunecameraFocus.set(
      neptune.position.x + neptunecameraFocusOffset.x,
      neptune.position.y + neptunecameraFocusOffset.y,
      neptune.position.z + neptunecameraFocusOffset.z
    );
    testSun.cameraFocus.set(...testSun.sun.position);

    welcomecameraPosition.set(testSun.radius * 5, PI / 2.005, PI / 1000);
    mercury.cameraPosition.set(mercury.radius * 3, PI / 2.1, PI * 0.8);
    venuscameraPosition.set(venusRadius * 3, PI / 2.1, PI * 1.4);
    earthcameraPosition.set(earthRadius * 3, PI / 2.1, PI * 0.8);
    marscameraPosition.set(marsRadius * 3, PI / 2.1, PI * 1.7);
    jupitercameraPosition.set(jupiterRadius * 3, PI / 2.1, PI * 0.3);
    saturncameraPosition.set(saturnRadius * 3, PI / 2.1, PI * 1);
    uranuscameraPosition.set(uranusRadius * 3, PI / 2.1, PI * (-0.2));
    neptunecameraPosition.set(neptuneRadius * 3, PI / 2.1, PI * 0.5);
    testSun.cameraPosition.set(testSun.radius * 3, PI / 2, 5 * PI / 4);

    onScrollAnimation();

  }

}

mobileMediaChange(mobile);



// ANIMATION //

function animation() {

  const timeDelta = clock.getDelta();

  stars.rotateY(- timeDelta * 0.02);

  testSun.update(renderer, clock.elapsedTime);
  testSun.corona.lookAt(camera.position);

  mercury.mesh.rotateY(timeDelta * 0.1);
  venusMesh.rotateY(timeDelta * 0.1);
  earthMesh.rotateY(timeDelta * 0.1);
  marsMesh.rotateY(timeDelta * 0.1);
  jupiterMesh.rotateY(timeDelta * 0.1);
  saturnMesh.rotateY(timeDelta * 0.1);
  uranusMesh.rotateY(timeDelta * (- 0.1));
  neptuneMesh.rotateY(timeDelta * 0.1);

  mercury.planet.rotation.y = mouse.x / 2;
  venus.rotation.y = mouse.x / 2;
  earth.rotation.y = mouse.x / 2;
  mars.rotation.y = mouse.x / 2;
  jupiter.rotation.y = mouse.x / 2;
  saturn.rotation.y = mouse.x / 2;
  uranus.rotation.y = mouse.x / 2;
  neptune.rotation.y = mouse.x / 2;

  controls.target.set(...cameraFocus);
  controls.update();
  // camera.lookAt(...cameraFocus);

  renderer.render(scene, camera);

}

animation();



// ON SCROLL ANIMATION //

function onScrollAnimation() {

  const s = window.pageYOffset;

  // Init
  if (s === 0) {
    cameraFocus.set(...testSun.cameraFocus);
    cameraPosition.setFromSpherical(welcomecameraPosition);
    camera.position.set(
      cameraFocus.x + cameraPosition.x,
      cameraFocus.y + cameraPosition.y,
      cameraFocus.z + cameraPosition.z
    );
  }

  // To Mercury animation
  let start = 0;
  let end = (window.pageYOffset + toMercurySection.getBoundingClientRect().bottom) - window.innerHeight;
  if (start < s && s <= end) {
    const interval = end - start;
    cameraFocus.set(
      mercury.cameraFocus.x * easeInOutQuint((s - start) / interval),
      mercury.cameraFocus.y * easeInOutQuint((s - start) / interval),
      mercury.cameraFocus.z * easeInOutQuint((s - start) / interval)
    );
    cameraPosition.setFromSphericalCoords(
      welcomecameraPosition.radius + (mercury.cameraPosition.radius - welcomecameraPosition.radius) * easeInOutQuint((s - start) / interval),
      welcomecameraPosition.phi + (mercury.cameraPosition.phi - welcomecameraPosition.phi) * easeInOutQuint((s - start) / interval),
      welcomecameraPosition.theta + (mercury.cameraPosition.theta - welcomecameraPosition.theta) * easeInOutQuint((s - start) / interval)
    );
    camera.position.set(
      cameraFocus.x + cameraPosition.x,
      cameraFocus.y + cameraPosition.y,
      cameraFocus.z + cameraPosition.z
    );
  }

  // Mercury shot
  start = (window.pageYOffset + toMercurySection.getBoundingClientRect().bottom) - window.innerHeight;
  end = (window.pageYOffset + mercurySection.getBoundingClientRect().bottom);
  if (start < s && s <= end) {
    cameraFocus.set(...mercury.cameraFocus);
    cameraPosition.setFromSpherical(mercury.cameraPosition);
    camera.position.set(
      cameraFocus.x + cameraPosition.x,
      cameraFocus.y + cameraPosition.y,
      cameraFocus.z + cameraPosition.z
    );
  }

  // To Venus animation
  start = (window.pageYOffset + mercurySection.getBoundingClientRect().bottom);
  end = (window.pageYOffset + toVenusSection.getBoundingClientRect().bottom) - window.innerHeight;
  if (start < s && s <= end) {
    const interval = end - start;
    cameraFocus.set(
      mercury.cameraFocus.x + (venuscameraFocus.x - mercury.cameraFocus.x) * easeInOutQuint((s - start) / interval),
      mercury.cameraFocus.y + (venuscameraFocus.y - mercury.cameraFocus.y) * easeInOutQuint((s - start) / interval),
      mercury.cameraFocus.z + (venuscameraFocus.z - mercury.cameraFocus.z) * easeInOutQuint((s - start) / interval)
    );
    if (start < s && s <= start + interval / 2) {
      cameraPosition.setFromSphericalCoords(
        mercury.cameraPosition.radius + 10 * easeInOutQuint((s - start) / interval),
        mercury.cameraPosition.phi + (venuscameraPosition.phi - mercury.cameraPosition.phi) * easeInOutQuint((s - start) / interval),
        mercury.cameraPosition.theta + (venuscameraPosition.theta - mercury.cameraPosition.theta) * easeInOutQuint((s - start) / interval)
      );
    }
    if (start + interval / 2 < s && s <= end) {
      cameraPosition.setFromSphericalCoords(
        (mercury.cameraPosition.radius + 10) + venuscameraPosition.radius - (mercury.cameraPosition.radius + 10) * easeInOutQuint((s - start) / interval),
        mercury.cameraPosition.phi + (venuscameraPosition.phi - mercury.cameraPosition.phi) * easeInOutQuint((s - start) / interval),
        mercury.cameraPosition.theta + (venuscameraPosition.theta - mercury.cameraPosition.theta) * easeInOutQuint((s - start) / interval)
      );
    }
    camera.position.set(
      cameraFocus.x + cameraPosition.x,
      cameraFocus.y + cameraPosition.y,
      cameraFocus.z + cameraPosition.z
    );
  }

  // Venus shot
  start = (window.pageYOffset + toVenusSection.getBoundingClientRect().bottom) - window.innerHeight;
  end = (window.pageYOffset + venusSection.getBoundingClientRect().bottom);
  if (start < s && s <= end) {
    cameraFocus.set(...venuscameraFocus);
    cameraPosition.setFromSpherical(venuscameraPosition);
    camera.position.set(
      cameraFocus.x + cameraPosition.x,
      cameraFocus.y + cameraPosition.y,
      cameraFocus.z + cameraPosition.z
    );
  }

  // To Earth animation
  start = (window.pageYOffset + venusSection.getBoundingClientRect().bottom);
  end = (window.pageYOffset + toEarthSection.getBoundingClientRect().bottom) - window.innerHeight;
  if (start < s && s <= end) {
    const interval = end - start;
    cameraFocus.set(
      venuscameraFocus.x + (earthcameraFocus.x - venuscameraFocus.x) * easeInOutQuint((s - start) / interval),
      venuscameraFocus.y + (earthcameraFocus.y - venuscameraFocus.y) * easeInOutQuint((s - start) / interval),
      venuscameraFocus.z + (earthcameraFocus.z - venuscameraFocus.z) * easeInOutQuint((s - start) / interval)
    );
    if (start < s && s <= start + interval / 2) {
      cameraPosition.setFromSphericalCoords(
        venuscameraPosition.radius + 10 * easeInOutQuint((s - start) / interval),
        venuscameraPosition.phi + (earthcameraPosition.phi - venuscameraPosition.phi) * easeInOutQuint((s - start) / interval),
        venuscameraPosition.theta + (earthcameraPosition.theta - venuscameraPosition.theta) * easeInOutQuint((s - start) / interval)
      );
    }
    if (start + interval / 2 < s && s <= end) {
      cameraPosition.setFromSphericalCoords(
        (venuscameraPosition.radius + 10) + earthcameraPosition.radius - (venuscameraPosition.radius + 10) * easeInOutQuint((s - start) / interval),
        venuscameraPosition.phi + (earthcameraPosition.phi - venuscameraPosition.phi) * easeInOutQuint((s - start) / interval),
        venuscameraPosition.theta + (earthcameraPosition.theta - venuscameraPosition.theta) * easeInOutQuint((s - start) / interval)
      );
    }
    camera.position.set(
      cameraFocus.x + cameraPosition.x,
      cameraFocus.y + cameraPosition.y,
      cameraFocus.z + cameraPosition.z
    );
  }

  // Earth shot
  start = (window.pageYOffset + toEarthSection.getBoundingClientRect().bottom) - window.innerHeight;
  end = (window.pageYOffset + earthSection.getBoundingClientRect().bottom);
  if (start < s && s <= end) {
    cameraFocus.set(...earthcameraFocus);
    cameraPosition.setFromSpherical(earthcameraPosition);
    camera.position.set(
      cameraFocus.x + cameraPosition.x,
      cameraFocus.y + cameraPosition.y,
      cameraFocus.z + cameraPosition.z
    );
  }

  // To Mars animation
  start = (window.pageYOffset + earthSection.getBoundingClientRect().bottom);
  end = (window.pageYOffset + toMarsSection.getBoundingClientRect().bottom) - window.innerHeight;
  if (start < s && s <= end) {
    const interval = end - start;
    cameraFocus.set(
      earthcameraFocus.x + (marscameraFocus.x - earthcameraFocus.x) * easeInOutQuint((s - start) / interval),
      earthcameraFocus.y + (marscameraFocus.y - earthcameraFocus.y) * easeInOutQuint((s - start) / interval),
      earthcameraFocus.z + (marscameraFocus.z - earthcameraFocus.z) * easeInOutQuint((s - start) / interval)
    );
    if (start < s && s <= start + interval / 2) {
      cameraPosition.setFromSphericalCoords(
        earthcameraPosition.radius + 10 * easeInOutQuint((s - start) / interval),
        earthcameraPosition.phi + (marscameraPosition.phi - earthcameraPosition.phi) * easeInOutQuint((s - start) / interval),
        earthcameraPosition.theta + (marscameraPosition.theta - earthcameraPosition.theta) * easeInOutQuint((s - start) / interval)
      );
    }
    if (start + interval / 2 < s && s <= end) {
      cameraPosition.setFromSphericalCoords(
        (earthcameraPosition.radius + 10) + marscameraPosition.radius - (earthcameraPosition.radius + 10) * easeInOutQuint((s - start) / interval),
        earthcameraPosition.phi + (marscameraPosition.phi - earthcameraPosition.phi) * easeInOutQuint((s - start) / interval),
        earthcameraPosition.theta + (marscameraPosition.theta - earthcameraPosition.theta) * easeInOutQuint((s - start) / interval)
      );
    }
    camera.position.set(
      cameraFocus.x + cameraPosition.x,
      cameraFocus.y + cameraPosition.y,
      cameraFocus.z + cameraPosition.z
    );
  }

  // Mars shot
  start = (window.pageYOffset + toMarsSection.getBoundingClientRect().bottom) - window.innerHeight;
  end = (window.pageYOffset + marsSection.getBoundingClientRect().bottom);
  if (start < s && s <= end) {
    cameraFocus.set(...marscameraFocus);
    cameraPosition.setFromSpherical(marscameraPosition);
    camera.position.set(
      cameraFocus.x + cameraPosition.x,
      cameraFocus.y + cameraPosition.y,
      cameraFocus.z + cameraPosition.z
    );
  }

  // To Jupiter animation
  start = (window.pageYOffset + marsSection.getBoundingClientRect().bottom);
  end = (window.pageYOffset + toJupiterSection.getBoundingClientRect().bottom) - window.innerHeight;
  if (start < s && s <= end) {
    const interval = end - start;
    cameraFocus.set(
      marscameraFocus.x + (jupitercameraFocus.x - marscameraFocus.x) * easeInOutQuint((s - start) / interval),
      marscameraFocus.y + (jupitercameraFocus.y - marscameraFocus.y) * easeInOutQuint((s - start) / interval),
      marscameraFocus.z + (jupitercameraFocus.z - marscameraFocus.z) * easeInOutQuint((s - start) / interval)
    );
    if (start < s && s <= start + interval / 2) {
      cameraPosition.setFromSphericalCoords(
        marscameraPosition.radius + 100 * easeInOutQuint((s - start) / interval),
        marscameraPosition.phi + (jupitercameraPosition.phi - marscameraPosition.phi) * easeInOutQuint((s - start) / interval),
        marscameraPosition.theta + (jupitercameraPosition.theta - marscameraPosition.theta) * easeInOutQuint((s - start) / interval)
      );
    }
    if (start + interval / 2 < s && s <= end) {
      cameraPosition.setFromSphericalCoords(
        (marscameraPosition.radius + 100) + jupitercameraPosition.radius - (marscameraPosition.radius + 100) * easeInOutQuint((s - start) / interval),
        marscameraPosition.phi + (jupitercameraPosition.phi - marscameraPosition.phi) * easeInOutQuint((s - start) / interval),
        marscameraPosition.theta + (jupitercameraPosition.theta - marscameraPosition.theta) * easeInOutQuint((s - start) / interval)
      );
    }
    camera.position.set(
      cameraFocus.x + cameraPosition.x,
      cameraFocus.y + cameraPosition.y,
      cameraFocus.z + cameraPosition.z
    );
  }

  // Jupiter shot
  start = (window.pageYOffset + toJupiterSection.getBoundingClientRect().bottom) - window.innerHeight;
  end = (window.pageYOffset + jupiterSection.getBoundingClientRect().bottom);
  if (start < s && s <= end) {
    cameraFocus.set(...jupitercameraFocus);
    cameraPosition.setFromSpherical(jupitercameraPosition);
    camera.position.set(
      cameraFocus.x + cameraPosition.x,
      cameraFocus.y + cameraPosition.y,
      cameraFocus.z + cameraPosition.z
    );
  }

  // To Saturn animation
  start = (window.pageYOffset + jupiterSection.getBoundingClientRect().bottom);
  end = (window.pageYOffset + toSaturnSection.getBoundingClientRect().bottom) - window.innerHeight;
  if (start < s && s <= end) {
    const interval = end - start;
    cameraFocus.set(
      jupitercameraFocus.x + (saturncameraFocus.x - jupitercameraFocus.x) * easeInOutQuint((s - start) / interval),
      jupitercameraFocus.y + (saturncameraFocus.y - jupitercameraFocus.y) * easeInOutQuint((s - start) / interval),
      jupitercameraFocus.z + (saturncameraFocus.z - jupitercameraFocus.z) * easeInOutQuint((s - start) / interval)
    );
    if (start < s && s <= start + interval / 2) {
      cameraPosition.setFromSphericalCoords(
        jupitercameraPosition.radius + 100 * easeInOutQuint((s - start) / interval),
        jupitercameraPosition.phi + (saturncameraPosition.phi - jupitercameraPosition.phi) * easeInOutQuint((s - start) / interval),
        jupitercameraPosition.theta + (saturncameraPosition.theta - jupitercameraPosition.theta) * easeInOutQuint((s - start) / interval)
      );
    }
    if (start + interval / 2 < s && s <= end) {
      cameraPosition.setFromSphericalCoords(
        (jupitercameraPosition.radius + 100) + saturncameraPosition.radius - (jupitercameraPosition.radius + 100) * easeInOutQuint((s - start) / interval),
        jupitercameraPosition.phi + (saturncameraPosition.phi - jupitercameraPosition.phi) * easeInOutQuint((s - start) / interval),
        jupitercameraPosition.theta + (saturncameraPosition.theta - jupitercameraPosition.theta) * easeInOutQuint((s - start) / interval)
      );
    }
    camera.position.set(
      cameraFocus.x + cameraPosition.x,
      cameraFocus.y + cameraPosition.y,
      cameraFocus.z + cameraPosition.z
    );
  }

  // Saturn shot
  start = (window.pageYOffset + toSaturnSection.getBoundingClientRect().bottom) - window.innerHeight;
  end = (window.pageYOffset + saturnSection.getBoundingClientRect().bottom);
  if (start < s && s <= end) {
    cameraFocus.set(...saturncameraFocus);
    cameraPosition.setFromSpherical(saturncameraPosition);
    camera.position.set(
      cameraFocus.x + cameraPosition.x,
      cameraFocus.y + cameraPosition.y,
      cameraFocus.z + cameraPosition.z
    );
  }

  // To Uranus animation
  start = (window.pageYOffset + saturnSection.getBoundingClientRect().bottom);
  end = (window.pageYOffset + toUranusSection.getBoundingClientRect().bottom) - window.innerHeight;
  if (start < s && s <= end) {
    const interval = end - start;
    cameraFocus.set(
      saturncameraFocus.x + (uranuscameraFocus.x - saturncameraFocus.x) * easeInOutQuint((s - start) / interval),
      saturncameraFocus.y + (uranuscameraFocus.y - saturncameraFocus.y) * easeInOutQuint((s - start) / interval),
      saturncameraFocus.z + (uranuscameraFocus.z - saturncameraFocus.z) * easeInOutQuint((s - start) / interval)
    );
    if (start < s && s <= start + interval / 2) {
      cameraPosition.setFromSphericalCoords(
        saturncameraPosition.radius + 100 * easeInOutQuint((s - start) / interval),
        saturncameraPosition.phi + (uranuscameraPosition.phi - saturncameraPosition.phi) * easeInOutQuint((s - start) / interval),
        saturncameraPosition.theta + (uranuscameraPosition.theta - saturncameraPosition.theta) * easeInOutQuint((s - start) / interval)
      );
    }
    if (start + interval / 2 < s && s <= end) {
      cameraPosition.setFromSphericalCoords(
        (saturncameraPosition.radius + 100) + uranuscameraPosition.radius - (saturncameraPosition.radius + 100) * easeInOutQuint((s - start) / interval),
        saturncameraPosition.phi + (uranuscameraPosition.phi - saturncameraPosition.phi) * easeInOutQuint((s - start) / interval),
        saturncameraPosition.theta + (uranuscameraPosition.theta - saturncameraPosition.theta) * easeInOutQuint((s - start) / interval)
      );
    }
    camera.position.set(
      cameraFocus.x + cameraPosition.x,
      cameraFocus.y + cameraPosition.y,
      cameraFocus.z + cameraPosition.z
    );
  }

  // Uranus shot
  start = (window.pageYOffset + toUranusSection.getBoundingClientRect().bottom) - window.innerHeight;
  end = (window.pageYOffset + uranusSection.getBoundingClientRect().bottom);
  if (start < s && s <= end) {
    cameraFocus.set(...uranuscameraFocus);
    cameraPosition.setFromSpherical(uranuscameraPosition);
    camera.position.set(
      cameraFocus.x + cameraPosition.x,
      cameraFocus.y + cameraPosition.y,
      cameraFocus.z + cameraPosition.z
    );
  }

  // To Neptune animation
  start = (window.pageYOffset + uranusSection.getBoundingClientRect().bottom);
  end = (window.pageYOffset + toNeptuneSection.getBoundingClientRect().bottom) - window.innerHeight;
  if (start < s && s <= end) {
    const interval = end - start;
    cameraFocus.set(
      uranuscameraFocus.x + (neptunecameraFocus.x - uranuscameraFocus.x) * easeInOutQuint((s - start) / interval),
      uranuscameraFocus.y + (neptunecameraFocus.y - uranuscameraFocus.y) * easeInOutQuint((s - start) / interval),
      uranuscameraFocus.z + (neptunecameraFocus.z - uranuscameraFocus.z) * easeInOutQuint((s - start) / interval)
    );
    if (start < s && s <= start + interval / 2) {
      cameraPosition.setFromSphericalCoords(
        uranuscameraPosition.radius + 200 * easeInOutQuint((s - start) / interval),
        uranuscameraPosition.phi + (neptunecameraPosition.phi - uranuscameraPosition.phi) * easeInOutQuint((s - start) / interval),
        uranuscameraPosition.theta + (neptunecameraPosition.theta - uranuscameraPosition.theta) * easeInOutQuint((s - start) / interval)
      );
    }
    if (start + interval / 2 < s && s <= end) {
      cameraPosition.setFromSphericalCoords(
        (uranuscameraPosition.radius + 200) + neptunecameraPosition.radius - (uranuscameraPosition.radius + 200) * easeInOutQuint((s - start) / interval),
        uranuscameraPosition.phi + (neptunecameraPosition.phi - uranuscameraPosition.phi) * easeInOutQuint((s - start) / interval),
        uranuscameraPosition.theta + (neptunecameraPosition.theta - uranuscameraPosition.theta) * easeInOutQuint((s - start) / interval)
      );
    }
    camera.position.set(
      cameraFocus.x + cameraPosition.x,
      cameraFocus.y + cameraPosition.y,
      cameraFocus.z + cameraPosition.z
    );
  }

  // Neptune shot
  start = (window.pageYOffset + toNeptuneSection.getBoundingClientRect().bottom) - window.innerHeight;
  end = (window.pageYOffset + neptuneSection.getBoundingClientRect().bottom);
  if (start < s && s <= end) {
    cameraFocus.set(...neptunecameraFocus);
    cameraPosition.setFromSpherical(neptunecameraPosition);
    camera.position.set(
      cameraFocus.x + cameraPosition.x,
      cameraFocus.y + cameraPosition.y,
      cameraFocus.z + cameraPosition.z
    );
  }

  // To Sun animation
  start = (window.pageYOffset + neptuneSection.getBoundingClientRect().bottom);
  end = (window.pageYOffset + toSunSection.getBoundingClientRect().bottom) - window.innerHeight;
  if (start < s && s <= end) {
    const interval = end - start;
    cameraFocus.set(
      neptunecameraFocus.x + (testSun.cameraFocus.x - neptunecameraFocus.x) * easeInOutQuint((s - start) / interval),
      neptunecameraFocus.y + (testSun.cameraFocus.y - neptunecameraFocus.y) * easeInOutQuint((s - start) / interval),
      neptunecameraFocus.z + (testSun.cameraFocus.z - neptunecameraFocus.z) * easeInOutQuint((s - start) / interval)
    );
    if (start < s && s <= start + interval / 2) {
      cameraPosition.setFromSphericalCoords(
        neptunecameraPosition.radius + 0 * easeInOutQuint((s - start) / interval),
        neptunecameraPosition.phi + (testSun.cameraPosition.phi - neptunecameraPosition.phi) * easeInOutQuint((s - start) / interval),
        neptunecameraPosition.theta + (testSun.cameraPosition.theta - neptunecameraPosition.theta) * easeInOutQuint((s - start) / interval * 2)
      );
    }
    if (start + interval / 2 < s && s <= end) {
      cameraPosition.setFromSphericalCoords(
        (neptunecameraPosition.radius + 0) + testSun.cameraPosition.radius - (neptunecameraPosition.radius + 0) * easeInOutQuint((s - start) / interval),
        neptunecameraPosition.phi + (testSun.cameraPosition.phi - neptunecameraPosition.phi) * easeInOutQuint((s - start) / interval),
        testSun.cameraPosition.theta
      );
    }
    camera.position.set(
      cameraFocus.x + cameraPosition.x,
      cameraFocus.y + cameraPosition.y,
      cameraFocus.z + cameraPosition.z
    );
  }

  // Sun shot
  start = (window.pageYOffset + toSunSection.getBoundingClientRect().bottom) - window.innerHeight;
  end = (window.pageYOffset + sunSection.getBoundingClientRect().bottom);
  if (start < s && s <= end) {
    cameraFocus.set(...testSun.cameraFocus);
    cameraPosition.setFromSpherical(testSun.cameraPosition);
    camera.position.set(
      cameraFocus.x + cameraPosition.x,
      cameraFocus.y + cameraPosition.y,
      cameraFocus.z + cameraPosition.z
    );
  }

}

window.addEventListener('scroll', onScrollAnimation);



// WINDOW RESIZE //

function onWindowResize() {
  camera.aspect = window.innerWidth / window.innerHeight;
  camera.updateProjectionMatrix();
  renderer.setSize(window.innerWidth, window.innerHeight);
  mobileMediaChange(mobile);
}

window.addEventListener("resize", onWindowResize, false);
