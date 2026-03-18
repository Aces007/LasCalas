import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  base: '/',
  plugins: [react()],
  
  // 1. DEVELOPMENT SERVER SETTINGS
  server: {
    watch: {
      usePolling: true,
    },
    // Only use these headers during 'npm run dev'
    headers: {
      'Cache-Control': 'no-store, no-cache, must-revalidate, proxy-revalidate',
    },
  },

  // 2. PRODUCTION BUILD SETTINGS (Add this part!)
  build: {
    rollupOptions: {
      output: {
        // This splits your code so DreamHost can serve it faster
        manualChunks(id) {
          if (id.includes('node_modules')) {
            return 'vendor'; 
          }
        },
      },
    },
    // Increases the limit to 1000kB so the warning disappears
    chunkSizeWarningLimit: 1000,
  },
})