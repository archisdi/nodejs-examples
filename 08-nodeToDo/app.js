'use strict';
const express = require('express');
const app = express();
const port = process.env.PORT || 3000;
const mongoose = require('mongoose');
const config = require('./config');

const setupController = require('./controllers/setupController');
const apiController = require('./controllers/apiController');

app.set('view engine','ejs');
app.use('/',express.static(__dirname + '/public'));
mongoose.connect(config.getDatabaseConnection());

setupController(app);
apiController(app);
app.listen(port);
