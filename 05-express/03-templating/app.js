var express =require('express');
var app = express();
var port = process.env.PORT || 3000;

app.set('view engine','ejs');

app.get('/',(req, res) => {
    res.render('index');
});

app.get('/person/:id',(req, res) => {
  res.render('person',{ id:req.params.id });
});

app.listen(3000);
