import { defineConfig } from 'vite';
import vitePluginString from 'vite-plugin-string';

export default defineConfig({
  base: '/journey-through-the-solar-system/',
  plugins: [vitePluginString()],
  assetsInclude: ['**/*.glb']
});