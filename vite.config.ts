import { defineConfig, loadEnv } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => {
  // Cast process to any to avoid "Property 'cwd' does not exist on type 'Process'" error
  // occurring due to potential type definition mismatches in the project environment.
  const env = loadEnv(mode, (process as any).cwd(), '');
  return {
    plugins: [react()],
    base: './', // Essencial para hospedagem compartilhada como Hostinger
    define: {
      // Permite que o código continue usando process.env.API_KEY
      'process.env.API_KEY': JSON.stringify(env.API_KEY),
    },
  };
});