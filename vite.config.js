import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { copyFileSync, existsSync } from 'fs'
import { dirname, join, resolve } from 'path'
import { fileURLToPath } from 'url'

const __dirname = dirname(fileURLToPath(import.meta.url))

export default defineConfig({
  base: '/outliersoftware/',
  plugins: [
    react(),
    {
      name: 'copy-404',
      closeBundle() {
        const dist = resolve(__dirname, 'dist')
        const indexPath = join(dist, 'index.html')
        const notFoundPath = join(dist, '404.html')
        if (existsSync(indexPath)) {
          copyFileSync(indexPath, notFoundPath)
        }
      },
    },
  ],
})
