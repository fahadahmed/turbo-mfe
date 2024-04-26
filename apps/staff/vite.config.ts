import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import federation from '@originjs/vite-plugin-federation'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    federation({
      name: 'staff',
      filename: 'remoteEntry.js',
      exposes: {
        './CreateStaff': './src/pages/CreateStaff',
        './Staff': './src/pages/Staff',
        './$StaffId': './src/pages/$StaffId',
      },
      shared: ['react', 'react-dom'],
    }),
  ],
  build: {
    modulePreload: false,
    target: 'esnext',
    minify: false,
    cssCodeSplit: false,
  }
})
