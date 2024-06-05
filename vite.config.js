import { defineConfig } from 'vite';

export default defineConfig({
  // Base directory for resolving entry points and files in the project
  root: './src',

  // Directory where Vite will build the output files to
  build: {
    target: 'esnext',
    outDir: '../dist',
  },

  // Server configuration
  server: {
    // Port for the development server
    port: 3000,
  },


  // Resolver configuration
  resolve: {
    // Extensions to resolve
    extensions: ['.ts', '.js', '.json'],
  },

});
