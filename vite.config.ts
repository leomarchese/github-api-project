import react from '@vitejs/plugin-react'
import * as path from 'path'

import { defineConfig } from 'vite'

export default defineConfig({
  base: '/github-api-project/',
  plugins: [react()],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
      '@pages': path.resolve(__dirname, './src/pages'),
      '@components': path.resolve(__dirname, './src/components'),
      '@types': path.resolve(__dirname, './src/store/actions/action-types.tsx'),
    }
  }
})
