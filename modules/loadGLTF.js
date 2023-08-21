import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader.js';

const loader = new GLTFLoader();

export default function loadGLTF(url, onLoad) {
  const onProgress = (event) => console.log(`${url} ${Math.round(event.loaded / event.total * 100)}% loaded`);
  const onError = (event) => console.error(event);

  loader.load(url, onLoad, onProgress, onError);
}
