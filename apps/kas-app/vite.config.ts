import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import federation from '@originjs/vite-plugin-federation';
import dotenv from 'dotenv';

dotenv.config();

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    federation({
      name: 'kas-app',
      remotes: {
        // attendanceApp: 'http://localhost:5001/assets/remoteEntry.js',
        staffApp:
          process.env.VITE_MFE_STAFF_URL ||
          'http://localhost:5002/assets/remoteEntry.js',
      },
      shared: ['react', 'react-dom', '@tanstack/react-router'],
    }),
  ],
  build: {
    modulePreload: false,
    target: 'esnext',
    minify: false,
    cssCodeSplit: false,
  },
});
