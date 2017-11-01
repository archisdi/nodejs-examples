var EventEmitter = require('events');
var util = require('util');

function Grettr(){
  EventEmitter.call(this);
    this.greeting = 'Greeting Humans !';
}
util.inherits(Grettr,EventEmitter);
Grettr.prototype.greet = function(data){
    console.log(this.greeting + ' : ' + data);
    this.emit('greet', data);
}

var greetr1 = new Grettr();
greetr1.on('greet',function(data) {
    console.log('Someone Greet' + ' : ' + data);
});

greetr1.greet('Archie');
