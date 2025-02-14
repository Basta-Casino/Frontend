import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// Vite configuration file
// More details: https://vitejs.dev/config/
export default defineConfig({
  // Define plugins to be used (React plugin for Vite)
  plugins: [react()],

  // Configure server settings
  server: {
    port: 3000, // Set development server port
    open: true, // Automatically open the browser
    strictPort: true, // Fail if the port is already in use
  },

  // Build configuration
  build: {
    sourcemap: true, // Generate source maps for debugging
    minify: 'esbuild', // Use esbuild for faster minification
    target: 'esnext', // Optimize for modern browsers
  },

  // Optimize dependencies
  optimizeDeps: {
    include: ['react', 'react-dom', 'react-redux', 'redux', 'bootstrap'],
  },

  // Define global CSS preprocessor options
  css: {
    preprocessorOptions: {
      scss: {
        // additionalData: `@import "src/styles/variables.scss";`
      },
    },
  },
})
