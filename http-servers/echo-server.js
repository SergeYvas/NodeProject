import http from 'http';
import fs from 'fs';

const port = 3000;

http
    .createServer()
    .on('request', (req, res) => {
        req.pipe(res)
    })
    .listen(port, () => {
        console.log(`Echo-server listen port: ${port}`)
    })