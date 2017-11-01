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

// Restfull API

app.get('/api/person',(req, res) => {
    // Get all person data
});

app.get('/api/person/:id',(req, res) => {
    // Get a person data
});

app.post('/api/person/:id',jsonParser,(req, res) => {
    // Update a person data
});

app.delete('/api/person/:id',jsonParser,(req, res) => {
    // Delete a person data
});

app.post('/api/person',jsonParser,(req, res) => {
    console.log(req.body);
    res.json(req.body);
});

app.listen(3000);
