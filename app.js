import express from 'express';
import * as config from './config/config.json';
import { User, Product, DirWatcher, Importer } from './modules';
import cookieParser from './midldewares/cokieparser'
import queryParser from './midldewares/queryparser'

const app = express();

app.use(cookieParser);
app.use(queryParser);

app.use(cookieParser());

//  temporary place for routes

app.get("/api/products", (req, res) => {
  res.send("Returning ALL products");
  res.end();
});

app.get("/api/products/:id", (req, res) => {
  const { id } = req.params;
  res.send(`Return SINGLE product with ID: ${id}`);

  res.end();
});

app.get("/api/products/:id/reviews", (req, res) => {
  const { id } = req.params;
  res.send(`Return ​ALL​ reviews for a single product with ID: ${id}`);
  res.end();
});

app.get("/api/users", (req, res) => {
  res.send("Return ALL users");
  res.end();
});

app.post("/api/products", (req, res) => {
  res.send("Add ​NEW​ product and return it");
  res.end();
});

export default app;

console.log(config.name);
new User();
new Product();

const importer = new Importer();
const watcher = new DirWatcher();
// watcher.watch(config.csvFolder, 1000)
// importer.listen(watcher)
// // importer.import(`${config.csvFolder}/MOCK_DATA-3.csv`)
