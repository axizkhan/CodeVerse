import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

// https://vite.dev/config/
export default defineConfig({
  base: '/',
<<<<<<< HEAD
=======
  
>>>>>>> 56632f2 (final commit expected)
  plugins: [react(),
  tailwindcss(),
  

  ],
  build: {
    chunkSizeWarningLimit: 1500, // in KB
  },
})

