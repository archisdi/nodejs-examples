var person = {
    firstname : '',
    lastname : '',
    greet: function() {
      return this.firstname + ' ' + this.lastname;
    }
}

var archie = Object.create(person);
archie.firstname = 'archie';
archie.lastname = 'isdiningrat';

var edwina = Object.create(person);
edwina.firstname = 'edwina';
edwina.lastname = 'anky';

console.log(archie.greet());
console.log(edwina.greet());
