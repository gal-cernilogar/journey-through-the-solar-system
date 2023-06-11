uniform samplerCube uNoise;
varying vec3 vNormal;
varying vec3 eyeVector;
varying vec3 vLayer0;
varying vec3 vLayer1;
varying vec3 vLayer2;

float Fresnel(vec3 eyeVector, vec3 worldNromal) {
  return pow(1.0 + dot(eyeVector, worldNromal), 3.0);
}

vec3 brightnessToColor(float b) {
  b *= 0.25;

  return (vec3(b, b * b, b * b * b * b) / 0.25) * 0.8;
}

float supersun() {
  float sum = 0.;
  sum += textureCube(uNoise, vLayer0).r;
  sum += textureCube(uNoise, vLayer1).r;
  sum += textureCube(uNoise, vLayer2).r;
  sum *= 0.3;
  return sum;
}

void main() {
  float brightness = supersun();
  brightness = brightness * 4. + 1.;

  float fres = Fresnel(eyeVector, vNormal);
  brightness += pow(fres, 0.8);

  vec3 col = brightnessToColor(brightness);

  gl_FragColor = vec4(col, 1.);
}