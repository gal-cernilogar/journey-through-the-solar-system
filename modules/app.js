import * as THREE from 'three';
import { stars, sun, mercury, venus, earth, moon, mars, jupiter, saturn, uranus, neptune } from '/modules/objects';
import { PI, easeInOutQuint } from "/modules/math.js";

export default function createApp(domContainer, sections) {
  const camera = new THREE.PerspectiveCamera(45, domContainer.clientWidth / domContainer.clientHeight, 0.001, 2000);
  camera.focusPoint = new THREE.Vector3();
  camera.currentFocusPoint = new THREE.Vector3(0, 0, 0);
  camera.localPosition = new THREE.Vector3();
  const welcomecameraPosition = new THREE.Spherical();

  const scene = new THREE.Scene();
  scene.add(stars, sun.corona, sun.object, mercury.object, venus.object, earth.object, moon.object, mars.object, jupiter.object, saturn.object, uranus.object, neptune.object);

  const renderer = new THREE.WebGLRenderer({ antialias: true });
  renderer.setPixelRatio(window.devicePixelRatio);
  renderer.setSize(domContainer.clientWidth, domContainer.clientHeight);
  renderer.outputEncoding = THREE.sRGBEncoding;
  renderer.setAnimationLoop(update);
  domContainer.appendChild(renderer.domElement);

  const clock = new THREE.Clock();
  const mouse = {
    x: 0,
    y: 0
  };

  const tweens = {
    welcome() {
      camera.focusPoint.copy(sun.cameraFocusPoint);
      camera.localPosition.setFromSpherical(welcomecameraPosition);
    },
    toMercury(currentOffset) {
      const start = 0;
      const end = sections.toMercury.offset;
      const interval = end - start;
      camera.focusPoint.set(
        mercury.cameraFocusPoint.x * easeInOutQuint((currentOffset - start) / interval),
        mercury.cameraFocusPoint.y * easeInOutQuint((currentOffset - start) / interval),
        mercury.cameraFocusPoint.z * easeInOutQuint((currentOffset - start) / interval)
      );
      camera.localPosition.setFromSphericalCoords(
        welcomecameraPosition.radius + (mercury.cameraPosition.radius - welcomecameraPosition.radius) * easeInOutQuint((currentOffset - start) / interval),
        welcomecameraPosition.phi + (mercury.cameraPosition.phi - welcomecameraPosition.phi) * easeInOutQuint((currentOffset - start) / interval),
        welcomecameraPosition.theta + (mercury.cameraPosition.theta - welcomecameraPosition.theta) * easeInOutQuint((currentOffset - start) / interval)
      );
    },
    mercury() {
      camera.focusPoint.copy(mercury.cameraFocusPoint);
      camera.localPosition.setFromSpherical(mercury.cameraPosition);
    },
    toVenus(currentOffset) {
      const start = sections.mercury.offset;
      const end = sections.toVenus.offset;
      const interval = end - start;
      camera.focusPoint.set(
        mercury.cameraFocusPoint.x + (venus.cameraFocusPoint.x - mercury.cameraFocusPoint.x) * easeInOutQuint((currentOffset - start) / interval),
        mercury.cameraFocusPoint.y + (venus.cameraFocusPoint.y - mercury.cameraFocusPoint.y) * easeInOutQuint((currentOffset - start) / interval),
        mercury.cameraFocusPoint.z + (venus.cameraFocusPoint.z - mercury.cameraFocusPoint.z) * easeInOutQuint((currentOffset - start) / interval)
      );
      if (start < currentOffset && currentOffset <= start + interval / 2) {
        camera.localPosition.setFromSphericalCoords(
          mercury.cameraPosition.radius + 10 * easeInOutQuint((currentOffset - start) / interval),
          mercury.cameraPosition.phi + (venus.cameraPosition.phi - mercury.cameraPosition.phi) * easeInOutQuint((currentOffset - start) / interval),
          mercury.cameraPosition.theta + (venus.cameraPosition.theta - mercury.cameraPosition.theta) * easeInOutQuint((currentOffset - start) / interval)
        );
      }
      else if (start + interval / 2 < currentOffset && currentOffset <= end) {
        camera.localPosition.setFromSphericalCoords(
          (mercury.cameraPosition.radius + 10) + venus.cameraPosition.radius - (mercury.cameraPosition.radius + 10) * easeInOutQuint((currentOffset - start) / interval),
          mercury.cameraPosition.phi + (venus.cameraPosition.phi - mercury.cameraPosition.phi) * easeInOutQuint((currentOffset - start) / interval),
          mercury.cameraPosition.theta + (venus.cameraPosition.theta - mercury.cameraPosition.theta) * easeInOutQuint((currentOffset - start) / interval)
        );
      }
    },
    venus() {
      camera.focusPoint.copy(venus.cameraFocusPoint);
      camera.localPosition.setFromSpherical(venus.cameraPosition);
    },
    toEarth(currentOffset) {
      const start = sections.venus.offset;
      const end = sections.toEarth.offset;
      const interval = end - start;
      camera.focusPoint.set(
        venus.cameraFocusPoint.x + (earth.cameraFocusPoint.x - venus.cameraFocusPoint.x) * easeInOutQuint((currentOffset - start) / interval),
        venus.cameraFocusPoint.y + (earth.cameraFocusPoint.y - venus.cameraFocusPoint.y) * easeInOutQuint((currentOffset - start) / interval),
        venus.cameraFocusPoint.z + (earth.cameraFocusPoint.z - venus.cameraFocusPoint.z) * easeInOutQuint((currentOffset - start) / interval)
      );
      if (start < currentOffset && currentOffset <= start + interval / 2) {
        camera.localPosition.setFromSphericalCoords(
          venus.cameraPosition.radius + 10 * easeInOutQuint((currentOffset - start) / interval),
          venus.cameraPosition.phi + (earth.cameraPosition.phi - venus.cameraPosition.phi) * easeInOutQuint((currentOffset - start) / interval),
          venus.cameraPosition.theta + (earth.cameraPosition.theta - venus.cameraPosition.theta) * easeInOutQuint((currentOffset - start) / interval)
        );
      }
      else if (start + interval / 2 < currentOffset && currentOffset <= end) {
        camera.localPosition.setFromSphericalCoords(
          (venus.cameraPosition.radius + 10) + earth.cameraPosition.radius - (venus.cameraPosition.radius + 10) * easeInOutQuint((currentOffset - start) / interval),
          venus.cameraPosition.phi + (earth.cameraPosition.phi - venus.cameraPosition.phi) * easeInOutQuint((currentOffset - start) / interval),
          venus.cameraPosition.theta + (earth.cameraPosition.theta - venus.cameraPosition.theta) * easeInOutQuint((currentOffset - start) / interval)
        );
      }
    },
    earth() {
      camera.focusPoint.copy(earth.cameraFocusPoint);
      camera.localPosition.setFromSpherical(earth.cameraPosition);
    },
    toMars(currentOffset) {
      const start = sections.earth.offset;
      const end = sections.toMars.offset;
      const interval = end - start;
      camera.focusPoint.set(
        earth.cameraFocusPoint.x + (mars.cameraFocusPoint.x - earth.cameraFocusPoint.x) * easeInOutQuint((currentOffset - start) / interval),
        earth.cameraFocusPoint.y + (mars.cameraFocusPoint.y - earth.cameraFocusPoint.y) * easeInOutQuint((currentOffset - start) / interval),
        earth.cameraFocusPoint.z + (mars.cameraFocusPoint.z - earth.cameraFocusPoint.z) * easeInOutQuint((currentOffset - start) / interval)
      );
      if (start < currentOffset && currentOffset <= start + interval / 2) {
        camera.localPosition.setFromSphericalCoords(
          earth.cameraPosition.radius + 10 * easeInOutQuint((currentOffset - start) / interval),
          earth.cameraPosition.phi + (mars.cameraPosition.phi - earth.cameraPosition.phi) * easeInOutQuint((currentOffset - start) / interval),
          earth.cameraPosition.theta + (mars.cameraPosition.theta - earth.cameraPosition.theta) * easeInOutQuint((currentOffset - start) / interval)
        );
      }
      else if (start + interval / 2 < currentOffset && currentOffset <= end) {
        camera.localPosition.setFromSphericalCoords(
          (earth.cameraPosition.radius + 10) + mars.cameraPosition.radius - (earth.cameraPosition.radius + 10) * easeInOutQuint((currentOffset - start) / interval),
          earth.cameraPosition.phi + (mars.cameraPosition.phi - earth.cameraPosition.phi) * easeInOutQuint((currentOffset - start) / interval),
          earth.cameraPosition.theta + (mars.cameraPosition.theta - earth.cameraPosition.theta) * easeInOutQuint((currentOffset - start) / interval)
        );
      }
    },
    mars() {
      camera.focusPoint.copy(mars.cameraFocusPoint);
      camera.localPosition.setFromSpherical(mars.cameraPosition);
    },
    toJupiter(currentOffset) {
      const start = sections.mars.offset;
      const end = sections.toJupiter.offset;
      const interval = end - start;
      camera.focusPoint.set(
        mars.cameraFocusPoint.x + (jupiter.cameraFocusPoint.x - mars.cameraFocusPoint.x) * easeInOutQuint((currentOffset - start) / interval),
        mars.cameraFocusPoint.y + (jupiter.cameraFocusPoint.y - mars.cameraFocusPoint.y) * easeInOutQuint((currentOffset - start) / interval),
        mars.cameraFocusPoint.z + (jupiter.cameraFocusPoint.z - mars.cameraFocusPoint.z) * easeInOutQuint((currentOffset - start) / interval)
      );
      if (start < currentOffset && currentOffset <= start + interval / 2) {
        camera.localPosition.setFromSphericalCoords(
          mars.cameraPosition.radius + 100 * easeInOutQuint((currentOffset - start) / interval),
          mars.cameraPosition.phi + (jupiter.cameraPosition.phi - mars.cameraPosition.phi) * easeInOutQuint((currentOffset - start) / interval),
          mars.cameraPosition.theta + (jupiter.cameraPosition.theta - mars.cameraPosition.theta) * easeInOutQuint((currentOffset - start) / interval)
        );
      }
      else if (start + interval / 2 < currentOffset && currentOffset <= end) {
        camera.localPosition.setFromSphericalCoords(
          (mars.cameraPosition.radius + 100) + jupiter.cameraPosition.radius - (mars.cameraPosition.radius + 100) * easeInOutQuint((currentOffset - start) / interval),
          mars.cameraPosition.phi + (jupiter.cameraPosition.phi - mars.cameraPosition.phi) * easeInOutQuint((currentOffset - start) / interval),
          mars.cameraPosition.theta + (jupiter.cameraPosition.theta - mars.cameraPosition.theta) * easeInOutQuint((currentOffset - start) / interval)
        );
      }
    },
    jupiter() {
      camera.focusPoint.copy(jupiter.cameraFocusPoint);
      camera.localPosition.setFromSpherical(jupiter.cameraPosition);
    },
    toSaturn(currentOffset) {
      const start = sections.jupiter.offset;
      const end = sections.toSaturn.offset;
      const interval = end - start;
      camera.focusPoint.set(
        jupiter.cameraFocusPoint.x + (saturn.cameraFocusPoint.x - jupiter.cameraFocusPoint.x) * easeInOutQuint((currentOffset - start) / interval),
        jupiter.cameraFocusPoint.y + (saturn.cameraFocusPoint.y - jupiter.cameraFocusPoint.y) * easeInOutQuint((currentOffset - start) / interval),
        jupiter.cameraFocusPoint.z + (saturn.cameraFocusPoint.z - jupiter.cameraFocusPoint.z) * easeInOutQuint((currentOffset - start) / interval)
      );
      if (start < currentOffset && currentOffset <= start + interval / 2) {
        camera.localPosition.setFromSphericalCoords(
          jupiter.cameraPosition.radius + 100 * easeInOutQuint((currentOffset - start) / interval),
          jupiter.cameraPosition.phi + (saturn.cameraPosition.phi - jupiter.cameraPosition.phi) * easeInOutQuint((currentOffset - start) / interval),
          jupiter.cameraPosition.theta + (saturn.cameraPosition.theta - jupiter.cameraPosition.theta) * easeInOutQuint((currentOffset - start) / interval)
        );
      }
      else if (start + interval / 2 < currentOffset && currentOffset <= end) {
        camera.localPosition.setFromSphericalCoords(
          (jupiter.cameraPosition.radius + 100) + saturn.cameraPosition.radius - (jupiter.cameraPosition.radius + 100) * easeInOutQuint((currentOffset - start) / interval),
          jupiter.cameraPosition.phi + (saturn.cameraPosition.phi - jupiter.cameraPosition.phi) * easeInOutQuint((currentOffset - start) / interval),
          jupiter.cameraPosition.theta + (saturn.cameraPosition.theta - jupiter.cameraPosition.theta) * easeInOutQuint((currentOffset - start) / interval)
        );
      }
    },
    saturn() {
      camera.focusPoint.copy(saturn.cameraFocusPoint);
      camera.localPosition.setFromSpherical(saturn.cameraPosition);
    },
    toUranus(currentOffset) {
      const start = sections.saturn.offset;
      const end = sections.toUranus.offset;
      const interval = end - start;
      camera.focusPoint.set(
        saturn.cameraFocusPoint.x + (uranus.cameraFocusPoint.x - saturn.cameraFocusPoint.x) * easeInOutQuint((currentOffset - start) / interval),
        saturn.cameraFocusPoint.y + (uranus.cameraFocusPoint.y - saturn.cameraFocusPoint.y) * easeInOutQuint((currentOffset - start) / interval),
        saturn.cameraFocusPoint.z + (uranus.cameraFocusPoint.z - saturn.cameraFocusPoint.z) * easeInOutQuint((currentOffset - start) / interval)
      );
      if (start < currentOffset && currentOffset <= start + interval / 2) {
        camera.localPosition.setFromSphericalCoords(
          saturn.cameraPosition.radius + 100 * easeInOutQuint((currentOffset - start) / interval),
          saturn.cameraPosition.phi + (uranus.cameraPosition.phi - saturn.cameraPosition.phi) * easeInOutQuint((currentOffset - start) / interval),
          saturn.cameraPosition.theta + (uranus.cameraPosition.theta - saturn.cameraPosition.theta) * easeInOutQuint((currentOffset - start) / interval)
        );
      }
      else if (start + interval / 2 < currentOffset && currentOffset <= end) {
        camera.localPosition.setFromSphericalCoords(
          (saturn.cameraPosition.radius + 100) + uranus.cameraPosition.radius - (saturn.cameraPosition.radius + 100) * easeInOutQuint((currentOffset - start) / interval),
          saturn.cameraPosition.phi + (uranus.cameraPosition.phi - saturn.cameraPosition.phi) * easeInOutQuint((currentOffset - start) / interval),
          saturn.cameraPosition.theta + (uranus.cameraPosition.theta - saturn.cameraPosition.theta) * easeInOutQuint((currentOffset - start) / interval)
        );
      }
    },
    uranus() {
      camera.focusPoint.copy(uranus.cameraFocusPoint);
      camera.localPosition.setFromSpherical(uranus.cameraPosition);
    },
    toNeptune(currentOffset) {
      const start = sections.uranus.offset;
      const end = sections.toNeptune.offset;
      const interval = end - start;
      camera.focusPoint.set(
        uranus.cameraFocusPoint.x + (neptune.cameraFocusPoint.x - uranus.cameraFocusPoint.x) * easeInOutQuint((currentOffset - start) / interval),
        uranus.cameraFocusPoint.y + (neptune.cameraFocusPoint.y - uranus.cameraFocusPoint.y) * easeInOutQuint((currentOffset - start) / interval),
        uranus.cameraFocusPoint.z + (neptune.cameraFocusPoint.z - uranus.cameraFocusPoint.z) * easeInOutQuint((currentOffset - start) / interval)
      );
      if (start < currentOffset && currentOffset <= start + interval / 2) {
        camera.localPosition.setFromSphericalCoords(
          uranus.cameraPosition.radius + 200 * easeInOutQuint((currentOffset - start) / interval),
          uranus.cameraPosition.phi + (neptune.cameraPosition.phi - uranus.cameraPosition.phi) * easeInOutQuint((currentOffset - start) / interval),
          uranus.cameraPosition.theta + (neptune.cameraPosition.theta - uranus.cameraPosition.theta) * easeInOutQuint((currentOffset - start) / interval)
        );
      }
      else if (start + interval / 2 < currentOffset && currentOffset <= end) {
        camera.localPosition.setFromSphericalCoords(
          (uranus.cameraPosition.radius + 200) + neptune.cameraPosition.radius - (uranus.cameraPosition.radius + 200) * easeInOutQuint((currentOffset - start) / interval),
          uranus.cameraPosition.phi + (neptune.cameraPosition.phi - uranus.cameraPosition.phi) * easeInOutQuint((currentOffset - start) / interval),
          uranus.cameraPosition.theta + (neptune.cameraPosition.theta - uranus.cameraPosition.theta) * easeInOutQuint((currentOffset - start) / interval)
        );
      }
    },
    neptune() {
      camera.focusPoint.copy(neptune.cameraFocusPoint);
      camera.localPosition.setFromSpherical(neptune.cameraPosition);
    },
    toSun(currentOffset) {
      const start = sections.neptune.offset;
      const end = sections.toSun.offset;
      const interval = end - start;
      camera.focusPoint.set(
        neptune.cameraFocusPoint.x + (sun.cameraFocusPoint.x - neptune.cameraFocusPoint.x) * easeInOutQuint((currentOffset - start) / interval),
        neptune.cameraFocusPoint.y + (sun.cameraFocusPoint.y - neptune.cameraFocusPoint.y) * easeInOutQuint((currentOffset - start) / interval),
        neptune.cameraFocusPoint.z + (sun.cameraFocusPoint.z - neptune.cameraFocusPoint.z) * easeInOutQuint((currentOffset - start) / interval)
      );
      if (start < currentOffset && currentOffset <= start + interval / 2) {
        camera.localPosition.setFromSphericalCoords(
          neptune.cameraPosition.radius + 0 * easeInOutQuint((currentOffset - start) / interval),
          neptune.cameraPosition.phi + (sun.cameraPosition.phi - neptune.cameraPosition.phi) * easeInOutQuint((currentOffset - start) / interval),
          neptune.cameraPosition.theta + (sun.cameraPosition.theta - neptune.cameraPosition.theta) * easeInOutQuint((currentOffset - start) / interval * 2)
        );
      }
      else if (start + interval / 2 < currentOffset && currentOffset <= end) {
        camera.localPosition.setFromSphericalCoords(
          (neptune.cameraPosition.radius + 0) + sun.cameraPosition.radius - (neptune.cameraPosition.radius + 0) * easeInOutQuint((currentOffset - start) / interval),
          neptune.cameraPosition.phi + (sun.cameraPosition.phi - neptune.cameraPosition.phi) * easeInOutQuint((currentOffset - start) / interval),
          sun.cameraPosition.theta
        );
      }
    },
    sun() {
      camera.focusPoint.copy(sun.cameraFocusPoint);
      camera.localPosition.setFromSpherical(sun.cameraPosition);
    }
  };

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

    camera.position.lerp(new THREE.Vector3(...camera.focusPoint).add(camera.localPosition), 2 * timeDelta);
    camera.lookAt(camera.currentFocusPoint.lerp(camera.focusPoint, 2 * timeDelta));

    renderer.render(scene, camera);
  }

  function handleMouseMove(event) {
    mouse.x = (event.clientX / innerWidth) * 2 - 1;
    // mouse.y = -(event.clientY / innerHeight) * 2 + 1;
  }

  function handleDeviceOrientation(event) {
    if (window.innerWidth < window.innerHeight) {
      mouse.x = event.gamma / 90;
    } else {
      mouse.x = event.beta * 2 / 180;
    }
  }

  function handleMediaChange(mediaQuery) {
    Object.keys(sections).forEach(sectionKey => {
      if (sectionKey.startsWith('to')) {
        sections[sectionKey].offset = sections[sectionKey].domElement.offsetTop + sections[sectionKey].domElement.offsetHeight - window.innerHeight;
      } else {
        sections[sectionKey].offset = sections[sectionKey].domElement.offsetTop + sections[sectionKey].domElement.offsetHeight;
      }
    });

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

  function handleScroll() {
    const currentOffset = window.pageYOffset;

    if (currentOffset === 0) tweens.welcome();
    else if (0 < currentOffset && currentOffset <= sections.toMercury.offset) tweens.toMercury(currentOffset);
    else if (sections.toMercury.offset < currentOffset && currentOffset <= sections.mercury.offset) tweens.mercury();
    else if (sections.mercury.offset < currentOffset && currentOffset <= sections.toVenus.offset) tweens.toVenus(currentOffset);
    else if (sections.toVenus.offset < currentOffset && currentOffset <= sections.venus.offset) tweens.venus();
    else if (sections.venus.offset < currentOffset && currentOffset <= sections.toEarth.offset) tweens.toEarth(currentOffset);
    else if (sections.toEarth.offset < currentOffset && currentOffset <= sections.earth.offset) tweens.earth();
    else if (sections.earth.offset < currentOffset && currentOffset <= sections.toMars.offset) tweens.toMars(currentOffset);
    else if (sections.toMars.offset < currentOffset && currentOffset <= sections.mars.offset) tweens.mars();
    else if (sections.mars.offset < currentOffset && currentOffset <= sections.toJupiter.offset) tweens.toJupiter(currentOffset);
    else if (sections.toJupiter.offset < currentOffset && currentOffset <= sections.jupiter.offset) tweens.jupiter();
    else if (sections.jupiter.offset < currentOffset && currentOffset <= sections.toSaturn.offset) tweens.toSaturn(currentOffset);
    else if (sections.toSaturn.offset < currentOffset && currentOffset <= sections.saturn.offset) tweens.saturn();
    else if (sections.saturn.offset < currentOffset && currentOffset <= sections.toUranus.offset) tweens.toUranus(currentOffset);
    else if (sections.toUranus.offset < currentOffset && currentOffset <= sections.uranus.offset) tweens.uranus();
    else if (sections.uranus.offset < currentOffset && currentOffset <= sections.toNeptune.offset) tweens.toNeptune(currentOffset);
    else if (sections.toNeptune.offset < currentOffset && currentOffset <= sections.neptune.offset) tweens.neptune();
    else if (sections.neptune.offset < currentOffset && currentOffset <= sections.toSun.offset) tweens.toSun(currentOffset);
    else if (sections.toSun.offset < currentOffset && currentOffset <= sections.sun.offset) tweens.sun();
  }

  function handleAppResize(domContainer, mediaQuery) {
    camera.aspect = domContainer.clientWidth / domContainer.clientHeight;
    camera.updateProjectionMatrix();
    renderer.setSize(domContainer.clientWidth, domContainer.clientHeight);
    handleMediaChange(mediaQuery);
    renderer.render(scene, camera);
  }

  return { update, handleMouseMove, handleDeviceOrientation, handleMediaChange, handleScroll, handleAppResize };
}