import { defineConfig } from 'vite';
import laravel from 'laravel-vite-plugin';

export default defineConfig({
    plugins: [
        laravel({
            input: ['resources/css/app.css', 'resources/js/app.js'],
            refresh: true, // Автоматически обновлять страницу при изменении файлов
        }),
    ],
    server: {
        https: false, // Использовать HTTP (если HTTPS не требуется)
        origin: 'http://docker.vm-32cfa24b.na4u.ru:8473', // Указываем базовый URL для генерации правильных ссылок
        host: '0.0.0.0', // Разрешить доступ извне (важно для Docker)
        port: 5173, // Порт, который Vite будет использовать внутри контейнера
        strictPort: true, // Запретить автоматический выбор порта
    },
});
