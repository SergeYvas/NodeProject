import http from 'http';
import fs from 'fs';

const server = http.createServer();
const port = 3000;
const path = 'index.html'
const indexStream = fs.createReadStream(path)

server.on('request', (req, res) => {
    const { url, method } = req;

    res.writeHead(200, {
        "Content-Type": "text/html"
    })
    indexStream.pipe(res)
})

server.listen(port, () => {
    console.log(`html-server listen port: ${port}`)
})