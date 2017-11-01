var http = require('http');
var fs = require('fs');

http.createServer((req,res) => {

  res.writeHead(200,{'Content-type':'text/html'});
  fs.createReadStream(__dirname + '/index.html','utf-8').pipe(res);

}).listen(8001,'127.0.0.1');

console.log('Listening localhost on port 8001');
