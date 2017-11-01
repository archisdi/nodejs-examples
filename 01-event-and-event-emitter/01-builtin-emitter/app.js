var Emitter = require('events');
var emtr = new Emitter();
var events = require('./config').events;

emtr.on(events.GREET,function() {
    console.log('Someone say hello !');
});

emtr.on(events.GREET,function() {
    console.log('Someone say hello Again !!');
});


console.log('hello');
emtr.emit('greet');
