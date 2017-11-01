var express =require('express');
var app = express();
var port = process.env.PORT || 3000;

app.get('/',(req, res) => {
    res.send('<html><body><h1>Hello World</h1></body></html>');
});

app.get('/api',(req, res) => {
  res.json({message:'hello world'});
});

app.listen(3000);
