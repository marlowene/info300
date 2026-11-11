const http = require('http');

const server = http.createServer((req, res) => {

    if (req.url === '/about') {
        res.end('The about page!')
    } else if (req.url === '/contact') {
        res.end('The contact page')
    } else if (req.url === '/') {
        res.end('I love INFO 300')
    } else {
        res.writeHead(404);
        res.end("Page is not found");
    }

    });

    server.listen(3000);

    console.log("listening on port 3000")