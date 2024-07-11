import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  server: {
   
    proxy: {
      '/api':'https://new-deploy-s3gw.onrender.com',
    },
  },
  plugins: [react()],
});
