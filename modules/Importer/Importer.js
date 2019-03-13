import fs from 'fs';
import path from 'path';
// import * as config from '../config/config.json';
import csv from 'csvtojson';

const fsPromises = fs.promises;
// const getFileName = file => path.parse(file).name

export default class Importer {
	constructor() {
	}

	async listen(watcher) {
		watcher.on('change', (args)=>{
			try {
				const data = await Promise.all(Object.keys(args).map(item => {
					return csv()
					.fromFile(args[item].path)
					.then(jsonObj=>jsonObj)
				}))

				console.log(data)
		} catch (e) {
			console.log(e)
		}
			return null;
		})

	}

	// }

	// readFile(fileName) {
  // }

	// import(path) {
	// }

	// onChangeHandler(files = []){
  // };

	// importFile(file){
  // };

  // importFileSync(file){

  // };
}