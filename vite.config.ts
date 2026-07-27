import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import wasm from 'vite-plugin-wasm';
import topLevelAwait from 'vite-plugin-top-level-await';
import { nodePolyfills } from 'vite-plugin-node-polyfills';

export default defineConfig({
  plugins: [
    react(),
    wasm(),
    topLevelAwait({ promiseTrieName: 'allImports', target: 'esnext' }),
    nodePolyfills({
      include: ['buffer', 'process', 'util', 'assert', 'stream', 'events'],
      globals: { Buffer: true, process: true },
    }),
  ],
  resolve: { alias: { '@': '/src' } },
  server: { port: 3000, open: true },
  build: { target: 'esnext', sourcemap: true },
});
