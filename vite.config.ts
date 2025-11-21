import { defineConfig, loadEnv } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => {
  // Carrega variáveis de ambiente. O cast para 'any' evita erro de tipagem no Node.js
  const env = loadEnv(mode, (process as any).cwd(), '');
  
  return {
    plugins: [react()],
    // IMPORTANTE: base './' faz com que os arquivos procurem seus recursos na mesma pasta
    // e não na raiz do domínio. Essencial para Hostinger.
    base: './', 
    build: {
      outDir: 'dist',
      assetsDir: 'assets',
      sourcemap: false,
    },
    define: {
      // Injeta a API Key no código final durante o build
      'process.env.API_KEY': JSON.stringify(env.API_KEY),
    },
  };
});