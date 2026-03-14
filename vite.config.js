import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
})
//esta es la configuracion de Vite, aqui se define el de React para que funcione correctamente con Vite//