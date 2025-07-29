import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import { resolve } from 'path';

export default defineConfig({
  plugins: [react()],
  build: {
    // This will put the output in a 'dist' folder
    outDir: 'dist',
    rollupOptions: {
      input: {
        // This tells Vite where to find your entry HTML file
        // Make sure this path is correct based on your file structure
        popup: resolve(__dirname, 'popup.html'),
      },
      output: {
        // You can customize the name of the output JavaScript file here
        entryFileNames: 'popup.js',
      },
    },
  },
});