// Car
// make
// model
// vin
// getDescription
class Person {
	constructor(name = 'Anon', age = 0) {
		this.name = name;
		this.age = age;
	}
	getGreeting() {
		return `Hello ${this.name}`;
	}
	getDescription() {
		return `My name is ${this.name}, I am ${this.age} years old.`;
	}

}

class Student extends Person {
	constructor(name, age, major) {
		super(name, age);
		this.major = major;
	}
	hasMajor() {
		return !!this.major;
	}
	getDescription() {
		let description = super.getDescription();
		if (this.hasMajor()) {
			description += `Their major is ${this.major}.`;
		}
		return description;
	}
}

class Traveler extends Person {
	constructor(name, age, homeLocation) {
		super(name, age);
		this.homeLocation = homeLocation;
	}
	getGreeting() {
		let greeting = super.getGreeting();
		if (this.homeLocation) {
			greeting += ` my ${this.homeLocation} is remote bitch.`;
		}
		return greeting;
	}
}

// const me = new Person( 'Justin Estrada', 24 );

const me = new Student( 'Justin Estrada', 24, 'Computer Science' );
console.log(me.getGreeting());

console.log(me.getDescription());

const traveler = new Traveler( 'Justin Estrada', 24, 'MExico');

console.log(traveler.getGreeting());
