import * as THREE from 'three';
import Camera from './camera';
import Scene from './scene';
import Renderer from './renderer';
import { stars, sun, mercury, venus, earth, moon, mars, jupiter, saturn, uranus, neptune } from '/modules/objects';
import { PI } from "/modules/math.js";
import Tester from './tester';

export default class App {
  #domContainer;
  #sections;
  #mouse;
  #mediaQuery;

  #camera;
  #scene;
  #renderer;
  #clock;
  #tester;

  constructor(domContainer, sections, mouse, mediaQuery) {
    this.#domContainer = domContainer;
    this.#sections = sections;
    this.#mouse = mouse;
    this.#mediaQuery = mediaQuery;

    this.#tester = new Tester('passive', 10000);
    this.#clock = new THREE.Clock();
    this.#camera = new Camera(this.#domContainer);
    this.#scene = new Scene({ stars, sun, mercury, venus, earth, moon, mars, jupiter, saturn, uranus, neptune });
    this.#renderer = new Renderer(this.#domContainer, this.update);
  }

  update = () => {
    const startTime = performance.now();
    const dt = this.#clock.getDelta();

    stars.update(dt, this.#camera.position);
    sun.update(this.#camera, this.#renderer, this.#clock.elapsedTime);
    mercury.update(dt, this.#mouse);
    venus.update(dt, this.#mouse);
    earth.update(dt, this.#mouse);
    moon.update(dt);
    mars.update(dt, this.#mouse);
    jupiter.update(dt, this.#mouse);
    saturn.update(dt, this.#mouse);
    uranus.update(dt, this.#mouse);
    neptune.update(dt, this.#mouse);

    this.#camera.update(dt);

    this.#renderer.render(this.#scene, this.#camera);

    if (this.#tester.isTesting) this.#tester.update(performance.now() - startTime);
  };

  handleMouseMove = (event) => {
    this.#mouse.x = (event.clientX / this.#domContainer.clientWidth) * 2 - 1;
  };

  handleScroll = () => {
    this.#camera.updateOnScroll(this.#sections, window.scrollY);
  };

  handleMediaChange = () => {
    Object.keys(this.#sections).forEach(sectionKey => {
      if (sectionKey.startsWith('to')) {
        this.#sections[sectionKey].offset = this.#sections[sectionKey].domElement.offsetTop + this.#sections[sectionKey].domElement.offsetHeight - window.innerHeight;
      } else {
        this.#sections[sectionKey].offset = this.#sections[sectionKey].domElement.offsetTop + this.#sections[sectionKey].domElement.offsetHeight;
      }
    });

    if (this.#mediaQuery.matches) {
      this.#camera.mercuryFocusPoint.copy(mercury.position);
      this.#camera.venusFocusPoint.copy(venus.position);
      this.#camera.earthFocusPoint.copy(earth.position);
      this.#camera.marsFocusPoint.copy(mars.position);
      this.#camera.jupiterFocusPoint.copy(jupiter.position);
      this.#camera.saturnFocusPoint.copy(saturn.position);
      this.#camera.uranusFocusPoint.copy(uranus.position);
      this.#camera.neptuneFocusPoint.copy(neptune.position);
      this.#camera.sunFocusPoint.copy(sun.position);

      this.#camera.heroOrbitPosition.set(sun.radius * 6, PI / 2.05, PI / 100);
      this.#camera.mercuryOrbitPosition.set(mercury.radius * 6, PI / 2.1, PI * 0.8);
      this.#camera.venusOrbitPosition.set(venus.radius * 6, PI / 2.1, PI * 1.4);
      this.#camera.earthOrbitPosition.set(earth.radius * 6, PI / 2.1, PI * 0.8);
      this.#camera.marsOrbitPosition.set(mars.radius * 6, PI / 2.1, PI * 1.7);
      this.#camera.jupiterOrbitPosition.set(jupiter.radius * 6, PI / 2.1, PI * 0.3);
      this.#camera.saturnOrbitPosition.set(saturn.radius * 6, PI / 2.1, PI * 1);
      this.#camera.uranusOrbitPosition.set(uranus.radius * 6, PI / 2.1, PI * (-0.2));
      this.#camera.neptuneOrbitPosition.set(neptune.radius * 6, PI / 2.1, PI * 0.5);
      this.#camera.sunOrbitPosition.set(sun.radius * 6, PI / 2, 5 * PI / 4);

      this.handleScroll();
    } else {
      this.#camera.mercuryFocusPoint.copy(new THREE.Vector3(...mercury.position).add(
        new THREE.Vector3().setFromSphericalCoords(mercury.radius, PI / 2, mercury.sphericalPosition.theta + PI / 2)
      ));
      this.#camera.venusFocusPoint.copy(new THREE.Vector3(...venus.position).add(
        new THREE.Vector3().setFromSphericalCoords(venus.radius, PI / 2, venus.sphericalPosition.theta - PI / 2)
      ));
      this.#camera.earthFocusPoint.copy(new THREE.Vector3(...earth.position).add(
        new THREE.Vector3().setFromSphericalCoords(earth.radius, PI / 2, earth.sphericalPosition.theta + PI / 2)
      ));
      this.#camera.marsFocusPoint.copy(new THREE.Vector3(...mars.position).add(
        new THREE.Vector3().setFromSphericalCoords(mars.radius, PI / 2, mars.sphericalPosition.theta - PI / 2)
      ));
      this.#camera.jupiterFocusPoint.copy(new THREE.Vector3(...jupiter.position).add(
        new THREE.Vector3().setFromSphericalCoords(jupiter.radius, PI / 2, jupiter.sphericalPosition.theta + PI / 2)
      ));
      this.#camera.saturnFocusPoint.copy(new THREE.Vector3(...saturn.position).add(
        new THREE.Vector3().setFromSphericalCoords(saturn.radius, PI / 2, saturn.sphericalPosition.theta - PI / 2)
      ));
      this.#camera.uranusFocusPoint.copy(new THREE.Vector3(...uranus.position).add(
        new THREE.Vector3().setFromSphericalCoords(uranus.radius, PI / 2, uranus.sphericalPosition.theta + PI / 2)
      ));
      this.#camera.neptuneFocusPoint.copy(new THREE.Vector3(...neptune.position).add(
        new THREE.Vector3().setFromSphericalCoords(neptune.radius, PI / 2, neptune.sphericalPosition.theta - PI / 2)
      ));
      this.#camera.sunFocusPoint.copy(sun.position);

      this.#camera.heroOrbitPosition.set(sun.radius * 5, PI / 2.005, PI / 1000);
      this.#camera.mercuryOrbitPosition.set(mercury.radius * 3, PI / 2.1, PI * 0.8);
      this.#camera.venusOrbitPosition.set(venus.radius * 3, PI / 2.1, PI * 1.4);
      this.#camera.earthOrbitPosition.set(earth.radius * 3, PI / 2.1, PI * 0.8);
      this.#camera.marsOrbitPosition.set(mars.radius * 3, PI / 2.1, PI * 1.7);
      this.#camera.jupiterOrbitPosition.set(jupiter.radius * 3, PI / 2.1, PI * 0.3);
      this.#camera.saturnOrbitPosition.set(saturn.radius * 3, PI / 2.1, PI * 1);
      this.#camera.uranusOrbitPosition.set(uranus.radius * 3, PI / 2.1, PI * (-0.2));
      this.#camera.neptuneOrbitPosition.set(neptune.radius * 3, PI / 2.1, PI * 0.5);
      this.#camera.sunOrbitPosition.set(sun.radius * 3, PI / 2, 5 * PI / 4);

      this.handleScroll();
    }
  };

  handleAppResize = () => {
    this.handleMediaChange();

    this.#camera.aspect = this.#domContainer.clientWidth / this.#domContainer.clientHeight;
    this.#camera.updateProjectionMatrix();

    this.#renderer.setSize(this.#domContainer.clientWidth, this.#domContainer.clientHeight);
    this.#renderer.render(this.#scene, this.#camera);
  };
}
