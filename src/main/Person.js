// Person
function Person(n) {
	this.name = n;
}

function getName() {
	greeting();
	return this.name;
}

function greeting() {
	console.log("this is a test of a non-exported function");
}

Person.prototype.getName = getName;

module.exports = Person;