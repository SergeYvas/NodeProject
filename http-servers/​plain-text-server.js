import http from 'http';

const server = http.createServer();
const port = 3000;
const message = 'Hello World!';

server.on('request', (req, res) => {
    const { url, method } = req;
    res.statusCOde = 200;
    res.setHeader("Content-Type", "text/plain")
    res.end(message)
})

server.listen(port, () => {
    console.log(`plain-text-server listen port: ${port}`)
})