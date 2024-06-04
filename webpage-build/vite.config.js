/* eslint-disable */
import { defineConfig } from 'vite';
import path from 'path';
import react from '@vitejs/plugin-react';

const apiUrl = 'http://apprioalertacor.rio.rj.gov.br';

// https://vitejs.dev/config/
export default defineConfig({
    plugins: [react()],
    base: './',
    build: {
        outDir: 'dist',
    },
    resolve: {
        alias: {
            '@': path.resolve(__dirname, './src'),
        },
    },
    server: {
        proxy: {
            '/api': {
                target: apiUrl,
                changeOrigin: true, // Necessário para evitar problemas de CORS ao solicitar recursos de domínios diferentes durante o desenvolvimento.
                rewrite: (path) => path, // Mantém o caminho original após o '/api'.
            },
        },
    },
});
