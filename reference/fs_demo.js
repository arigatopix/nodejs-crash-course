const fs = require('fs');
const path = require('path');

// มีทั้ง async และ synchornous

// * Create folder inside current dir
// fs.mkdir(path.join(__dirname, '/test'), {}, err => {
//   if (err) throw err;
//   console.log('Folder Created...');
// });

// * Create and write to file (ทุกครั้งที่ run จะถูก overwrite)
// fs.writeFile(
//   path.join(__dirname, '/test', 'hello.txt'),
//   'Hello data inside hello.txt',
//   err => {
//     if (err) throw err;
//     console.log('File written to ...');
//   }
// );

// * Append data to file
// fs.appendFile(
//   path.join(__dirname, '/test', 'hello.txt'),
//   '. This is append data.',
//   err => {
//     if (err) throw err;
//     console.log('File written to ...');
//   }
// );

// * Read file
// fs.readFile(path.join(__dirname, '/test', 'hello.txt'), 'utf8', (err, data) => {
//   if (err) throw err;
//   console.log(data);
// });

// * Rename file
fs.rename(
  path.join(__dirname, '/test', 'hello.txt'),
  path.join(__dirname, '/test', 'helloworld.txt'),
  err => {
    if (err) throw err;
    console.log('File renamed ...');
  }
);
