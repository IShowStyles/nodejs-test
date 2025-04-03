const http = require('http');

// Создаем сервер
const server = http.createServer((req, res) => {
    // Устанавливаем заголовки ответа
    res.setHeader('Content-Type', 'text/plain');

    // Обрабатываем маршруты
    if (req.url === '/' && req.method === 'GET') {
        res.statusCode = 200;
        res.end('Добро пожаловать на главную страницу!');
    } else if (req.url === '/about' && req.method === 'GET') {
        res.statusCode = 200;
        res.end('Это страница "О нас".');
    } else {
        res.statusCode = 404;
        res.end('Страница не найдена.');
    }
});

// Запускаем сервер на порту 3000
const PORT = 3000;
server.listen(PORT, () => {
    console.log(`Сервер запущен на http://localhost:${PORT}`);
});
