import * as THREE from 'three';
import { easeInOutQuint } from "./math.js";

export default class Camera extends THREE.PerspectiveCamera {
  constructor(domContainer) {
    super(45, domContainer.clientWidth / domContainer.clientHeight, 0.001, 2000);

    this.idealFocusPoint = new THREE.Vector3();
    this.currentFocusPoint = new THREE.Vector3(0, 0, 0);
    this.mercuryFocusPoint = new THREE.Vector3();
    this.venusFocusPoint = new THREE.Vector3();
    this.earthFocusPoint = new THREE.Vector3();
    this.marsFocusPoint = new THREE.Vector3();
    this.jupiterFocusPoint = new THREE.Vector3();
    this.saturnFocusPoint = new THREE.Vector3();
    this.uranusFocusPoint = new THREE.Vector3();
    this.neptuneFocusPoint = new THREE.Vector3();
    this.sunFocusPoint = new THREE.Vector3();

    this.idealOrbitPosition = new THREE.Vector3();
    this.initialOrbitPosition = new THREE.Spherical();
    this.mercuryOrbitPosition = new THREE.Spherical();
    this.venusOrbitPosition = new THREE.Spherical();
    this.earthOrbitPosition = new THREE.Spherical();
    this.marsOrbitPosition = new THREE.Spherical();
    this.jupiterOrbitPosition = new THREE.Spherical();
    this.saturnOrbitPosition = new THREE.Spherical();
    this.uranusOrbitPosition = new THREE.Spherical();
    this.neptuneOrbitPosition = new THREE.Spherical();
    this.sunOrbitPosition = new THREE.Spherical();

    this.idealPosition = new THREE.Vector3();
  }

  update(timeDelta) {
    const lerpFactor = 1 - Math.pow(0.1, timeDelta);

    this.position.lerp(this.idealPosition, lerpFactor);
    this.lookAt(this.currentFocusPoint.lerp(this.idealFocusPoint, lerpFactor));
  }

  updateOnScroll(sections, currentOffset) {
    if (currentOffset === 0) this.#onInitial();
    else if (currentOffset <= sections.toMercury.offset) this.#toMercury(sections, currentOffset);
    else if (currentOffset <= sections.mercury.offset) this.#onMercury();
    else if (currentOffset <= sections.toVenus.offset) this.#toVenus(sections, currentOffset);
    else if (currentOffset <= sections.venus.offset) this.#onVenus();
    else if (currentOffset <= sections.toEarth.offset) this.#toEarth(sections, currentOffset);
    else if (currentOffset <= sections.earth.offset) this.#onEarth();
    else if (currentOffset <= sections.toMars.offset) this.#toMars(sections, currentOffset);
    else if (currentOffset <= sections.mars.offset) this.#onMars();
    else if (currentOffset <= sections.toJupiter.offset) this.#toJupiter(sections, currentOffset);
    else if (currentOffset <= sections.jupiter.offset) this.#onJupiter();
    else if (currentOffset <= sections.toSaturn.offset) this.#toSaturn(sections, currentOffset);
    else if (currentOffset <= sections.saturn.offset) this.#onSaturn();
    else if (currentOffset <= sections.toUranus.offset) this.#toUranus(sections, currentOffset);
    else if (currentOffset <= sections.uranus.offset) this.#onUranus();
    else if (currentOffset <= sections.toNeptune.offset) this.#toNeptune(sections, currentOffset);
    else if (currentOffset <= sections.neptune.offset) this.#onNeptune();
    else if (currentOffset <= sections.toSun.offset) this.#toSun(sections, currentOffset);
    else if (currentOffset <= sections.sun.offset) this.#onSun();

    this.idealPosition.copy(this.idealFocusPoint).add(this.idealOrbitPosition);
  }

  #onInitial() {
    this.idealFocusPoint.copy(this.sunFocusPoint);
    this.idealOrbitPosition.setFromSpherical(this.initialOrbitPosition);
  }

  #toMercury(sections, currentOffset) {
    const start = 0;
    const end = sections.toMercury.offset;
    const interval = end - start;
    this.idealFocusPoint.set(
      this.mercuryFocusPoint.x * easeInOutQuint((currentOffset - start) / interval),
      this.mercuryFocusPoint.y * easeInOutQuint((currentOffset - start) / interval),
      this.mercuryFocusPoint.z * easeInOutQuint((currentOffset - start) / interval)
    );
    this.idealOrbitPosition.setFromSphericalCoords(
      this.initialOrbitPosition.radius + (this.mercuryOrbitPosition.radius - this.initialOrbitPosition.radius) * easeInOutQuint((currentOffset - start) / interval),
      this.initialOrbitPosition.phi + (this.mercuryOrbitPosition.phi - this.initialOrbitPosition.phi) * easeInOutQuint((currentOffset - start) / interval),
      this.initialOrbitPosition.theta + (this.mercuryOrbitPosition.theta - this.initialOrbitPosition.theta) * easeInOutQuint((currentOffset - start) / interval)
    );
  }

  #onMercury() {
    this.idealFocusPoint.copy(this.mercuryFocusPoint);
    this.idealOrbitPosition.setFromSpherical(this.mercuryOrbitPosition);
  }

  #toVenus(sections, currentOffset) {
    const start = sections.mercury.offset;
    const end = sections.toVenus.offset;
    const interval = end - start;
    this.idealFocusPoint.set(
      this.mercuryFocusPoint.x + (this.venusFocusPoint.x - this.mercuryFocusPoint.x) * easeInOutQuint((currentOffset - start) / interval),
      this.mercuryFocusPoint.y + (this.venusFocusPoint.y - this.mercuryFocusPoint.y) * easeInOutQuint((currentOffset - start) / interval),
      this.mercuryFocusPoint.z + (this.venusFocusPoint.z - this.mercuryFocusPoint.z) * easeInOutQuint((currentOffset - start) / interval)
    );
    if (start < currentOffset && currentOffset <= start + interval / 2) {
      this.idealOrbitPosition.setFromSphericalCoords(
        this.mercuryOrbitPosition.radius + 10 * easeInOutQuint((currentOffset - start) / interval),
        this.mercuryOrbitPosition.phi + (this.venusOrbitPosition.phi - this.mercuryOrbitPosition.phi) * easeInOutQuint((currentOffset - start) / interval),
        this.mercuryOrbitPosition.theta + (this.venusOrbitPosition.theta - this.mercuryOrbitPosition.theta) * easeInOutQuint((currentOffset - start) / interval)
      );
    }
    else if (start + interval / 2 < currentOffset && currentOffset <= end) {
      this.idealOrbitPosition.setFromSphericalCoords(
        (this.mercuryOrbitPosition.radius + 10) + this.venusOrbitPosition.radius - (this.mercuryOrbitPosition.radius + 10) * easeInOutQuint((currentOffset - start) / interval),
        this.mercuryOrbitPosition.phi + (this.venusOrbitPosition.phi - this.mercuryOrbitPosition.phi) * easeInOutQuint((currentOffset - start) / interval),
        this.mercuryOrbitPosition.theta + (this.venusOrbitPosition.theta - this.mercuryOrbitPosition.theta) * easeInOutQuint((currentOffset - start) / interval)
      );
    }
  }

  #onVenus() {
    this.idealFocusPoint.copy(this.venusFocusPoint);
    this.idealOrbitPosition.setFromSpherical(this.venusOrbitPosition);
  }

  #toEarth(sections, currentOffset) {
    const start = sections.venus.offset;
    const end = sections.toEarth.offset;
    const interval = end - start;
    this.idealFocusPoint.set(
      this.venusFocusPoint.x + (this.earthFocusPoint.x - this.venusFocusPoint.x) * easeInOutQuint((currentOffset - start) / interval),
      this.venusFocusPoint.y + (this.earthFocusPoint.y - this.venusFocusPoint.y) * easeInOutQuint((currentOffset - start) / interval),
      this.venusFocusPoint.z + (this.earthFocusPoint.z - this.venusFocusPoint.z) * easeInOutQuint((currentOffset - start) / interval)
    );
    if (start < currentOffset && currentOffset <= start + interval / 2) {
      this.idealOrbitPosition.setFromSphericalCoords(
        this.venusOrbitPosition.radius + 10 * easeInOutQuint((currentOffset - start) / interval),
        this.venusOrbitPosition.phi + (this.earthOrbitPosition.phi - this.venusOrbitPosition.phi) * easeInOutQuint((currentOffset - start) / interval),
        this.venusOrbitPosition.theta + (this.earthOrbitPosition.theta - this.venusOrbitPosition.theta) * easeInOutQuint((currentOffset - start) / interval)
      );
    }
    else if (start + interval / 2 < currentOffset && currentOffset <= end) {
      this.idealOrbitPosition.setFromSphericalCoords(
        (this.venusOrbitPosition.radius + 10) + this.earthOrbitPosition.radius - (this.venusOrbitPosition.radius + 10) * easeInOutQuint((currentOffset - start) / interval),
        this.venusOrbitPosition.phi + (this.earthOrbitPosition.phi - this.venusOrbitPosition.phi) * easeInOutQuint((currentOffset - start) / interval),
        this.venusOrbitPosition.theta + (this.earthOrbitPosition.theta - this.venusOrbitPosition.theta) * easeInOutQuint((currentOffset - start) / interval)
      );
    }
  }

  #onEarth() {
    this.idealFocusPoint.copy(this.earthFocusPoint);
    this.idealOrbitPosition.setFromSpherical(this.earthOrbitPosition);
  }

  #toMars(sections, currentOffset) {
    const start = sections.earth.offset;
    const end = sections.toMars.offset;
    const interval = end - start;
    this.idealFocusPoint.set(
      this.earthFocusPoint.x + (this.marsFocusPoint.x - this.earthFocusPoint.x) * easeInOutQuint((currentOffset - start) / interval),
      this.earthFocusPoint.y + (this.marsFocusPoint.y - this.earthFocusPoint.y) * easeInOutQuint((currentOffset - start) / interval),
      this.earthFocusPoint.z + (this.marsFocusPoint.z - this.earthFocusPoint.z) * easeInOutQuint((currentOffset - start) / interval)
    );
    if (start < currentOffset && currentOffset <= start + interval / 2) {
      this.idealOrbitPosition.setFromSphericalCoords(
        this.earthOrbitPosition.radius + 10 * easeInOutQuint((currentOffset - start) / interval),
        this.earthOrbitPosition.phi + (this.marsOrbitPosition.phi - this.earthOrbitPosition.phi) * easeInOutQuint((currentOffset - start) / interval),
        this.earthOrbitPosition.theta + (this.marsOrbitPosition.theta - this.earthOrbitPosition.theta) * easeInOutQuint((currentOffset - start) / interval)
      );
    }
    else if (start + interval / 2 < currentOffset && currentOffset <= end) {
      this.idealOrbitPosition.setFromSphericalCoords(
        (this.earthOrbitPosition.radius + 10) + this.marsOrbitPosition.radius - (this.earthOrbitPosition.radius + 10) * easeInOutQuint((currentOffset - start) / interval),
        this.earthOrbitPosition.phi + (this.marsOrbitPosition.phi - this.earthOrbitPosition.phi) * easeInOutQuint((currentOffset - start) / interval),
        this.earthOrbitPosition.theta + (this.marsOrbitPosition.theta - this.earthOrbitPosition.theta) * easeInOutQuint((currentOffset - start) / interval)
      );
    }
  }

  #onMars() {
    this.idealFocusPoint.copy(this.marsFocusPoint);
    this.idealOrbitPosition.setFromSpherical(this.marsOrbitPosition);
  }

  #toJupiter(sections, currentOffset) {
    const start = sections.mars.offset;
    const end = sections.toJupiter.offset;
    const interval = end - start;
    this.idealFocusPoint.set(
      this.marsFocusPoint.x + (this.jupiterFocusPoint.x - this.marsFocusPoint.x) * easeInOutQuint((currentOffset - start) / interval),
      this.marsFocusPoint.y + (this.jupiterFocusPoint.y - this.marsFocusPoint.y) * easeInOutQuint((currentOffset - start) / interval),
      this.marsFocusPoint.z + (this.jupiterFocusPoint.z - this.marsFocusPoint.z) * easeInOutQuint((currentOffset - start) / interval)
    );
    if (start < currentOffset && currentOffset <= start + interval / 2) {
      this.idealOrbitPosition.setFromSphericalCoords(
        this.marsOrbitPosition.radius + 100 * easeInOutQuint((currentOffset - start) / interval),
        this.marsOrbitPosition.phi + (this.jupiterOrbitPosition.phi - this.marsOrbitPosition.phi) * easeInOutQuint((currentOffset - start) / interval),
        this.marsOrbitPosition.theta + (this.jupiterOrbitPosition.theta - this.marsOrbitPosition.theta) * easeInOutQuint((currentOffset - start) / interval)
      );
    }
    else if (start + interval / 2 < currentOffset && currentOffset <= end) {
      this.idealOrbitPosition.setFromSphericalCoords(
        (this.marsOrbitPosition.radius + 100) + this.jupiterOrbitPosition.radius - (this.marsOrbitPosition.radius + 100) * easeInOutQuint((currentOffset - start) / interval),
        this.marsOrbitPosition.phi + (this.jupiterOrbitPosition.phi - this.marsOrbitPosition.phi) * easeInOutQuint((currentOffset - start) / interval),
        this.marsOrbitPosition.theta + (this.jupiterOrbitPosition.theta - this.marsOrbitPosition.theta) * easeInOutQuint((currentOffset - start) / interval)
      );
    }
  }

  #onJupiter() {
    this.idealFocusPoint.copy(this.jupiterFocusPoint);
    this.idealOrbitPosition.setFromSpherical(this.jupiterOrbitPosition);
  }

  #toSaturn(sections, currentOffset) {
    const start = sections.jupiter.offset;
    const end = sections.toSaturn.offset;
    const interval = end - start;
    this.idealFocusPoint.set(
      this.jupiterFocusPoint.x + (this.saturnFocusPoint.x - this.jupiterFocusPoint.x) * easeInOutQuint((currentOffset - start) / interval),
      this.jupiterFocusPoint.y + (this.saturnFocusPoint.y - this.jupiterFocusPoint.y) * easeInOutQuint((currentOffset - start) / interval),
      this.jupiterFocusPoint.z + (this.saturnFocusPoint.z - this.jupiterFocusPoint.z) * easeInOutQuint((currentOffset - start) / interval)
    );
    if (start < currentOffset && currentOffset <= start + interval / 2) {
      this.idealOrbitPosition.setFromSphericalCoords(
        this.jupiterOrbitPosition.radius + 100 * easeInOutQuint((currentOffset - start) / interval),
        this.jupiterOrbitPosition.phi + (this.saturnOrbitPosition.phi - this.jupiterOrbitPosition.phi) * easeInOutQuint((currentOffset - start) / interval),
        this.jupiterOrbitPosition.theta + (this.saturnOrbitPosition.theta - this.jupiterOrbitPosition.theta) * easeInOutQuint((currentOffset - start) / interval)
      );
    }
    else if (start + interval / 2 < currentOffset && currentOffset <= end) {
      this.idealOrbitPosition.setFromSphericalCoords(
        (this.jupiterOrbitPosition.radius + 100) + this.saturnOrbitPosition.radius - (this.jupiterOrbitPosition.radius + 100) * easeInOutQuint((currentOffset - start) / interval),
        this.jupiterOrbitPosition.phi + (this.saturnOrbitPosition.phi - this.jupiterOrbitPosition.phi) * easeInOutQuint((currentOffset - start) / interval),
        this.jupiterOrbitPosition.theta + (this.saturnOrbitPosition.theta - this.jupiterOrbitPosition.theta) * easeInOutQuint((currentOffset - start) / interval)
      );
    }
  }

  #onSaturn() {
    this.idealFocusPoint.copy(this.saturnFocusPoint);
    this.idealOrbitPosition.setFromSpherical(this.saturnOrbitPosition);
  }

  #toUranus(sections, currentOffset) {
    const start = sections.saturn.offset;
    const end = sections.toUranus.offset;
    const interval = end - start;
    this.idealFocusPoint.set(
      this.saturnFocusPoint.x + (this.uranusFocusPoint.x - this.saturnFocusPoint.x) * easeInOutQuint((currentOffset - start) / interval),
      this.saturnFocusPoint.y + (this.uranusFocusPoint.y - this.saturnFocusPoint.y) * easeInOutQuint((currentOffset - start) / interval),
      this.saturnFocusPoint.z + (this.uranusFocusPoint.z - this.saturnFocusPoint.z) * easeInOutQuint((currentOffset - start) / interval)
    );
    if (start < currentOffset && currentOffset <= start + interval / 2) {
      this.idealOrbitPosition.setFromSphericalCoords(
        this.saturnOrbitPosition.radius + 100 * easeInOutQuint((currentOffset - start) / interval),
        this.saturnOrbitPosition.phi + (this.uranusOrbitPosition.phi - this.saturnOrbitPosition.phi) * easeInOutQuint((currentOffset - start) / interval),
        this.saturnOrbitPosition.theta + (this.uranusOrbitPosition.theta - this.saturnOrbitPosition.theta) * easeInOutQuint((currentOffset - start) / interval)
      );
    }
    else if (start + interval / 2 < currentOffset && currentOffset <= end) {
      this.idealOrbitPosition.setFromSphericalCoords(
        (this.saturnOrbitPosition.radius + 100) + this.uranusOrbitPosition.radius - (this.saturnOrbitPosition.radius + 100) * easeInOutQuint((currentOffset - start) / interval),
        this.saturnOrbitPosition.phi + (this.uranusOrbitPosition.phi - this.saturnOrbitPosition.phi) * easeInOutQuint((currentOffset - start) / interval),
        this.saturnOrbitPosition.theta + (this.uranusOrbitPosition.theta - this.saturnOrbitPosition.theta) * easeInOutQuint((currentOffset - start) / interval)
      );
    }
  }

  #onUranus() {
    this.idealFocusPoint.copy(this.uranusFocusPoint);
    this.idealOrbitPosition.setFromSpherical(this.uranusOrbitPosition);
  }

  #toNeptune(sections, currentOffset) {
    const start = sections.uranus.offset;
    const end = sections.toNeptune.offset;
    const interval = end - start;
    this.idealFocusPoint.set(
      this.uranusFocusPoint.x + (this.neptuneFocusPoint.x - this.uranusFocusPoint.x) * easeInOutQuint((currentOffset - start) / interval),
      this.uranusFocusPoint.y + (this.neptuneFocusPoint.y - this.uranusFocusPoint.y) * easeInOutQuint((currentOffset - start) / interval),
      this.uranusFocusPoint.z + (this.neptuneFocusPoint.z - this.uranusFocusPoint.z) * easeInOutQuint((currentOffset - start) / interval)
    );
    if (start < currentOffset && currentOffset <= start + interval / 2) {
      this.idealOrbitPosition.setFromSphericalCoords(
        this.uranusOrbitPosition.radius + 200 * easeInOutQuint((currentOffset - start) / interval),
        this.uranusOrbitPosition.phi + (this.neptuneOrbitPosition.phi - this.uranusOrbitPosition.phi) * easeInOutQuint((currentOffset - start) / interval),
        this.uranusOrbitPosition.theta + (this.neptuneOrbitPosition.theta - this.uranusOrbitPosition.theta) * easeInOutQuint((currentOffset - start) / interval)
      );
    }
    else if (start + interval / 2 < currentOffset && currentOffset <= end) {
      this.idealOrbitPosition.setFromSphericalCoords(
        (this.uranusOrbitPosition.radius + 200) + this.neptuneOrbitPosition.radius - (this.uranusOrbitPosition.radius + 200) * easeInOutQuint((currentOffset - start) / interval),
        this.uranusOrbitPosition.phi + (this.neptuneOrbitPosition.phi - this.uranusOrbitPosition.phi) * easeInOutQuint((currentOffset - start) / interval),
        this.uranusOrbitPosition.theta + (this.neptuneOrbitPosition.theta - this.uranusOrbitPosition.theta) * easeInOutQuint((currentOffset - start) / interval)
      );
    }
  }

  #onNeptune() {
    this.idealFocusPoint.copy(this.neptuneFocusPoint);
    this.idealOrbitPosition.setFromSpherical(this.neptuneOrbitPosition);
  }

  #toSun(sections, currentOffset) {
    const start = sections.neptune.offset;
    const end = sections.toSun.offset;
    const interval = end - start;
    this.idealFocusPoint.set(
      this.neptuneFocusPoint.x + (this.sunFocusPoint.x - this.neptuneFocusPoint.x) * easeInOutQuint((currentOffset - start) / interval),
      this.neptuneFocusPoint.y + (this.sunFocusPoint.y - this.neptuneFocusPoint.y) * easeInOutQuint((currentOffset - start) / interval),
      this.neptuneFocusPoint.z + (this.sunFocusPoint.z - this.neptuneFocusPoint.z) * easeInOutQuint((currentOffset - start) / interval)
    );
    if (start < currentOffset && currentOffset <= start + interval / 2) {
      this.idealOrbitPosition.setFromSphericalCoords(
        this.neptuneOrbitPosition.radius + 0 * easeInOutQuint((currentOffset - start) / interval),
        this.neptuneOrbitPosition.phi + (this.sunOrbitPosition.phi - this.neptuneOrbitPosition.phi) * easeInOutQuint((currentOffset - start) / interval),
        this.neptuneOrbitPosition.theta + (this.sunOrbitPosition.theta - this.neptuneOrbitPosition.theta) * easeInOutQuint((currentOffset - start) / interval * 2)
      );
    }
    else if (start + interval / 2 < currentOffset && currentOffset <= end) {
      this.idealOrbitPosition.setFromSphericalCoords(
        (this.neptuneOrbitPosition.radius + 0) + this.sunOrbitPosition.radius - (this.neptuneOrbitPosition.radius + 0) * easeInOutQuint((currentOffset - start) / interval),
        this.neptuneOrbitPosition.phi + (this.sunOrbitPosition.phi - this.neptuneOrbitPosition.phi) * easeInOutQuint((currentOffset - start) / interval),
        this.sunOrbitPosition.theta
      );
    }
  }

  #onSun() {
    this.idealFocusPoint.copy(this.sunFocusPoint);
    this.idealOrbitPosition.setFromSpherical(this.sunOrbitPosition);
  }
}