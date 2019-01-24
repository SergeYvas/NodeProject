import * as config from './config/config.json';
import { User, Product, DirWatcher, Importer } from './models';


console.log(config.name);
new User();
new Product();



const importer = new Importer()
const watcher = new DirWatcher();
watcher.watch(config.csvFolder, 1000)
importer.listen(watcher)
// importer.import(`${config.csvFolder}/MOCK_DATA-3.csv`)
// console.log(Importer)