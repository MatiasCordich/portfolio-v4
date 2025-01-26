import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  base: '/',  // Asegura que las rutas de los recursos sean correctas
  build: {
    outDir: 'dist',  // Asegura que la salida de la build sea en la carpeta 'dist'
  },
})
