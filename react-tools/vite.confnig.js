import react from '@vitejs/plugin-react';
import path from 'path'

export default {
  plugins: [
    react()
  ],
  resolve: {
    alias: {
      '@assets': path.join(__dirname, 'src/assets'),
      '@': path.join(__dirname, 'src')
    }
  },
}