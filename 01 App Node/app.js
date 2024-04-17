const { createServer } = require('node:http');

const hostname = '172.17.0.2';
const port = 3000;

const server = createServer((req, res) => {
  console.log('Request From :>> ', req.socket.remoteAddress);
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/plain');
  res.end('Hello World');
});

process.on('SIGTERM', () => {
  console.log('Received SIGTERM');
  process.exit(0);
})

server.listen(port, hostname, () => {
  console.log(process.argv);
  console.log(`Server running at http://${hostname}:${port}/`);
});
