import fs from 'fs';
import EventEmitter from 'events';

const ERROR_MESSAGE = 'An error has occurred reading the path:';

const readDir = fs.promises.readdir;

export default class DirWatcher extends EventEmitter {
	constructor() {
		super();
        this.timer = null;
		this.oldFiles = {};
	}

	watch(path, delay) {
		this.timer = setInterval(() => {
			readDir(path)
				.then( files => {
					if(!Object.keys(this.oldFiles).length) {
						files.forEach( (file) => {
							const fileDiscriptor = fs.openSync(`${path}/${file}`, 'r')
							const fileInfo = fs.fstatSync(fileDiscriptor)
							
							this.oldFiles[file] = { 
								name: file,
								mtime: fileInfo.mtime.toISOString(),
								path: `${path}/${file}`
							}})

						super.emit('change', this.oldFiles);
					} else {
						files.forEach( (file) => {
							const fileDiscriptor = fs.openSync(`${path}/${file}`, 'r')
							const fileInfo = fs.fstatSync(fileDiscriptor)
							const mtime = fileInfo.mtime.toISOString();
							const isModified = this.oldFiles[file].mtime !== mtime;
						
							if(isModified) {
								this.oldFiles[file].mtime = mtime;
								super.emit('change', { [file]: {...this.oldFiles[file]} });
							}
						})
					}
				
				})
				.catch(err => console.log(ERROR_MESSAGE, error)) 
		}, delay);
	}
}