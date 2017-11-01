var http = require('http');

http.createServer((req,res) => {
  res.writeHead(200,{'Content-type':'text/plain'});
  res.end('Hello World !\n');
}).listen(8001,'127.0.0.1');

console.log('Listening localhost on port 8001');
