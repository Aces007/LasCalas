import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import vitePrerender from 'vite-plugin-prerender'
import path from 'path'

export default defineConfig({
  base: '/',
  plugins: [
    react(),
    // This turns your React routes into static HTML files during 'npm run build'
    vitePrerender({
      staticDir: path.join(__dirname, 'dist'),
      // List every page you want to load "instantly"
      routes: ['/', '/about', '/amenities', '/explore', '/faqs', '/celebrations'],
      minify: {
        collapseBooleanAttributes: true,
        collapseWhitespace: true,
        decodeEntities: true,
        keepClosingSlash: true,
        sortAttributes: true,
      },
    }),
  ],
  
  server: {
    watch: {
      usePolling: true,
    },
    headers: {
      'Cache-Control': 'no-store, no-cache, must-revalidate, proxy-revalidate',
    },
  },

  build: {
    target: 'es2020', 
    minify: 'esbuild', 
    rollupOptions: {
      output: {
        // Simple filenames are best for DreamHost's file system
        entryFileNames: `assets/[name]-[hash].js`,
        chunkFileNames: `assets/[name]-[hash].js`,
        assetFileNames: `assets/[name]-[hash].[ext]`,
        manualChunks: undefined, 
      },
    },
    chunkSizeWarningLimit: 2000, 
  },
})