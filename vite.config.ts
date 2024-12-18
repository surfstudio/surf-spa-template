import react from '@vitejs/plugin-react';
import { defineConfig } from 'vite';
import svgr from 'vite-plugin-svgr';

export default defineConfig({
    plugins: [react(), svgr({ include: 'src/**/*.svg' })],
    resolve: {
        alias: [{ find: '@', replacement: '/src' }],
    },
    server: {
        proxy: {
            '/api': {
                target: '',
                changeOrigin: true,
            },
        },
    },
    build: {
        rollupOptions: {
            output: {
                manualChunks(id) {
                    if (id.includes('node_modules')) {
                        return id.toString().split('node_modules/')[1].split('/')[0].toString();
                    }
                },
            },
        },
    },
});
