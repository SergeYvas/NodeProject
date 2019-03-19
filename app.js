import express from 'express';
import * as config from './config/config.json';
import { User, Product, DirWatcher, Importer } from './modules';
import cookieParser from './midldewares/cokieparser'
import queryParser from './midldewares/queryparser'

const app = express();

app.use(cookieParser)
app.use(queryParser)



export default app;

console.log(config.name);
new User();
new Product();



const importer = new Importer()
const watcher = new DirWatcher();
// watcher.watch(config.csvFolder, 1000)
// importer.listen(watcher)
// // importer.import(`${config.csvFolder}/MOCK_DATA-3.csv`)
