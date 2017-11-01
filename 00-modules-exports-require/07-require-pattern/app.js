var greet1 = require('./greet1');
greet1();

var greet2 = require('./greet2').greet;
greet2();

var greet3 = require('./greet3');
greet3.fire();
greet3.message = 'Changed Hello world!!!';

var greet3b = require('./greet3');
greet3b.fire();

var Greet = require('./greet4');
var greet4 = new Greet();
greet4.fire();

var greet5 = require('./greet5');
greet5.greet();


(function () {
  console.log('end');
}());