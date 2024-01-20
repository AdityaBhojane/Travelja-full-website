// vite.config.js
import { resolve } from 'path'
import { defineConfig } from 'vite'

export default defineConfig({
  build: {
    rollupOptions: {
      input: {
        main: resolve(__dirname, 'index.html'),
        Contact: resolve(__dirname, 'src/Contact.html'),
        Services: resolve(__dirname, 'src/Services.html'),
      },
    },
  },
})