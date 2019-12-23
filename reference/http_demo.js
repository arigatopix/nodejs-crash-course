const http = require('http');

// Create server object
http
  .createServer((req, res) => {
    // Write response เมื่อมีการเข้า localhost:5000
    res.write('Hello World');
    res.end();
  })
  .listen(5000, () => console.log('Server running...'));
// .listen(5000) คือให้รอ node run server localhost:5000
