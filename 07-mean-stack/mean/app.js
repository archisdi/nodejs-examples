'use strict';

const express = require('express');
const app = express();
const port = 3000;

app.set('view engine','ejs');
app.use('/assets', express.static(__dirname + '/public'));

let people = [
  {name:'archie'},
  {name:'edwina'},
  {name:'angga'},
  {name:'ade'}
];

app.get('/', (req, res) => {
    res.render('index',{peoples:people});
});

app.listen(port);
