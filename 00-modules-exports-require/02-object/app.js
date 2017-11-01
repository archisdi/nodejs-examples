var person = {
    firstname: 'Archie',
    lasname: 'Isdiningrat',
    greet: function () {
        console.log('Hello ' + this.firstname + ' ' + this.lasname);
    }
};

person.greet();

console.log(person.firstname);