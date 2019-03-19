import http from 'http';

const port = 3000;

const server = http.createServer()


const​​ product = {   
    id: ​1​,   
    name: ​'Supreme T-Shirt'​,   
    brand: ​'Supreme'​,   
    price: ​99.99​,   
    options: [       
        { color: ​'blue'​ },       
        { size: ​'XL'​ }   
    ]
};

server.on('request', (req, res) => {
    const { url, method } = req;

    res.weriteHead(200, {
        'Content-Type': 'application/json'
    })
    res.end(JSON.stringify(product))


})

server.listen(port, () => {
    console.log(`json-server listen port: ${port}`)
})