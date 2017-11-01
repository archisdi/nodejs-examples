function Person(firstname, lastname) {
    this.firstname = firstname;
    this.lastname = lastname;
}

Person.prototype.greet = function () {
    console.log('Hello ' + this.firstname + ' ' + this.lastname);
};

var archie = new Person('archie', 'isdiningrat');

console.log(archie);
archie.greet();

console.log(archie.__proto__);