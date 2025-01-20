import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig(({ command }) => ({
  plugins: [react()],
  css: {
    modules: {
      localsConvention: 'camelCase', 
    },
  },
  base: command === 'build' 
    ? "https://elfefedelagente.github.io/my-card-business" 
    : "/", 
}));
