import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { loadEnv } from 'vite';

// https://vite.dev/config/
const API = loadEnv('', "./").VITE_API_URL;

export default defineConfig({
  plugins: [react()],
  server: {
    port: 3000,
    allowedHosts: [
        'lucas-hose-drinks-fog.trycloudflare.com'
      ],
    proxy: {
      '/api': {
        target: API,
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/api/, '')
      }
    } 
  },
  test: {
    globals: true,
    environment: 'jsdom',
    setupFiles: './src/test/setup.js'
  }
});
