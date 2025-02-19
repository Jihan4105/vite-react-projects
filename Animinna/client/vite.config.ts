import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { resolve } from "path"

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: [
      {
        find: '@assets',
        replacement: resolve(__dirname, "src/assets")
      }, 
      {
        find: '@pages',
        replacement: resolve(__dirname, "src/pages")
      },
      {
        find: '@components',
        replacement: resolve(__dirname, "src/components")
      }
    ]
  }
})
