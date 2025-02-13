import { resolve } from 'path'
import { defineConfig } from 'vite'

export default defineConfig({
  root: resolve(__dirname, 'src'),
  build: {
    outDir: '../dist',
    rollupOptions: {
      input: {
        main: resolve(__dirname, 'src/index.html'),
        thesis: resolve(__dirname, 'src/thesis/index.html'),
        publications: resolve(__dirname, 'src/publications/index.html'),
      },
    },
  },
  server: {
    port: 8080
  }
})