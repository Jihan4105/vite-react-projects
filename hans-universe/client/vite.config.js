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
        index: resolve(__dirname, 'index.html')
      },
    },
  },
  resolve: {
    alias: [
      { find: '@', replacement: resolve(__dirname, 'src') },
      {
        find: '@api',
        replacement: resolve(__dirname, "src/api"),
      },
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
        find: '@reducer',
        replacement: resolve(__dirname, "src/reducer"),
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
