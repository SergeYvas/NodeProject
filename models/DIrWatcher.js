import fs from 'fs';
import EventEmitter from 'events';

const ERROR_MESSAGE = 'An error has occurred reading the path:';

const isIdentical = (arr1, arr2) => {
    return arr1.length === arr2.length ?
        arr1.every((val, index) => val === arr2[index])
        : 
        false;
}

export default class DirWatcher extends EventEmitter {
	constructor() {
		super();
        this.timer = null;
		this.watchedFiles = null;
	}

	watch(path, delay) {
		this.timer = setInterval(() => {
			fs.readdir(path, (error, files) => {
				if (error) {
					console.error(ERROR_MESSAGE, error);
					return false;
                }
                if (!this.watchedFiles || !isIdentical(files, this.watchedFiles)) {
					this.watchedFiles = files;
					super.emit('change', files);
				}
			});
		}, delay);
	}
}