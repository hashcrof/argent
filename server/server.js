const http = require('http');

const hostname = process.env.HOST || '127.0.0.1';
const port = process.env.PORT || 3005;

const server = http.createServer((req, res) => {
  let {method, url} = req;

  req.on('error', (err) => {
    console.log(err)
  })

  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/plain');

  //rudimentary routing
  switch(url) {
    case '/whassup':
      res.end('The Sky is Up\n');
      break;
    case '/hello':
      res.end('Hello World\n');
      break;
    case '/humanError':
      throw "A Fake Error";
      break;
    default:
      res.end('Hello World\n');
  }
})

server.listen(port, hostname, () => {
  console.log(`WOOT Server running at http://${hostname}:${port}/`)
})

server.on('error', (err) => {
  console.log('WOW! what a failure!')
  console.log(err)
})
