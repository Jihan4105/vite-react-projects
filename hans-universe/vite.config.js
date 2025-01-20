import { defineConfig } from 'vite'
import { resolve } from 'path'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  esbuild: {
    // drop: ['console', 'debugger'],
  },
  build: {
    rollupOptions: {
      input: {
        main: resolve(__dirname, 'index.html'),
        landing: resolve(__dirname, "src/html/landing.html"),
        workout: resolve(__dirname, 'src/html/workout.html'),
        thoughts: resolve(__dirname, 'src/html/thoughts.html'),
        skills: resolve(__dirname, 'src/html/skills.html'),
        books: resolve(__dirname, 'src/html/books.html')
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
      {
        find: '@components',
        replacement: resolve(__dirname,"src/components"),
      },
      {
        find: '@contexts',
        replacement: resolve(__dirname, "src/contexts"),
      },
      {
        find: '@data',
        replacement: resolve(__dirname, "src/data"),
      },
      {
        find: '@hooks',
        replacement: resolve(__dirname, "src/hooks"),
      },
      {
        find: '@html',
        replacement: resolve(__dirname, "src/html"),
      },
      {
        find: '@pages',
        replacement: resolve(__dirname, "src/pages"),
      },
      {
        find: '@services',
        replacement: resolve(__dirname, "src/services"),
      },
      {
        find: '@styles',
        replacement: resolve(__dirname, "src/styles"),
      },
      {
        find: '@utils',
        replacement: resolve(__dirname, "src/utils"),
      },
    ]
  }
})
