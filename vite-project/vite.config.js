import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  server : {
    allowedHosts : [
      'b0e1-2409-40c1-5004-8229-e113-30a-f61d-3e78.ngrok-free.app'
    ]
  }
})
