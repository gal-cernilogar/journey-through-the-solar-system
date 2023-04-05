import * as THREE from 'three';
import { acos, PI, random } from '/modules/math.js';

const starsMaterial = new THREE.PointsMaterial({ color: 0xffffff });
const starsGeometry = new THREE.BufferGeometry();

export default function createStars({ fromDistance = 100, forDistance = 100, amount = 100 }) {
  const starSpherical = new THREE.Spherical();
  const starCartesian = new THREE.Vector3();
  const starPositions = [];

  for (let i = 0; i < amount; i++) {
    starSpherical.set(
      random() * forDistance + fromDistance,
      acos((random() * 2) - 1),
      random() * 2 * PI
    );
    starCartesian.setFromSpherical(starSpherical);
    starPositions.push(...starCartesian);
  }
  starsGeometry.setAttribute('position', new THREE.Float32BufferAttribute(starPositions, 3));

  return new THREE.Points(starsGeometry, starsMaterial);
}