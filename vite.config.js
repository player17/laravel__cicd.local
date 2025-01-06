import { defineConfig, loadEnv } from 'vite';
import laravel from 'laravel-vite-plugin';
import vue from '@vitejs/plugin-vue';

export default defineConfig(({ mode }) => {
    // Загружаем переменные окружения
    const env = loadEnv(mode, process.cwd(), '');

    // Получаем базовый URL из переменной окружения
    const baseUrl = env.VITE_APP_BASE_URL;

    return {
        plugins: [
            laravel({
                input: [
                    'resources/css/app.css',
                    'resources/sass/app.sass',
                    'resources/js/app.js'
                ],
                refresh: true,
            }),
            vue({
                template: {
                    transformAssetUrls: {
                        base: null,
                        includeAbsolute: false,
                    },
                },
            }),
        ],
        server: {
            https: false,
            origin: baseUrl, // Используем базовый URL из переменной окружения
            host: '0.0.0.0',
            port: 5173,
            strictPort: true,
        },
    };
});
