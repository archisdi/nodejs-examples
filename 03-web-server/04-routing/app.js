var http = require('http');
var fs = require('fs');

http.createServer((req,res) => {

  if(req.url === '/'){
    res.writeHead(200,{'Content-type':'text/html'});
    fs.createReadStream(__dirname + '/index.html','utf-8').pipe(res);
  }else if(req.url === '/api'){
    res.writeHead(200,{'Content-type':'application/json'});
    var data = {
      name:'archie',
      age: 21
    };
    res.end(JSON.stringify(data));
  }else{
    res.writeHead(404);
    res.end('Page not found');
  }

}).listen(8001,'127.0.0.1');

console.log('Listening localhost on port 8001');
