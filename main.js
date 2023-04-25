import * as THREE from 'three';
import { stars, sun, mercury, venus, earth, moon, mars, jupiter, saturn, uranus, neptune } from '/modules/objects';
import { PI, easeInOutQuint } from "/modules/math.js";

const mobile = window.matchMedia("(max-width: 1023px)"); // Mobile media query


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

const clock = new THREE.Clock();
const mouse = {
  x: 0,
  y: 0
};

function handleMouseMove(event) {
  mouse.x = (event.clientX / innerWidth) * 2 - 1;
  // mouse.y = -(event.clientY / innerHeight) * 2 + 1;
}

window.addEventListener('mousemove', handleMouseMove);



const orientationPermissionButton = document.querySelector('#orientation-permission-button');

function handleDeviceOrientation(event) {
  if (window.innerWidth < window.innerHeight) {
    mouse.x = event.gamma / 90;
  } else {
    mouse.x = event.beta * 2 / 180;
  }
}

function handleOrientationPermission() {
  if (typeof DeviceOrientationEvent.requestPermission === 'function') {
    // Handle iOS 13+ devices.
    DeviceOrientationEvent.requestPermission()
      .then((state) => {
        if (state === 'granted') {
          window.addEventListener('deviceorientation', handleDeviceOrientation);
          orientationPermissionButton.remove();
        } else {
          console.error('Request to access the orientation was rejected');
        }
      })
      .catch(console.error);
  } else {
    // Handle regular non iOS 13+ devices.
    window.addEventListener('deviceorientation', handleDeviceOrientation);
    orientationPermissionButton.remove();
  }
}

orientationPermissionButton.addEventListener('click', handleOrientationPermission);



const camera = new THREE.PerspectiveCamera(45, window.innerWidth / window.innerHeight, 0.001, 2000);
camera.focusPoint = new THREE.Vector3();
camera.localPosition = new THREE.Vector3();
const welcomecameraPosition = new THREE.Spherical();

const scene = new THREE.Scene();
scene.add(stars, sun.corona, sun.object, mercury.object, venus.object, earth.object, moon.object, mars.object, jupiter.object, saturn.object, uranus.object, neptune.object);

const renderer = new THREE.WebGLRenderer({ antialias: true });
renderer.setPixelRatio(window.devicePixelRatio);
renderer.setSize(window.innerWidth, window.innerHeight);
renderer.outputEncoding = THREE.sRGBEncoding;
renderer.setAnimationLoop(update);
document.body.appendChild(renderer.domElement);



function handleMediaChange(mediaQuery) {
  if (mediaQuery.matches) {
    mercury.cameraFocusPoint.set(...mercury.object.position);
    venus.cameraFocusPoint.set(...venus.object.position);
    earth.cameraFocusPoint.set(...earth.object.position);
    mars.cameraFocusPoint.set(...mars.object.position);
    jupiter.cameraFocusPoint.set(...jupiter.object.position);
    saturn.cameraFocusPoint.set(...saturn.object.position);
    uranus.cameraFocusPoint.set(...uranus.object.position);
    neptune.cameraFocusPoint.set(...neptune.object.position);
    sun.cameraFocusPoint.set(...sun.object.position);

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

    handleScroll();
  } else {
    mercury.cameraFocusPoint.set(...new THREE.Vector3(...mercury.object.position).add(
      new THREE.Vector3().setFromSphericalCoords(mercury.radius, PI / 2, mercury.sphericalPosition.theta + PI / 2)
    ));
    venus.cameraFocusPoint.set(...new THREE.Vector3(...venus.object.position).add(
      new THREE.Vector3().setFromSphericalCoords(venus.radius, PI / 2, venus.sphericalPosition.theta - PI / 2)
    ));
    earth.cameraFocusPoint.set(...new THREE.Vector3(...earth.object.position).add(
      new THREE.Vector3().setFromSphericalCoords(earth.radius, PI / 2, earth.sphericalPosition.theta + PI / 2)
    ));
    mars.cameraFocusPoint.set(...new THREE.Vector3(...mars.object.position).add(
      new THREE.Vector3().setFromSphericalCoords(mars.radius, PI / 2, mars.sphericalPosition.theta - PI / 2)
    ));
    jupiter.cameraFocusPoint.set(...new THREE.Vector3(...jupiter.object.position).add(
      new THREE.Vector3().setFromSphericalCoords(jupiter.radius, PI / 2, jupiter.sphericalPosition.theta + PI / 2)
    ));
    saturn.cameraFocusPoint.set(...new THREE.Vector3(...saturn.object.position).add(
      new THREE.Vector3().setFromSphericalCoords(saturn.radius, PI / 2, saturn.sphericalPosition.theta - PI / 2)
    ));
    uranus.cameraFocusPoint.set(...new THREE.Vector3(...uranus.object.position).add(
      new THREE.Vector3().setFromSphericalCoords(uranus.radius, PI / 2, uranus.sphericalPosition.theta + PI / 2)
    ));
    neptune.cameraFocusPoint.set(...new THREE.Vector3(...neptune.object.position).add(
      new THREE.Vector3().setFromSphericalCoords(neptune.radius, PI / 2, neptune.sphericalPosition.theta - PI / 2)
    ));
    sun.cameraFocusPoint.set(...sun.object.position);

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

    handleScroll();
  }
}

handleMediaChange(mobile);



function update() {
  const timeDelta = clock.getDelta();

  stars.rotateY(- timeDelta * 0.02);

  sun.update(renderer, clock.elapsedTime);
  sun.corona.lookAt(camera.position);

  mercury.mesh.rotateY(timeDelta * 0.1);
  venus.mesh.rotateY(timeDelta * 0.1);
  earth.mesh.rotateY(timeDelta * 0.1);
  moon.object.rotateY(timeDelta * 0.1 / 27);
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

  camera.lookAt(...camera.focusPoint);

  renderer.render(scene, camera);
}

update();



function handleScroll() {
  const s = window.pageYOffset;

  // Init
  if (s === 0) {
    camera.focusPoint.set(...sun.cameraFocusPoint);
    camera.localPosition.setFromSpherical(welcomecameraPosition);
  }

  // To Mercury animation
  let start = 0;
  let end = (window.pageYOffset + toMercurySection.getBoundingClientRect().bottom) - window.innerHeight;
  if (start < s && s <= end) {
    const interval = end - start;
    camera.focusPoint.set(
      mercury.cameraFocusPoint.x * easeInOutQuint((s - start) / interval),
      mercury.cameraFocusPoint.y * easeInOutQuint((s - start) / interval),
      mercury.cameraFocusPoint.z * easeInOutQuint((s - start) / interval)
    );
    camera.localPosition.setFromSphericalCoords(
      welcomecameraPosition.radius + (mercury.cameraPosition.radius - welcomecameraPosition.radius) * easeInOutQuint((s - start) / interval),
      welcomecameraPosition.phi + (mercury.cameraPosition.phi - welcomecameraPosition.phi) * easeInOutQuint((s - start) / interval),
      welcomecameraPosition.theta + (mercury.cameraPosition.theta - welcomecameraPosition.theta) * easeInOutQuint((s - start) / interval)
    );
  }

  // Mercury shot
  start = (window.pageYOffset + toMercurySection.getBoundingClientRect().bottom) - window.innerHeight;
  end = (window.pageYOffset + mercurySection.getBoundingClientRect().bottom);
  if (start < s && s <= end) {
    camera.focusPoint.set(...mercury.cameraFocusPoint);
    camera.localPosition.setFromSpherical(mercury.cameraPosition);
  }

  // To Venus animation
  start = (window.pageYOffset + mercurySection.getBoundingClientRect().bottom);
  end = (window.pageYOffset + toVenusSection.getBoundingClientRect().bottom) - window.innerHeight;
  if (start < s && s <= end) {
    const interval = end - start;
    camera.focusPoint.set(
      mercury.cameraFocusPoint.x + (venus.cameraFocusPoint.x - mercury.cameraFocusPoint.x) * easeInOutQuint((s - start) / interval),
      mercury.cameraFocusPoint.y + (venus.cameraFocusPoint.y - mercury.cameraFocusPoint.y) * easeInOutQuint((s - start) / interval),
      mercury.cameraFocusPoint.z + (venus.cameraFocusPoint.z - mercury.cameraFocusPoint.z) * easeInOutQuint((s - start) / interval)
    );
    if (start < s && s <= start + interval / 2) {
      camera.localPosition.setFromSphericalCoords(
        mercury.cameraPosition.radius + 10 * easeInOutQuint((s - start) / interval),
        mercury.cameraPosition.phi + (venus.cameraPosition.phi - mercury.cameraPosition.phi) * easeInOutQuint((s - start) / interval),
        mercury.cameraPosition.theta + (venus.cameraPosition.theta - mercury.cameraPosition.theta) * easeInOutQuint((s - start) / interval)
      );
    }
    else if (start + interval / 2 < s && s <= end) {
      camera.localPosition.setFromSphericalCoords(
        (mercury.cameraPosition.radius + 10) + venus.cameraPosition.radius - (mercury.cameraPosition.radius + 10) * easeInOutQuint((s - start) / interval),
        mercury.cameraPosition.phi + (venus.cameraPosition.phi - mercury.cameraPosition.phi) * easeInOutQuint((s - start) / interval),
        mercury.cameraPosition.theta + (venus.cameraPosition.theta - mercury.cameraPosition.theta) * easeInOutQuint((s - start) / interval)
      );
    }
  }

  // Venus shot
  start = (window.pageYOffset + toVenusSection.getBoundingClientRect().bottom) - window.innerHeight;
  end = (window.pageYOffset + venusSection.getBoundingClientRect().bottom);
  if (start < s && s <= end) {
    camera.focusPoint.set(...venus.cameraFocusPoint);
    camera.localPosition.setFromSpherical(venus.cameraPosition);
  }

  // To Earth animation
  start = (window.pageYOffset + venusSection.getBoundingClientRect().bottom);
  end = (window.pageYOffset + toEarthSection.getBoundingClientRect().bottom) - window.innerHeight;
  if (start < s && s <= end) {
    const interval = end - start;
    camera.focusPoint.set(
      venus.cameraFocusPoint.x + (earth.cameraFocusPoint.x - venus.cameraFocusPoint.x) * easeInOutQuint((s - start) / interval),
      venus.cameraFocusPoint.y + (earth.cameraFocusPoint.y - venus.cameraFocusPoint.y) * easeInOutQuint((s - start) / interval),
      venus.cameraFocusPoint.z + (earth.cameraFocusPoint.z - venus.cameraFocusPoint.z) * easeInOutQuint((s - start) / interval)
    );
    if (start < s && s <= start + interval / 2) {
      camera.localPosition.setFromSphericalCoords(
        venus.cameraPosition.radius + 10 * easeInOutQuint((s - start) / interval),
        venus.cameraPosition.phi + (earth.cameraPosition.phi - venus.cameraPosition.phi) * easeInOutQuint((s - start) / interval),
        venus.cameraPosition.theta + (earth.cameraPosition.theta - venus.cameraPosition.theta) * easeInOutQuint((s - start) / interval)
      );
    }
    else if (start + interval / 2 < s && s <= end) {
      camera.localPosition.setFromSphericalCoords(
        (venus.cameraPosition.radius + 10) + earth.cameraPosition.radius - (venus.cameraPosition.radius + 10) * easeInOutQuint((s - start) / interval),
        venus.cameraPosition.phi + (earth.cameraPosition.phi - venus.cameraPosition.phi) * easeInOutQuint((s - start) / interval),
        venus.cameraPosition.theta + (earth.cameraPosition.theta - venus.cameraPosition.theta) * easeInOutQuint((s - start) / interval)
      );
    }
  }

  // Earth shot
  start = (window.pageYOffset + toEarthSection.getBoundingClientRect().bottom) - window.innerHeight;
  end = (window.pageYOffset + earthSection.getBoundingClientRect().bottom);
  if (start < s && s <= end) {
    camera.focusPoint.set(...earth.cameraFocusPoint);
    camera.localPosition.setFromSpherical(earth.cameraPosition);
  }

  // To Mars animation
  start = (window.pageYOffset + earthSection.getBoundingClientRect().bottom);
  end = (window.pageYOffset + toMarsSection.getBoundingClientRect().bottom) - window.innerHeight;
  if (start < s && s <= end) {
    const interval = end - start;
    camera.focusPoint.set(
      earth.cameraFocusPoint.x + (mars.cameraFocusPoint.x - earth.cameraFocusPoint.x) * easeInOutQuint((s - start) / interval),
      earth.cameraFocusPoint.y + (mars.cameraFocusPoint.y - earth.cameraFocusPoint.y) * easeInOutQuint((s - start) / interval),
      earth.cameraFocusPoint.z + (mars.cameraFocusPoint.z - earth.cameraFocusPoint.z) * easeInOutQuint((s - start) / interval)
    );
    if (start < s && s <= start + interval / 2) {
      camera.localPosition.setFromSphericalCoords(
        earth.cameraPosition.radius + 10 * easeInOutQuint((s - start) / interval),
        earth.cameraPosition.phi + (mars.cameraPosition.phi - earth.cameraPosition.phi) * easeInOutQuint((s - start) / interval),
        earth.cameraPosition.theta + (mars.cameraPosition.theta - earth.cameraPosition.theta) * easeInOutQuint((s - start) / interval)
      );
    }
    else if (start + interval / 2 < s && s <= end) {
      camera.localPosition.setFromSphericalCoords(
        (earth.cameraPosition.radius + 10) + mars.cameraPosition.radius - (earth.cameraPosition.radius + 10) * easeInOutQuint((s - start) / interval),
        earth.cameraPosition.phi + (mars.cameraPosition.phi - earth.cameraPosition.phi) * easeInOutQuint((s - start) / interval),
        earth.cameraPosition.theta + (mars.cameraPosition.theta - earth.cameraPosition.theta) * easeInOutQuint((s - start) / interval)
      );
    }
  }

  // Mars shot
  start = (window.pageYOffset + toMarsSection.getBoundingClientRect().bottom) - window.innerHeight;
  end = (window.pageYOffset + marsSection.getBoundingClientRect().bottom);
  if (start < s && s <= end) {
    camera.focusPoint.set(...mars.cameraFocusPoint);
    camera.localPosition.setFromSpherical(mars.cameraPosition);
  }

  // To Jupiter animation
  start = (window.pageYOffset + marsSection.getBoundingClientRect().bottom);
  end = (window.pageYOffset + toJupiterSection.getBoundingClientRect().bottom) - window.innerHeight;
  if (start < s && s <= end) {
    const interval = end - start;
    camera.focusPoint.set(
      mars.cameraFocusPoint.x + (jupiter.cameraFocusPoint.x - mars.cameraFocusPoint.x) * easeInOutQuint((s - start) / interval),
      mars.cameraFocusPoint.y + (jupiter.cameraFocusPoint.y - mars.cameraFocusPoint.y) * easeInOutQuint((s - start) / interval),
      mars.cameraFocusPoint.z + (jupiter.cameraFocusPoint.z - mars.cameraFocusPoint.z) * easeInOutQuint((s - start) / interval)
    );
    if (start < s && s <= start + interval / 2) {
      camera.localPosition.setFromSphericalCoords(
        mars.cameraPosition.radius + 100 * easeInOutQuint((s - start) / interval),
        mars.cameraPosition.phi + (jupiter.cameraPosition.phi - mars.cameraPosition.phi) * easeInOutQuint((s - start) / interval),
        mars.cameraPosition.theta + (jupiter.cameraPosition.theta - mars.cameraPosition.theta) * easeInOutQuint((s - start) / interval)
      );
    }
    else if (start + interval / 2 < s && s <= end) {
      camera.localPosition.setFromSphericalCoords(
        (mars.cameraPosition.radius + 100) + jupiter.cameraPosition.radius - (mars.cameraPosition.radius + 100) * easeInOutQuint((s - start) / interval),
        mars.cameraPosition.phi + (jupiter.cameraPosition.phi - mars.cameraPosition.phi) * easeInOutQuint((s - start) / interval),
        mars.cameraPosition.theta + (jupiter.cameraPosition.theta - mars.cameraPosition.theta) * easeInOutQuint((s - start) / interval)
      );
    }
  }

  // Jupiter shot
  start = (window.pageYOffset + toJupiterSection.getBoundingClientRect().bottom) - window.innerHeight;
  end = (window.pageYOffset + jupiterSection.getBoundingClientRect().bottom);
  if (start < s && s <= end) {
    camera.focusPoint.set(...jupiter.cameraFocusPoint);
    camera.localPosition.setFromSpherical(jupiter.cameraPosition);
  }

  // To Saturn animation
  start = (window.pageYOffset + jupiterSection.getBoundingClientRect().bottom);
  end = (window.pageYOffset + toSaturnSection.getBoundingClientRect().bottom) - window.innerHeight;
  if (start < s && s <= end) {
    const interval = end - start;
    camera.focusPoint.set(
      jupiter.cameraFocusPoint.x + (saturn.cameraFocusPoint.x - jupiter.cameraFocusPoint.x) * easeInOutQuint((s - start) / interval),
      jupiter.cameraFocusPoint.y + (saturn.cameraFocusPoint.y - jupiter.cameraFocusPoint.y) * easeInOutQuint((s - start) / interval),
      jupiter.cameraFocusPoint.z + (saturn.cameraFocusPoint.z - jupiter.cameraFocusPoint.z) * easeInOutQuint((s - start) / interval)
    );
    if (start < s && s <= start + interval / 2) {
      camera.localPosition.setFromSphericalCoords(
        jupiter.cameraPosition.radius + 100 * easeInOutQuint((s - start) / interval),
        jupiter.cameraPosition.phi + (saturn.cameraPosition.phi - jupiter.cameraPosition.phi) * easeInOutQuint((s - start) / interval),
        jupiter.cameraPosition.theta + (saturn.cameraPosition.theta - jupiter.cameraPosition.theta) * easeInOutQuint((s - start) / interval)
      );
    }
    else if (start + interval / 2 < s && s <= end) {
      camera.localPosition.setFromSphericalCoords(
        (jupiter.cameraPosition.radius + 100) + saturn.cameraPosition.radius - (jupiter.cameraPosition.radius + 100) * easeInOutQuint((s - start) / interval),
        jupiter.cameraPosition.phi + (saturn.cameraPosition.phi - jupiter.cameraPosition.phi) * easeInOutQuint((s - start) / interval),
        jupiter.cameraPosition.theta + (saturn.cameraPosition.theta - jupiter.cameraPosition.theta) * easeInOutQuint((s - start) / interval)
      );
    }
  }

  // Saturn shot
  start = (window.pageYOffset + toSaturnSection.getBoundingClientRect().bottom) - window.innerHeight;
  end = (window.pageYOffset + saturnSection.getBoundingClientRect().bottom);
  if (start < s && s <= end) {
    camera.focusPoint.set(...saturn.cameraFocusPoint);
    camera.localPosition.setFromSpherical(saturn.cameraPosition);
  }

  // To Uranus animation
  start = (window.pageYOffset + saturnSection.getBoundingClientRect().bottom);
  end = (window.pageYOffset + toUranusSection.getBoundingClientRect().bottom) - window.innerHeight;
  if (start < s && s <= end) {
    const interval = end - start;
    camera.focusPoint.set(
      saturn.cameraFocusPoint.x + (uranus.cameraFocusPoint.x - saturn.cameraFocusPoint.x) * easeInOutQuint((s - start) / interval),
      saturn.cameraFocusPoint.y + (uranus.cameraFocusPoint.y - saturn.cameraFocusPoint.y) * easeInOutQuint((s - start) / interval),
      saturn.cameraFocusPoint.z + (uranus.cameraFocusPoint.z - saturn.cameraFocusPoint.z) * easeInOutQuint((s - start) / interval)
    );
    if (start < s && s <= start + interval / 2) {
      camera.localPosition.setFromSphericalCoords(
        saturn.cameraPosition.radius + 100 * easeInOutQuint((s - start) / interval),
        saturn.cameraPosition.phi + (uranus.cameraPosition.phi - saturn.cameraPosition.phi) * easeInOutQuint((s - start) / interval),
        saturn.cameraPosition.theta + (uranus.cameraPosition.theta - saturn.cameraPosition.theta) * easeInOutQuint((s - start) / interval)
      );
    }
    else if (start + interval / 2 < s && s <= end) {
      camera.localPosition.setFromSphericalCoords(
        (saturn.cameraPosition.radius + 100) + uranus.cameraPosition.radius - (saturn.cameraPosition.radius + 100) * easeInOutQuint((s - start) / interval),
        saturn.cameraPosition.phi + (uranus.cameraPosition.phi - saturn.cameraPosition.phi) * easeInOutQuint((s - start) / interval),
        saturn.cameraPosition.theta + (uranus.cameraPosition.theta - saturn.cameraPosition.theta) * easeInOutQuint((s - start) / interval)
      );
    }
  }

  // Uranus shot
  start = (window.pageYOffset + toUranusSection.getBoundingClientRect().bottom) - window.innerHeight;
  end = (window.pageYOffset + uranusSection.getBoundingClientRect().bottom);
  if (start < s && s <= end) {
    camera.focusPoint.set(...uranus.cameraFocusPoint);
    camera.localPosition.setFromSpherical(uranus.cameraPosition);
  }

  // To Neptune animation
  start = (window.pageYOffset + uranusSection.getBoundingClientRect().bottom);
  end = (window.pageYOffset + toNeptuneSection.getBoundingClientRect().bottom) - window.innerHeight;
  if (start < s && s <= end) {
    const interval = end - start;
    camera.focusPoint.set(
      uranus.cameraFocusPoint.x + (neptune.cameraFocusPoint.x - uranus.cameraFocusPoint.x) * easeInOutQuint((s - start) / interval),
      uranus.cameraFocusPoint.y + (neptune.cameraFocusPoint.y - uranus.cameraFocusPoint.y) * easeInOutQuint((s - start) / interval),
      uranus.cameraFocusPoint.z + (neptune.cameraFocusPoint.z - uranus.cameraFocusPoint.z) * easeInOutQuint((s - start) / interval)
    );
    if (start < s && s <= start + interval / 2) {
      camera.localPosition.setFromSphericalCoords(
        uranus.cameraPosition.radius + 200 * easeInOutQuint((s - start) / interval),
        uranus.cameraPosition.phi + (neptune.cameraPosition.phi - uranus.cameraPosition.phi) * easeInOutQuint((s - start) / interval),
        uranus.cameraPosition.theta + (neptune.cameraPosition.theta - uranus.cameraPosition.theta) * easeInOutQuint((s - start) / interval)
      );
    }
    else if (start + interval / 2 < s && s <= end) {
      camera.localPosition.setFromSphericalCoords(
        (uranus.cameraPosition.radius + 200) + neptune.cameraPosition.radius - (uranus.cameraPosition.radius + 200) * easeInOutQuint((s - start) / interval),
        uranus.cameraPosition.phi + (neptune.cameraPosition.phi - uranus.cameraPosition.phi) * easeInOutQuint((s - start) / interval),
        uranus.cameraPosition.theta + (neptune.cameraPosition.theta - uranus.cameraPosition.theta) * easeInOutQuint((s - start) / interval)
      );
    }
  }

  // Neptune shot
  start = (window.pageYOffset + toNeptuneSection.getBoundingClientRect().bottom) - window.innerHeight;
  end = (window.pageYOffset + neptuneSection.getBoundingClientRect().bottom);
  if (start < s && s <= end) {
    camera.focusPoint.set(...neptune.cameraFocusPoint);
    camera.localPosition.setFromSpherical(neptune.cameraPosition);
  }

  // To Sun animation
  start = (window.pageYOffset + neptuneSection.getBoundingClientRect().bottom);
  end = (window.pageYOffset + toSunSection.getBoundingClientRect().bottom) - window.innerHeight;
  if (start < s && s <= end) {
    const interval = end - start;
    camera.focusPoint.set(
      neptune.cameraFocusPoint.x + (sun.cameraFocusPoint.x - neptune.cameraFocusPoint.x) * easeInOutQuint((s - start) / interval),
      neptune.cameraFocusPoint.y + (sun.cameraFocusPoint.y - neptune.cameraFocusPoint.y) * easeInOutQuint((s - start) / interval),
      neptune.cameraFocusPoint.z + (sun.cameraFocusPoint.z - neptune.cameraFocusPoint.z) * easeInOutQuint((s - start) / interval)
    );
    if (start < s && s <= start + interval / 2) {
      camera.localPosition.setFromSphericalCoords(
        neptune.cameraPosition.radius + 0 * easeInOutQuint((s - start) / interval),
        neptune.cameraPosition.phi + (sun.cameraPosition.phi - neptune.cameraPosition.phi) * easeInOutQuint((s - start) / interval),
        neptune.cameraPosition.theta + (sun.cameraPosition.theta - neptune.cameraPosition.theta) * easeInOutQuint((s - start) / interval * 2)
      );
    }
    else if (start + interval / 2 < s && s <= end) {
      camera.localPosition.setFromSphericalCoords(
        (neptune.cameraPosition.radius + 0) + sun.cameraPosition.radius - (neptune.cameraPosition.radius + 0) * easeInOutQuint((s - start) / interval),
        neptune.cameraPosition.phi + (sun.cameraPosition.phi - neptune.cameraPosition.phi) * easeInOutQuint((s - start) / interval),
        sun.cameraPosition.theta
      );
    }
  }

  // Sun shot
  start = (window.pageYOffset + toSunSection.getBoundingClientRect().bottom) - window.innerHeight;
  end = (window.pageYOffset + sunSection.getBoundingClientRect().bottom);
  if (start < s && s <= end) {
    camera.focusPoint.set(...sun.cameraFocusPoint);
    camera.localPosition.setFromSpherical(sun.cameraPosition);
  }

  camera.position.set(
    camera.focusPoint.x + camera.localPosition.x,
    camera.focusPoint.y + camera.localPosition.y,
    camera.focusPoint.z + camera.localPosition.z
  );
}

window.addEventListener('scroll', handleScroll);



function handleWindowResize() {
  camera.aspect = window.innerWidth / window.innerHeight;
  camera.updateProjectionMatrix();
  renderer.setSize(window.innerWidth, window.innerHeight);
  handleMediaChange(mobile);
}

window.addEventListener("resize", handleWindowResize, false);
