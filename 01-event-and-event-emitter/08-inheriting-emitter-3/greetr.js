'use strict';

var EventEmitter = require('events');

module.exports = class Grettr extends EventEmitter{
  constructor() {
      super();
      this.greeting = 'Bonjour!';
  }

  greet(data){
    console.log(this.greeting + ' : ' + data);
    this.emit('greet', data);
  }
}
