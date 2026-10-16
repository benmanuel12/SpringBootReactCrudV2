import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  // Same port Create React App used, which the backend's CORS settings allow
  // strictPort fails instead of silently moving to a port CORS would block
  server: { port: 3000, strictPort: true },
  test: { environment: 'jsdom' },
})
