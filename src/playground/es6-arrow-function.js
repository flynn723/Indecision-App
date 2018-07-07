const square = function(x) {
	return x * x;
}

// const squareArrow = (a, b, c);

const squareArrow = (x) => {
	return x * x;
};

const squareArrow = (x) => x * x;

// console.log()squareArrow(9);

const getFirstName = (fullName) => fullName.split(' ')[0];

console.log(getFirstName('Justin Estrada'));


const add = function(a, b) {
	return a + b;
}
console.log(add(4, 6));

const add = (a, b) => a + b;


const user = {
	name: 'Justin',
	cities: ['San Clemente', 'Tahoe', 'Los Angeles'],
	printPlacesLived() {
		const cityMessages = this.cities.map( (city) => {
			return this.name + ' has lived in ' + city;
		});
		return cityMessages;
		// this.cities.forEach( (city) => {
		// 	console.log(this.name + ' has lived in ' + city);
		// });
	}
}

console.log( user.printPlacesLived() );