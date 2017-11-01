var obj = {
    name : 'Archie isdiningrat',
    greet: function() {
        console.log(`Hello ${this.name}`);
    }
}

obj.greet();
obj.greet.call({name:'Edwina Anky'});
obj.greet.apply({name:'Anky Kidut'});
