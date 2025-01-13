import { defineConfig } from 'vite'
import { resolve } from 'path'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  esbuild: {
    drop: ['console', 'debugger'],
  },
  build: {
    rollupOptions: {
      input: {
        main: resolve('index.html'),
        thoughts: resolve('src/html/thoughts.html'),
      },
    },
  },
})
