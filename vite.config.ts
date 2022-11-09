/// <reference types="vitest" />

import { fileURLToPath, URL } from 'node:url';

import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue()],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url)),
    },
  },
  // https://github.com/vitest-dev/vitest
  test: {
    globals: true,
    include: ['**/?(*.)+(spec|test).[jt]s?(x)'],
    environment: 'jsdom',
    deps: {
      inline: ['vue', 'vue-router', 'bootstrap-vue', 'bootstrap', 'bootstrap-vue-3'],
    },
    snapshotFormat: {
      printBasicPrototype: true,
    },
  },
});
