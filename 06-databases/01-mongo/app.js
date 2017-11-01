var express =require('express');
var app = express();
var mongoose = require('mongoose');
var port = process.env.PORT || 3000;
var ApiController = require('./controllers/ApiController');
var HtmlController = require('./controllers/HtmlController');

app.set('view engine','ejs');

app.use('/',(req, res, next) => {
    next();
});

app.get('/',(req, res) => {
    res.render('index');
});

app.listen(3000);

ApiController(app);
HtmlController(app);
