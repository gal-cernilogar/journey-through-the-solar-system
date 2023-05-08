import createApp from "./modules/app.js";

const mobileMediaQuery = window.matchMedia("(max-width: 1023px)");

const appContainer = document.getElementById('app');

const orientationPermissionLi = document.getElementById('orientation-permission-li');
const orientationPermissionButton = document.createElement('button');
if (!localStorage.getItem('orientationPermission')) {
  orientationPermissionButton.setAttribute('id', 'orientation-permission-button');
  orientationPermissionButton.textContent = 'ENABLE MOTION';
  orientationPermissionLi.appendChild(orientationPermissionButton);
}

const welcomeSection = document.getElementById('welcome');
const mercurySection = document.getElementById('mercury');
const venusSection = document.getElementById('venus');
const earthSection = document.getElementById('earth');
const marsSection = document.getElementById('mars');
const jupiterSection = document.getElementById('jupiter');
const saturnSection = document.getElementById('saturn');
const uranusSection = document.getElementById('uranus');
const neptuneSection = document.getElementById('neptune');
const sunSection = document.getElementById('sun');
const toMercurySection = document.getElementById('toMercury');
const toVenusSection = document.getElementById('toVenus');
const toEarthSection = document.getElementById('toEarth');
const toMarsSection = document.getElementById('toMars');
const toJupiterSection = document.getElementById('toJupiter');
const toSaturnSection = document.getElementById('toSaturn');
const toUranusSection = document.getElementById('toUranus');
const toNeptuneSection = document.getElementById('toNeptune');
const toSunSection = document.getElementById('toSun');

const sections = {
  welcome: { domElement: welcomeSection, offset: welcomeSection.offsetTop + welcomeSection.offsetHeight },
  mercury: { domElement: mercurySection, offset: mercurySection.offsetTop + mercurySection.offsetHeight },
  venus: { domElement: venusSection, offset: venusSection.offsetTop + venusSection.offsetHeight },
  earth: { domElement: earthSection, offset: earthSection.offsetTop + earthSection.offsetHeight },
  mars: { domElement: marsSection, offset: marsSection.offsetTop + marsSection.offsetHeight },
  jupiter: { domElement: jupiterSection, offset: jupiterSection.offsetTop + jupiterSection.offsetHeight },
  saturn: { domElement: saturnSection, offset: saturnSection.offsetTop + saturnSection.offsetHeight },
  uranus: { domElement: uranusSection, offset: uranusSection.offsetTop + uranusSection.offsetHeight },
  neptune: { domElement: neptuneSection, offset: neptuneSection.offsetTop + neptuneSection.offsetHeight },
  sun: { domElement: sunSection, offset: sunSection.offsetTop + sunSection.offsetHeight },
  toMercury: { domElement: toMercurySection, offset: toMercurySection.offsetTop + toMercurySection.offsetHeight - window.innerHeight },
  toVenus: { domElement: toVenusSection, offset: toVenusSection.offsetTop + toVenusSection.offsetHeight - window.innerHeight },
  toEarth: { domElement: toEarthSection, offset: toEarthSection.offsetTop + toEarthSection.offsetHeight - window.innerHeight },
  toMars: { domElement: toMarsSection, offset: toMarsSection.offsetTop + toMarsSection.offsetHeight - window.innerHeight },
  toJupiter: { domElement: toJupiterSection, offset: toJupiterSection.offsetTop + toJupiterSection.offsetHeight - window.innerHeight },
  toSaturn: { domElement: toSaturnSection, offset: toSaturnSection.offsetTop + toSaturnSection.offsetHeight - window.innerHeight },
  toUranus: { domElement: toUranusSection, offset: toUranusSection.offsetTop + toUranusSection.offsetHeight - window.innerHeight },
  toNeptune: { domElement: toNeptuneSection, offset: toNeptuneSection.offsetTop + toNeptuneSection.offsetHeight - window.innerHeight },
  toSun: { domElement: toSunSection, offset: toSunSection.offsetTop + toSunSection.offsetHeight - window.innerHeight }
};

const mouse = {
  x: 0,
  y: 0
};

let app;

if (appContainer && orientationPermissionButton && sections) {
  app = createApp(appContainer, sections, mouse);

  window.addEventListener('mousemove', app.handleMouseMove);
  window.addEventListener('scroll', app.handleScroll);
  orientationPermissionButton.addEventListener('click', handleOrientationPermission);

  const appResizeObserver = new ResizeObserver(entries => {
    entries.forEach(entry => app.handleAppResize(entry.target, mobileMediaQuery));
  });

  appResizeObserver.observe(appContainer);

}

function handleOrientationPermission() {
  if (!app || !orientationPermissionButton) return;

  if (typeof DeviceOrientationEvent.requestPermission === 'function') {
    // Handle iOS 13+ devices.
    DeviceOrientationEvent.requestPermission().then((state) => {
      if (state === 'granted') {
        window.addEventListener('deviceorientation', handleDeviceOrientation);
        orientationPermissionButton.remove();
      } else {
        console.error('Request to access the orientation was rejected');
      }
    }).catch(console.error);
  } else {
    // Handle regular non iOS 13+ devices.
    window.addEventListener('deviceorientation', handleDeviceOrientation);
    localStorage.setItem('orientationPermission', 'true');
    orientationPermissionButton.remove();
  }
}

function handleDeviceOrientation(event) {
  if (window.innerWidth < window.innerHeight) {
    mouse.x = event.gamma / 90;
  } else {
    mouse.x = event.beta * 2 / 180;
  }
}