import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  server: {
    // it automatically replace .api to this line and also verified it that url is right
    proxy:{
      '/api': 'http://localhost:4000',
    }
  },
  plugins: [react()],
})
