import * as THREE from 'three';
// import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js';
import { PI, easeInOutQuint } from "/modules/math.js";
import createStars from '/modules/createStars.js';
import Sun from '/modules/sun.js';
import Planet from '/modules/planet.js';
import PlanetWithClouds from '/modules/planetWithClouds.js';
import PlanetWithRing from '/modules/planetWithRing.js';
import Moon from '/modules/moon.js';



// INIT //

// const welcomeSection = document.querySelector('#welcome');
const mercurySection = document.querySelector('#mercury');
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

const mobile = window.matchMedia("(max-width: 1023px)"); // Mobile media query

const scalingFactor = 10;

let sphereSegments;
mobile.matches ? sphereSegments = 32 : sphereSegments = 64;

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



const orientationPermissionButton = document.querySelector('#orientation-permission-button');

function deviceOrientationHandler(event) {
  if (window.innerWidth < window.innerHeight) {
    mouse.x = event.gamma / 90;
  } else {
    mouse.x = event.beta * 2 / 180;
  }
}

function orientationPermissionHandler() {
  if (typeof DeviceOrientationEvent.requestPermission === 'function') {
    // Handle iOS 13+ devices.
    DeviceOrientationEvent.requestPermission()
      .then((state) => {
        if (state === 'granted') {
          window.addEventListener('deviceorientation', deviceOrientationHandler);
          orientationPermissionButton.remove();
        } else {
          console.error('Request to access the orientation was rejected');
        }
      })
      .catch(console.error);
  } else {
    // Handle regular non iOS 13+ devices.
    window.addEventListener('deviceorientation', deviceOrientationHandler);
    orientationPermissionButton.remove();
  }
}

orientationPermissionButton.addEventListener('click', orientationPermissionHandler);

const stars = createStars({
  fromDistance: 500,
  forDistance: 500,
  amount: 10000
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

/* const gridHelper = new THREE.GridHelper(10, 50);
scene.add(gridHelper); */

const camera = new THREE.PerspectiveCamera(45, window.innerWidth / window.innerHeight, 0.001, 2000);
const cameraFocus = new THREE.Vector3();
const cameraPosition = new THREE.Vector3();
const welcomecameraPosition = new THREE.Spherical();

const scene = new THREE.Scene();
scene.add(stars, sun.corona, sun.object, mercury.object, venus.object, earth.object, moon.object, mars.object, jupiter.object, saturn.object, uranus.object, neptune.object);

const renderer = new THREE.WebGLRenderer({ antialias: true });
renderer.setPixelRatio(window.devicePixelRatio);
renderer.setSize(window.innerWidth, window.innerHeight);
renderer.outputEncoding = THREE.sRGBEncoding;
renderer.physicallyCorrectLights = false;
renderer.setAnimationLoop(animate);
document.body.appendChild(renderer.domElement);

// const controls = new OrbitControls(camera, renderer.domElement);
/* controls.autoRotate = false;
controls.autoRotateSpeed = -0.5; */

function handleMediaChange(mediaQuery) {
  if (mediaQuery.matches) {
    mercury.cameraFocus.set(...mercury.object.position);
    venus.cameraFocus.set(...venus.object.position);
    earth.cameraFocus.set(...earth.object.position);
    mars.cameraFocus.set(...mars.object.position);
    jupiter.cameraFocus.set(...jupiter.object.position);
    saturn.cameraFocus.set(...saturn.object.position);
    uranus.cameraFocus.set(...uranus.object.position);
    neptune.cameraFocus.set(...neptune.object.position);
    sun.cameraFocus.set(...sun.object.position);

    welcomecameraPosition.set(sun.radius * 6, PI / 2.05, PI / 100);
    mercury.cameraPosition.set(mercury.radius * 6, PI / 2.1, PI * 0.8);
    venus.cameraPosition.set(venus.radius * 6, PI / 2.1, PI * 1.4);
    earth.cameraPosition.set(earth.radius * 6, PI / 2.1, PI * 0.8);
    mars.cameraPosition.set(mars.radius * 6, PI / 2.1, PI * 1.7);
    jupiter.cameraPosition.set(jupiter.radius * 6, PI / 2.1, PI * 0.3);
    saturn.cameraPosition.set(saturn.radius * 6, PI / 2.1, PI * 1);
    uranus.cameraPosition.set(uranus.radius * 6, PI / 2.1, PI * (-0.2));
    neptune.cameraPosition.set(neptune.radius * 6, PI / 2.1, PI * 0.5);
    sun.cameraPosition.set(sun.radius * 6, PI / 2, 5 * PI / 4);

    animateOnScroll();
  } else {
    mercury.cameraFocus.set(...new THREE.Vector3(...mercury.object.position).add(
      new THREE.Vector3().setFromSphericalCoords(mercury.radius, PI / 2, mercury.sphericalPosition.theta + PI / 2)
    ));
    venus.cameraFocus.set(...new THREE.Vector3(...venus.object.position).add(
      new THREE.Vector3().setFromSphericalCoords(venus.radius, PI / 2, venus.sphericalPosition.theta - PI / 2)
    ));
    earth.cameraFocus.set(...new THREE.Vector3(...earth.object.position).add(
      new THREE.Vector3().setFromSphericalCoords(earth.radius, PI / 2, earth.sphericalPosition.theta + PI / 2)
    ));
    mars.cameraFocus.set(...new THREE.Vector3(...mars.object.position).add(
      new THREE.Vector3().setFromSphericalCoords(mars.radius, PI / 2, mars.sphericalPosition.theta - PI / 2)
    ));
    jupiter.cameraFocus.set(...new THREE.Vector3(...jupiter.object.position).add(
      new THREE.Vector3().setFromSphericalCoords(jupiter.radius, PI / 2, jupiter.sphericalPosition.theta + PI / 2)
    ));
    saturn.cameraFocus.set(...new THREE.Vector3(...saturn.object.position).add(
      new THREE.Vector3().setFromSphericalCoords(saturn.radius, PI / 2, saturn.sphericalPosition.theta - PI / 2)
    ));
    uranus.cameraFocus.set(...new THREE.Vector3(...uranus.object.position).add(
      new THREE.Vector3().setFromSphericalCoords(uranus.radius, PI / 2, uranus.sphericalPosition.theta + PI / 2)
    ));
    neptune.cameraFocus.set(...new THREE.Vector3(...neptune.object.position).add(
      new THREE.Vector3().setFromSphericalCoords(neptune.radius, PI / 2, neptune.sphericalPosition.theta - PI / 2)
    ));
    sun.cameraFocus.set(...sun.object.position);

    welcomecameraPosition.set(sun.radius * 5, PI / 2.005, PI / 1000);
    mercury.cameraPosition.set(mercury.radius * 3, PI / 2.1, PI * 0.8);
    venus.cameraPosition.set(venus.radius * 3, PI / 2.1, PI * 1.4);
    earth.cameraPosition.set(earth.radius * 3, PI / 2.1, PI * 0.8);
    mars.cameraPosition.set(mars.radius * 3, PI / 2.1, PI * 1.7);
    jupiter.cameraPosition.set(jupiter.radius * 3, PI / 2.1, PI * 0.3);
    saturn.cameraPosition.set(saturn.radius * 3, PI / 2.1, PI * 1);
    uranus.cameraPosition.set(uranus.radius * 3, PI / 2.1, PI * (-0.2));
    neptune.cameraPosition.set(neptune.radius * 3, PI / 2.1, PI * 0.5);
    sun.cameraPosition.set(sun.radius * 3, PI / 2, 5 * PI / 4);

    animateOnScroll();
  }
}

handleMediaChange(mobile);



function animate() {

  const timeDelta = clock.getDelta();

  stars.rotateY(- timeDelta * 0.02);

  sun.update(renderer, clock.elapsedTime);
  sun.corona.lookAt(camera.position);

  mercury.mesh.rotateY(timeDelta * 0.1);
  venus.mesh.rotateY(timeDelta * 0.1);
  earth.mesh.rotateY(timeDelta * 0.1);
  moon.object.rotateY(timeDelta * 0.1);
  mars.mesh.rotateY(timeDelta * 0.1);
  jupiter.mesh.rotateY(timeDelta * 0.1);
  saturn.mesh.rotateY(timeDelta * 0.1);
  uranus.mesh.rotateY(timeDelta * (- 0.1));
  neptune.mesh.rotateY(timeDelta * 0.1);

  mercury.object.rotation.y = mouse.x / 2;
  venus.object.rotation.y = mouse.x / 2;
  earth.object.rotation.y = mouse.x / 2;
  mars.object.rotation.y = mouse.x / 2;
  jupiter.object.rotation.y = mouse.x / 2;
  saturn.object.rotation.y = mouse.x / 2;
  uranus.object.rotation.y = mouse.x / 2;
  neptune.object.rotation.y = mouse.x / 2;

  // controls.target.set(...cameraFocus);
  // controls.update();
  camera.lookAt(...cameraFocus);

  renderer.render(scene, camera);

}

animate();



function animateOnScroll() {

  const s = window.pageYOffset;

  // Init
  if (s === 0) {
    cameraFocus.set(...sun.cameraFocus);
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
      mercury.cameraFocus.x + (venus.cameraFocus.x - mercury.cameraFocus.x) * easeInOutQuint((s - start) / interval),
      mercury.cameraFocus.y + (venus.cameraFocus.y - mercury.cameraFocus.y) * easeInOutQuint((s - start) / interval),
      mercury.cameraFocus.z + (venus.cameraFocus.z - mercury.cameraFocus.z) * easeInOutQuint((s - start) / interval)
    );
    if (start < s && s <= start + interval / 2) {
      cameraPosition.setFromSphericalCoords(
        mercury.cameraPosition.radius + 10 * easeInOutQuint((s - start) / interval),
        mercury.cameraPosition.phi + (venus.cameraPosition.phi - mercury.cameraPosition.phi) * easeInOutQuint((s - start) / interval),
        mercury.cameraPosition.theta + (venus.cameraPosition.theta - mercury.cameraPosition.theta) * easeInOutQuint((s - start) / interval)
      );
    }
    if (start + interval / 2 < s && s <= end) {
      cameraPosition.setFromSphericalCoords(
        (mercury.cameraPosition.radius + 10) + venus.cameraPosition.radius - (mercury.cameraPosition.radius + 10) * easeInOutQuint((s - start) / interval),
        mercury.cameraPosition.phi + (venus.cameraPosition.phi - mercury.cameraPosition.phi) * easeInOutQuint((s - start) / interval),
        mercury.cameraPosition.theta + (venus.cameraPosition.theta - mercury.cameraPosition.theta) * easeInOutQuint((s - start) / interval)
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
    cameraFocus.set(...venus.cameraFocus);
    cameraPosition.setFromSpherical(venus.cameraPosition);
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
      venus.cameraFocus.x + (earth.cameraFocus.x - venus.cameraFocus.x) * easeInOutQuint((s - start) / interval),
      venus.cameraFocus.y + (earth.cameraFocus.y - venus.cameraFocus.y) * easeInOutQuint((s - start) / interval),
      venus.cameraFocus.z + (earth.cameraFocus.z - venus.cameraFocus.z) * easeInOutQuint((s - start) / interval)
    );
    if (start < s && s <= start + interval / 2) {
      cameraPosition.setFromSphericalCoords(
        venus.cameraPosition.radius + 10 * easeInOutQuint((s - start) / interval),
        venus.cameraPosition.phi + (earth.cameraPosition.phi - venus.cameraPosition.phi) * easeInOutQuint((s - start) / interval),
        venus.cameraPosition.theta + (earth.cameraPosition.theta - venus.cameraPosition.theta) * easeInOutQuint((s - start) / interval)
      );
    }
    if (start + interval / 2 < s && s <= end) {
      cameraPosition.setFromSphericalCoords(
        (venus.cameraPosition.radius + 10) + earth.cameraPosition.radius - (venus.cameraPosition.radius + 10) * easeInOutQuint((s - start) / interval),
        venus.cameraPosition.phi + (earth.cameraPosition.phi - venus.cameraPosition.phi) * easeInOutQuint((s - start) / interval),
        venus.cameraPosition.theta + (earth.cameraPosition.theta - venus.cameraPosition.theta) * easeInOutQuint((s - start) / interval)
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
    cameraFocus.set(...earth.cameraFocus);
    cameraPosition.setFromSpherical(earth.cameraPosition);
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
      earth.cameraFocus.x + (mars.cameraFocus.x - earth.cameraFocus.x) * easeInOutQuint((s - start) / interval),
      earth.cameraFocus.y + (mars.cameraFocus.y - earth.cameraFocus.y) * easeInOutQuint((s - start) / interval),
      earth.cameraFocus.z + (mars.cameraFocus.z - earth.cameraFocus.z) * easeInOutQuint((s - start) / interval)
    );
    if (start < s && s <= start + interval / 2) {
      cameraPosition.setFromSphericalCoords(
        earth.cameraPosition.radius + 10 * easeInOutQuint((s - start) / interval),
        earth.cameraPosition.phi + (mars.cameraPosition.phi - earth.cameraPosition.phi) * easeInOutQuint((s - start) / interval),
        earth.cameraPosition.theta + (mars.cameraPosition.theta - earth.cameraPosition.theta) * easeInOutQuint((s - start) / interval)
      );
    }
    if (start + interval / 2 < s && s <= end) {
      cameraPosition.setFromSphericalCoords(
        (earth.cameraPosition.radius + 10) + mars.cameraPosition.radius - (earth.cameraPosition.radius + 10) * easeInOutQuint((s - start) / interval),
        earth.cameraPosition.phi + (mars.cameraPosition.phi - earth.cameraPosition.phi) * easeInOutQuint((s - start) / interval),
        earth.cameraPosition.theta + (mars.cameraPosition.theta - earth.cameraPosition.theta) * easeInOutQuint((s - start) / interval)
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
    cameraFocus.set(...mars.cameraFocus);
    cameraPosition.setFromSpherical(mars.cameraPosition);
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
      mars.cameraFocus.x + (jupiter.cameraFocus.x - mars.cameraFocus.x) * easeInOutQuint((s - start) / interval),
      mars.cameraFocus.y + (jupiter.cameraFocus.y - mars.cameraFocus.y) * easeInOutQuint((s - start) / interval),
      mars.cameraFocus.z + (jupiter.cameraFocus.z - mars.cameraFocus.z) * easeInOutQuint((s - start) / interval)
    );
    if (start < s && s <= start + interval / 2) {
      cameraPosition.setFromSphericalCoords(
        mars.cameraPosition.radius + 100 * easeInOutQuint((s - start) / interval),
        mars.cameraPosition.phi + (jupiter.cameraPosition.phi - mars.cameraPosition.phi) * easeInOutQuint((s - start) / interval),
        mars.cameraPosition.theta + (jupiter.cameraPosition.theta - mars.cameraPosition.theta) * easeInOutQuint((s - start) / interval)
      );
    }
    if (start + interval / 2 < s && s <= end) {
      cameraPosition.setFromSphericalCoords(
        (mars.cameraPosition.radius + 100) + jupiter.cameraPosition.radius - (mars.cameraPosition.radius + 100) * easeInOutQuint((s - start) / interval),
        mars.cameraPosition.phi + (jupiter.cameraPosition.phi - mars.cameraPosition.phi) * easeInOutQuint((s - start) / interval),
        mars.cameraPosition.theta + (jupiter.cameraPosition.theta - mars.cameraPosition.theta) * easeInOutQuint((s - start) / interval)
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
    cameraFocus.set(...jupiter.cameraFocus);
    cameraPosition.setFromSpherical(jupiter.cameraPosition);
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
      jupiter.cameraFocus.x + (saturn.cameraFocus.x - jupiter.cameraFocus.x) * easeInOutQuint((s - start) / interval),
      jupiter.cameraFocus.y + (saturn.cameraFocus.y - jupiter.cameraFocus.y) * easeInOutQuint((s - start) / interval),
      jupiter.cameraFocus.z + (saturn.cameraFocus.z - jupiter.cameraFocus.z) * easeInOutQuint((s - start) / interval)
    );
    if (start < s && s <= start + interval / 2) {
      cameraPosition.setFromSphericalCoords(
        jupiter.cameraPosition.radius + 100 * easeInOutQuint((s - start) / interval),
        jupiter.cameraPosition.phi + (saturn.cameraPosition.phi - jupiter.cameraPosition.phi) * easeInOutQuint((s - start) / interval),
        jupiter.cameraPosition.theta + (saturn.cameraPosition.theta - jupiter.cameraPosition.theta) * easeInOutQuint((s - start) / interval)
      );
    }
    if (start + interval / 2 < s && s <= end) {
      cameraPosition.setFromSphericalCoords(
        (jupiter.cameraPosition.radius + 100) + saturn.cameraPosition.radius - (jupiter.cameraPosition.radius + 100) * easeInOutQuint((s - start) / interval),
        jupiter.cameraPosition.phi + (saturn.cameraPosition.phi - jupiter.cameraPosition.phi) * easeInOutQuint((s - start) / interval),
        jupiter.cameraPosition.theta + (saturn.cameraPosition.theta - jupiter.cameraPosition.theta) * easeInOutQuint((s - start) / interval)
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
    cameraFocus.set(...saturn.cameraFocus);
    cameraPosition.setFromSpherical(saturn.cameraPosition);
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
      saturn.cameraFocus.x + (uranus.cameraFocus.x - saturn.cameraFocus.x) * easeInOutQuint((s - start) / interval),
      saturn.cameraFocus.y + (uranus.cameraFocus.y - saturn.cameraFocus.y) * easeInOutQuint((s - start) / interval),
      saturn.cameraFocus.z + (uranus.cameraFocus.z - saturn.cameraFocus.z) * easeInOutQuint((s - start) / interval)
    );
    if (start < s && s <= start + interval / 2) {
      cameraPosition.setFromSphericalCoords(
        saturn.cameraPosition.radius + 100 * easeInOutQuint((s - start) / interval),
        saturn.cameraPosition.phi + (uranus.cameraPosition.phi - saturn.cameraPosition.phi) * easeInOutQuint((s - start) / interval),
        saturn.cameraPosition.theta + (uranus.cameraPosition.theta - saturn.cameraPosition.theta) * easeInOutQuint((s - start) / interval)
      );
    }
    if (start + interval / 2 < s && s <= end) {
      cameraPosition.setFromSphericalCoords(
        (saturn.cameraPosition.radius + 100) + uranus.cameraPosition.radius - (saturn.cameraPosition.radius + 100) * easeInOutQuint((s - start) / interval),
        saturn.cameraPosition.phi + (uranus.cameraPosition.phi - saturn.cameraPosition.phi) * easeInOutQuint((s - start) / interval),
        saturn.cameraPosition.theta + (uranus.cameraPosition.theta - saturn.cameraPosition.theta) * easeInOutQuint((s - start) / interval)
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
    cameraFocus.set(...uranus.cameraFocus);
    cameraPosition.setFromSpherical(uranus.cameraPosition);
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
      uranus.cameraFocus.x + (neptune.cameraFocus.x - uranus.cameraFocus.x) * easeInOutQuint((s - start) / interval),
      uranus.cameraFocus.y + (neptune.cameraFocus.y - uranus.cameraFocus.y) * easeInOutQuint((s - start) / interval),
      uranus.cameraFocus.z + (neptune.cameraFocus.z - uranus.cameraFocus.z) * easeInOutQuint((s - start) / interval)
    );
    if (start < s && s <= start + interval / 2) {
      cameraPosition.setFromSphericalCoords(
        uranus.cameraPosition.radius + 200 * easeInOutQuint((s - start) / interval),
        uranus.cameraPosition.phi + (neptune.cameraPosition.phi - uranus.cameraPosition.phi) * easeInOutQuint((s - start) / interval),
        uranus.cameraPosition.theta + (neptune.cameraPosition.theta - uranus.cameraPosition.theta) * easeInOutQuint((s - start) / interval)
      );
    }
    if (start + interval / 2 < s && s <= end) {
      cameraPosition.setFromSphericalCoords(
        (uranus.cameraPosition.radius + 200) + neptune.cameraPosition.radius - (uranus.cameraPosition.radius + 200) * easeInOutQuint((s - start) / interval),
        uranus.cameraPosition.phi + (neptune.cameraPosition.phi - uranus.cameraPosition.phi) * easeInOutQuint((s - start) / interval),
        uranus.cameraPosition.theta + (neptune.cameraPosition.theta - uranus.cameraPosition.theta) * easeInOutQuint((s - start) / interval)
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
    cameraFocus.set(...neptune.cameraFocus);
    cameraPosition.setFromSpherical(neptune.cameraPosition);
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
      neptune.cameraFocus.x + (sun.cameraFocus.x - neptune.cameraFocus.x) * easeInOutQuint((s - start) / interval),
      neptune.cameraFocus.y + (sun.cameraFocus.y - neptune.cameraFocus.y) * easeInOutQuint((s - start) / interval),
      neptune.cameraFocus.z + (sun.cameraFocus.z - neptune.cameraFocus.z) * easeInOutQuint((s - start) / interval)
    );
    if (start < s && s <= start + interval / 2) {
      cameraPosition.setFromSphericalCoords(
        neptune.cameraPosition.radius + 0 * easeInOutQuint((s - start) / interval),
        neptune.cameraPosition.phi + (sun.cameraPosition.phi - neptune.cameraPosition.phi) * easeInOutQuint((s - start) / interval),
        neptune.cameraPosition.theta + (sun.cameraPosition.theta - neptune.cameraPosition.theta) * easeInOutQuint((s - start) / interval * 2)
      );
    }
    if (start + interval / 2 < s && s <= end) {
      cameraPosition.setFromSphericalCoords(
        (neptune.cameraPosition.radius + 0) + sun.cameraPosition.radius - (neptune.cameraPosition.radius + 0) * easeInOutQuint((s - start) / interval),
        neptune.cameraPosition.phi + (sun.cameraPosition.phi - neptune.cameraPosition.phi) * easeInOutQuint((s - start) / interval),
        sun.cameraPosition.theta
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
    cameraFocus.set(...sun.cameraFocus);
    cameraPosition.setFromSpherical(sun.cameraPosition);
    camera.position.set(
      cameraFocus.x + cameraPosition.x,
      cameraFocus.y + cameraPosition.y,
      cameraFocus.z + cameraPosition.z
    );
  }

}

window.addEventListener('scroll', animateOnScroll);



function handleWindowResize() {
  camera.aspect = window.innerWidth / window.innerHeight;
  camera.updateProjectionMatrix();
  renderer.setSize(window.innerWidth, window.innerHeight);
  handleMediaChange(mobile);
}

window.addEventListener("resize", handleWindowResize, false);
