const path = require('path');

// * Base file name
// ได้ทั้ง directory
// console.log(__filename);

// เอามาแค่ชื่อไฟล์
// console.log(path.basename(__filename));

// เอามาแค่ Directory name
// console.log(path.dirname(__filename));

// File Extension (นามสกุลไฟล์)
// console.log(path.extname(__filename));

// Create path object
// console.log(path.parse(__filename));

// Concatenate paths สร้าง path เช่น \dir\test\hello.html
console.log(path.join(__dirname, 'test', 'hello.html'));
