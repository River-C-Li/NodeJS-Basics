const http = require('http');
const hostname = '127.0.0.1';
const port = 3000;

// const server = http.createServer((req, res) => {
//     res.statusCode = 200;
//     res.setHeader('Content-Type', 'text/plain');
//     res.end('I am River and going to to ocean.\n');
//   });

  const server = http.createServer((req, res) => {
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/html');
    res.write('<h1 style="color: red">Hello Ocean!</h1>');
    res.write('<p>I am River and going to to ocean.</p>');
    res.end();
  });

  server.listen(port, hostname, () => {
    console.log(`Server running at http://${hostname}:${port}/`);
  });
