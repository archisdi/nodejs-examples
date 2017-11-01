'use strict';

var Grettr = require('./greetr.js');

var greetr1 = new Grettr();
greetr1.on('greet',function(data) {
    console.log('Someone Greet' + ' : ' + data);
});

greetr1.greet('Archie');
