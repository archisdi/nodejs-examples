var http = require('http');

http.createServer((req,res) => {

  res.writeHead(200,{'Content-type':'application/json'});
  var data = {
    name:'archie',
    age: 21
  };
  res.end(JSON.stringify(data));

}).listen(8001,'127.0.0.1');

console.log('Listening localhost on port 8001');
