'use stirct';

class Person {
	constructor(firstname,lastname) {
			this.firstname = firstname;
			this.lastname = lastname;
	}

	greet(){
			console.log(`Hello ${this.firstname}`);
	}
}

var person = new Person('Archie','Isdiningrat');
person.greet();
