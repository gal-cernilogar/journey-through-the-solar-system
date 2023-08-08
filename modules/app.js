import * as THREE from 'three';
import Stats from 'three/examples/jsm/libs/stats.module';
import Camera from './camera';
import Scene from './scene';
import Renderer from './renderer';
import { stars, sun, mercury, venus, earth, moon, mars, jupiter, saturn, uranus, neptune } from '/modules/objects';
import { PI } from "/modules/math.js";

export default function createApp(domContainer, sections, mouse) {
  const camera = new Camera(domContainer);
  const scene = new Scene({ stars, sun, mercury, venus, earth, moon, mars, jupiter, saturn, uranus, neptune });
  const renderer = new Renderer(domContainer, update);

  const clock = new THREE.Clock();

  const stats = new Stats();
  document.body.appendChild(stats.dom);

  function update() {
    const dt = clock.getDelta();

    stars.update(dt, camera.position);
    sun.update(camera, renderer, clock.elapsedTime);
    mercury.update(dt, mouse);
    venus.update(dt, mouse);
    earth.update(dt, mouse);
    moon.update(dt);
    mars.update(dt, mouse);
    jupiter.update(dt, mouse);
    saturn.update(dt, mouse);
    uranus.update(dt, mouse);
    neptune.update(dt, mouse);

    camera.update(dt);

    stats.update();

    renderer.render(scene, camera);
  }

  function handleMouseMove(event) {
    mouse.x = (event.clientX / domContainer.clientWidth) * 2 - 1;
    // mouse.y = - (event.clientY / domContainer.clientHeight) * 2 + 1;
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
      camera.mercuryFocusPoint.copy(mercury.position);
      camera.venusFocusPoint.copy(venus.position);
      camera.earthFocusPoint.copy(earth.position);
      camera.marsFocusPoint.copy(mars.position);
      camera.jupiterFocusPoint.copy(jupiter.position);
      camera.saturnFocusPoint.copy(saturn.position);
      camera.uranusFocusPoint.copy(uranus.position);
      camera.neptuneFocusPoint.copy(neptune.position);
      camera.sunFocusPoint.copy(sun.position);

      camera.heroOrbitPosition.set(sun.radius * 6, PI / 2.05, PI / 100);
      camera.mercuryOrbitPosition.set(mercury.radius * 6, PI / 2.1, PI * 0.8);
      camera.venusOrbitPosition.set(venus.radius * 6, PI / 2.1, PI * 1.4);
      camera.earthOrbitPosition.set(earth.radius * 6, PI / 2.1, PI * 0.8);
      camera.marsOrbitPosition.set(mars.radius * 6, PI / 2.1, PI * 1.7);
      camera.jupiterOrbitPosition.set(jupiter.radius * 6, PI / 2.1, PI * 0.3);
      camera.saturnOrbitPosition.set(saturn.radius * 6, PI / 2.1, PI * 1);
      camera.uranusOrbitPosition.set(uranus.radius * 6, PI / 2.1, PI * (-0.2));
      camera.neptuneOrbitPosition.set(neptune.radius * 6, PI / 2.1, PI * 0.5);
      camera.sunOrbitPosition.set(sun.radius * 6, PI / 2, 5 * PI / 4);

      handleScroll();
    } else {
      camera.mercuryFocusPoint.copy(new THREE.Vector3(...mercury.position).add(
        new THREE.Vector3().setFromSphericalCoords(mercury.radius, PI / 2, mercury.sphericalPosition.theta + PI / 2)
      ));
      camera.venusFocusPoint.copy(new THREE.Vector3(...venus.position).add(
        new THREE.Vector3().setFromSphericalCoords(venus.radius, PI / 2, venus.sphericalPosition.theta - PI / 2)
      ));
      camera.earthFocusPoint.copy(new THREE.Vector3(...earth.position).add(
        new THREE.Vector3().setFromSphericalCoords(earth.radius, PI / 2, earth.sphericalPosition.theta + PI / 2)
      ));
      camera.marsFocusPoint.copy(new THREE.Vector3(...mars.position).add(
        new THREE.Vector3().setFromSphericalCoords(mars.radius, PI / 2, mars.sphericalPosition.theta - PI / 2)
      ));
      camera.jupiterFocusPoint.copy(new THREE.Vector3(...jupiter.position).add(
        new THREE.Vector3().setFromSphericalCoords(jupiter.radius, PI / 2, jupiter.sphericalPosition.theta + PI / 2)
      ));
      camera.saturnFocusPoint.copy(new THREE.Vector3(...saturn.position).add(
        new THREE.Vector3().setFromSphericalCoords(saturn.radius, PI / 2, saturn.sphericalPosition.theta - PI / 2)
      ));
      camera.uranusFocusPoint.copy(new THREE.Vector3(...uranus.position).add(
        new THREE.Vector3().setFromSphericalCoords(uranus.radius, PI / 2, uranus.sphericalPosition.theta + PI / 2)
      ));
      camera.neptuneFocusPoint.copy(new THREE.Vector3(...neptune.position).add(
        new THREE.Vector3().setFromSphericalCoords(neptune.radius, PI / 2, neptune.sphericalPosition.theta - PI / 2)
      ));
      camera.sunFocusPoint.copy(sun.position);

      camera.heroOrbitPosition.set(sun.radius * 5, PI / 2.005, PI / 1000);
      camera.mercuryOrbitPosition.set(mercury.radius * 3, PI / 2.1, PI * 0.8);
      camera.venusOrbitPosition.set(venus.radius * 3, PI / 2.1, PI * 1.4);
      camera.earthOrbitPosition.set(earth.radius * 3, PI / 2.1, PI * 0.8);
      camera.marsOrbitPosition.set(mars.radius * 3, PI / 2.1, PI * 1.7);
      camera.jupiterOrbitPosition.set(jupiter.radius * 3, PI / 2.1, PI * 0.3);
      camera.saturnOrbitPosition.set(saturn.radius * 3, PI / 2.1, PI * 1);
      camera.uranusOrbitPosition.set(uranus.radius * 3, PI / 2.1, PI * (-0.2));
      camera.neptuneOrbitPosition.set(neptune.radius * 3, PI / 2.1, PI * 0.5);
      camera.sunOrbitPosition.set(sun.radius * 3, PI / 2, 5 * PI / 4);

      handleScroll();
    }
  }

  function handleScroll() {
    const currentOffset = window.pageYOffset;

    camera.updateOnScroll(sections, currentOffset);
  }

  function handleAppResize(domContainer, mediaQuery) {
    handleMediaChange(mediaQuery);

    camera.aspect = domContainer.clientWidth / domContainer.clientHeight;
    camera.updateProjectionMatrix();

    renderer.setSize(domContainer.clientWidth, domContainer.clientHeight);
    renderer.render(scene, camera);
  }

  return { update, handleMouseMove, handleMediaChange, handleScroll, handleAppResize };
}