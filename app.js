const http = require('http');

const hostname = process.env.HOST || '127.0.0.1';
const port = process.env.PORT || 3005;

const server = http.createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/plain');
  res.end('Hello World\n');
}).listen(port, hostname, () => {
  console.log(`WOOT Server running at http://${hostname}:${port}/`)
})
