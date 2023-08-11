varying vec3 vPosition;

vec3 brightnessToColor(float b) {
  b *= 0.25;

  return (vec3(b, b * b, b * b * b * b) / 0.25) * 0.1;
}

void main() {
  float radial = 1. - vPosition.z;
  radial *= radial * radial;

  float brightness = 1. + radial * 0.83;

  gl_FragColor.rgb = brightnessToColor(brightness) * radial;
  gl_FragColor.a = radial;
}