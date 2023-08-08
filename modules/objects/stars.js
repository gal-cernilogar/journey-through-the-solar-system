import * as THREE from 'three';
import { acos, PI, random } from '/modules/math.js';

export default class Stars extends THREE.Points {
  constructor({ fromDistance = 100, forDistance = 100, amount = 100 }) {
    const starsMaterial = new THREE.PointsMaterial({ color: 0xffffff });
    const starsGeometry = new THREE.BufferGeometry();
    const starPosition = new THREE.Vector3();
    const starPositions = [];

    for (let i = 0; i < amount; i++) {
      starPosition.setFromSphericalCoords(
        random() * forDistance + fromDistance,
        acos((random() * 2) - 1),
        random() * 2 * PI
      );
      starPositions.push(...starPosition);
    }
    starsGeometry.setAttribute('position', new THREE.Float32BufferAttribute(starPositions, 3));

    super(starsGeometry, starsMaterial);
  }

  update(dt, position) {
    this.rotateY(- dt * 0.02);
    this.position.copy(position);
  }
}