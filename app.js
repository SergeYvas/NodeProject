import * as config from './config/config.json';
import { User, Product, DirWatcher } from './models';


console.log(config.name);
new User();
new Product();
const watcher = new DirWatcher();

console.log(config.name);
