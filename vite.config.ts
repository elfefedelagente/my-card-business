import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
/**
 
export default defineConfig({
  plugins: [react()],
  base: "https://elfefedelagente.github.io/my-card-business"
})
*/
export default defineConfig(({ command }) => ({
  plugins: [react()],
  css: {
    modules: {
      localsConvention: 'camelCase', // Para usar camelCase en las clases CSS
    },
  },
  base: command === 'build' 
    ? "https://elfefedelagente.github.io/my-card-business" 
    : "/", // Usa "/" para el entorno de desarrollo
}));
