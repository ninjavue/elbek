import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    proxy: {
      '/eskiz-api': {
        target: 'https://notify.eskiz.uz/api',
        changeOrigin: true,
        secure: false,
        rewrite: (path) => path.replace(/^\/eskiz-api/, '')
      }
    }
  }
})
