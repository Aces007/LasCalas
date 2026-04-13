import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  base: '/',
  plugins: [react()],
  
  server: {
    watch: {
      usePolling: true,
    },
    headers: {
      'Cache-Control': 'no-store, no-cache, must-revalidate, proxy-revalidate',
    },
  },

  build: {
    // 1. Force a more stable build target
    target: 'es2020', 
    
    // 2. Optimization: Minify with Terser for better variable scoping (if needed)
    // By default Vite uses Esbuild, which is fast, but Terser is sometimes safer
    minify: 'esbuild', 

    rollupOptions: {
      output: {
        // 3. Keep filenames simple to avoid caching issues on DreamHost
        entryFileNames: `assets/[name]-[hash].js`,
        chunkFileNames: `assets/[name]-[hash].js`,
        assetFileNames: `assets/[name]-[hash].[ext]`,
        
        // 4. Manual Chunks: Only split if the file is massive
        manualChunks: undefined, 
      },
    },
    
    // 5. Increase limit for your Framer Motion and React Icons iceberg
    chunkSizeWarningLimit: 2000, 
  },
})