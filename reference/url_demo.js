const url = require('url');

const myUrl = new URL(
  'http://mywebsite.com:5000/hello.html?id=99&status=active'
);

// Serialiozed URL
// console.log(myUrl.href);
// same href
// console.log(myUrl.toString());

// Host (root domain) เอา port มาแสดง
// console.log(myUrl.host);

// Hostname จะไม่เอา port มาแสดง
// console.log(myUrl.hostname);

// Pathname เอาชื่อไฟล์มาแสดง
// console.log(myUrl.pathname);

// Serialized query เอา parameter หลัง ? มาแสดง
// console.log(myUrl.search);

// Params object
// console.log(myUrl.searchParams);

// Add param
// myUrl.searchParams.append('abc', '123');
// console.log(myUrl.href);

// Loop through params * สังเกตมันจะแสดงค่าสลับกัน
myUrl.searchParams.forEach((value, name) => console.log(`${name}: ${value}`));
