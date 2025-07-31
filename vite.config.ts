import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import { resolve } from 'path';

export default defineConfig({
  plugins: [react()],
  build: {
    outDir: 'dist',
    rollupOptions: {
      input: {
        popup: resolve(__dirname, './popup.html'),
      },
      output: {
        // You can customize the name of the output JavaScript file here
        entryFileNames: 'popup.js',
      },
    },
  },
});