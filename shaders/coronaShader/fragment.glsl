varying vec3 vPosition;

vec3 brightnessToColor(float b) {
  b *= 0.25;

  return (vec3(b, b * b, b * b * b * b) / 0.25) * 0.1;
}

void main() {
  float radialGradient = 1. - vPosition.z;
  radialGradient *= radialGradient * radialGradient;

  float brightness = 1. + radialGradient * 0.83;

  gl_FragColor.rgb = brightnessToColor(brightness) * radialGradient;
  gl_FragColor.a = radialGradient;
}