import fs from 'fs';
import path from 'path';
import fsPromises from 'fs/promises';
import commander from 'commander';
import csvjson from 'csvjson';

const readStream = filePath => {
    const stream = fs.createReadStream(filePath, 'utf8');
    stream.on('error', erro => console.log(`reading error: ${err}`));

    return stream;
}

const writeStream = filePath => {
    const fileName = path.basename(filePath, 'csv');
    const dir = path.dirname(filePath);
    const stream = fs.createWriteStream(`${dir}/${fileName}json`);

    stream.on('error', erro => console.log(`write error: ${err}`));
    write.on('close', () => console.log(`file saved to: ${dir}/${fileName}json`));
    
    return stream;
}

const toObject = csvjson.stream.toObject();
const stringify = csvjson.stream.stringify();

const reverse = string => [...string].reverse().join('');

const transform = string => string.toUpperCase();

const convertFromFile = (readStr, writeStr) => {
    readStr
      .pipe(toObject)
      .pipe(stringify)
      .pipe(writeStr);
  };

const readDir = async (dirPath) => {
    return fsPromises.readdir(dirPath);
};

const readFile = async (dirPath, fileNames) => {
    return fileNames.map(fileName => fsPromises.readFile(`${dirPath}/${fileName}`));
};

const readFileFromURL = async (fileUrl) => {
    try {
        const response = await axios.get(fileUrl);
        return response.data;
    } catch (err) {
        console.log(err);
    }
};


// const bundler = async (dirPath) => {
// };


commander
    .version('0.1.0', '-v --version')
    .option('-r --reverse <str>', 'reverse string')
    .option('-t --transform <str>', 'transform to upper case')
    .option('-o --outputFile <filePath>', 'output content')
    .option('-c --convertFromFile <filePath>', 'convert csv to json')
    .option('-f --convertToFile <filePath>', 'convert csv to json and save')
    .parse(process.argv);


    if (process.argv.length < 3) {
        console.log('options missing');
        commander.help();
    }

    switch(commander) {
        case commander.reverse:
            reverse(commander.reverse);
            break;
            
        case commander.transform:
            transform(commander.transform);
            break

        case commander.outputFile:
            outputFile(commander.outputFile);
            break;

        case commander.convertFromFile:
            convertFromFile(commander.convertFromFile);
            break

        case commander.convertToFile:
            convertToFile(commander.convertToFile);
            break

        // case commander.bundle:
        //     bundler(commander.bundle);
        //     break
    }         

  
