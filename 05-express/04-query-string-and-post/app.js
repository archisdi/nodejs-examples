var express =require('express');
var app = express();
var bodyParser = require('body-parser');
var encodedBodyParser = bodyParser.urlencoded({extended: false});
var jsonParser = bodyParser.json();
var port = process.env.PORT || 3000;

app.set('view engine','ejs');

app.get('/',(req, res) => {
    res.render('index');
});

app.get('/person/:id',(req, res) => {
  res.render('person',{
    id:req.params.id ,
    Qstr: req.query.love
  });
});

app.post('/person',encodedBodyParser,(req, res) => {
    console.log(req.body);
    res.json(req.body);
});

app.post('/api/person',jsonParser,(req, res) => {
    console.log(req.body);
    res.json(req.body);
});

app.listen(3000);
