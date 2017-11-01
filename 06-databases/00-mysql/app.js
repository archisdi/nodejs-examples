var express =require('express');
var app = express();
// var mysql = require('mysql');
var port = process.env.PORT || 3000;
var ApiController = require('./controllers/ApiController');
var HtmlController = require('./controllers/HtmlController');

app.set('view engine','ejs');

app.use('/',(req, res, next) => {
    // var conn = mysql.createConnection({
    //   host:"localhost",
    //   user:"root",
    //   password:"",
    //   database:"myfast"
    // });
    //
    // var data;
    // conn.query('Select * from members',(err,rows) => {
    //   if(err) throw err;
    //     data = rows[0];
    //     console.log(data);
    // })

    next();
});

app.get('/',(req, res) => {
    res.render('index');
});

app.listen(3000);

ApiController(app);
HtmlController(app);
