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
        main: resolve(__dirname, 'index.html'),
        workout: resolve(__dirname, 'src/html/workout.html'),
        thoughts: resolve(__dirname, 'src/html/thoughts.html'),
      },
    },
  },
  resolve: {
    alias: [
      { find: '@', replacement: resolve(__dirname, 'src') },
      {
        find: '@assets',
        replacement: resolve(__dirname,"src/assets"),
      },
    ]
  }
})
