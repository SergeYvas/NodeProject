import express from "express";
import * as config from "./config/config.json";
// import { User, Product, DirWatcher, Importer } from "./modules";
import jwt from "jsonwebtoken";
import cookieParser from "./midldewares/cokieparser";
import queryParser from "./midldewares/queryparser";
import jwtVerifyer from "./midldewares/jwtverifyer";


const app = express();

app.use(cookieParser);
app.use(queryParser);

//  temporary place for routes

app.get('/', (req, res) => {
    res.send('Hello world');
    res.end();
})

app.get("/api/products", jwtVerifyer, (req, res) => {
    res.send("Returning ALL products");
    res.end();
});

app.get("/api/products/:id", jwtVerifyer, (req, res) => {
    const { id } = req.params;
    res.send(`Return SINGLE product with ID: ${id}`);

    res.end();
});

app.get("/api/products/:id/reviews", jwtVerifyer, (req, res) => {
    const { id } = req.params;
    res.send(`Return ​ALL​ reviews for a single product with ID: ${id}`);
    res.end();
});

app.get("/api/users", jwtVerifyer, (req, res) => {
    res.send("Return ALL users");
    res.end();
});

app.post("/api/products", jwtVerifyer, (req, res) => {
    res.send("Add ​NEW​ product and return it");
    res.end();
});

const user = {
    id: '123',
    userName: 'awsomeUser',
    email: 'awsome@mail.yep',
    password: '123',
};


const successfulAuth = {
    code: 200,
    message: "OK",
    data: {
        user: {
            email: "awsome@mail.yep",
            username: "awsomeUser"
        }
    },
    token: "awsomeToken"
};

const faluereAuth = {
    code: 404,
    message: "Not Found",
    data: "some error text"
};

app.post("/auth", (req, res) => {
    const isVerifiedName = user.userName === req.parsedQuery.userName;
    const isVerifiedPassword = user.email === req.parsedQuery.email;

    if (isVerifiedName && isVerifiedPassword) {
        const token = jwt.sign(user, 'secret')

        res.json({
            success: true,
            token
        });
    } else {
        res.status(404).send(JSON.stringify(faluereAuth));
    }
})

export default app;

// console.log(config.name);
// new User();
// new Product();

// const importer = new Importer();
// const watcher = new DirWatcher();
// watcher.watch(config.csvFolder, 1000)
// importer.listen(watcher)
// // importer.import(`${config.csvFolder}/MOCK_DATA-3.csv`)
