var Emitter = require('./emitter');

var emtr = new Emitter();

emtr.on('greet',function() {
    console.log('Someone say hello !');
});

emtr.on('greet',function() {
    console.log('Someone say hello Again !!');
});


console.log('hello');
emtr.emit('greet');
