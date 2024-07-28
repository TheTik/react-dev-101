import { defineConfig } from 'vite'
//import react from '@vitejs/plugin-react'
import react from '@vitejs/plugin-react-swc'

// https://vitejs.dev/config/
export default defineConfig({
  server:{
    proxy:{
      '/api/users': 'http://localhost:8081'
    }
  },
  plugins: [react()],
})
