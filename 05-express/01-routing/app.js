var express =require('express');
var app = express();
var port = process.env.PORT || 3000;

app.get('/',(req, res) => {
    res.send('<html><body><h1>Hello World</h1></body></html>');
});

app.get('/person/:id',(req, res) => {
  res.send('<html><body><h1>Hello '+req.params.id+'</h1></body></html>');
});

app.listen(3000);
