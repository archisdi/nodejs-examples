var express =require('express');
var app = express();
var port = process.env.PORT || 3000;

app.use('/assets',express.static(__dirname + '/public'));

app.use('/',(req, res, next) => {
  console.log('Request URL :' + req.url);
  next();
});

app.get('/',(req, res) => {
    res.send('<html><link href="assets/style.css" type="text/css" rel="stylesheet"><body><h1>Hello World</h1></body></html>');
});

app.get('/api',(req, res) => {
    res.json({message:'Hello World'});
});

app.listen(3000);
