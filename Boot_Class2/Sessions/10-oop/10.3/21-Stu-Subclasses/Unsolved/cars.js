const Vehicle = require('./vehicle');

console.log(Vehicle);

class Car extends Vehicle {
	constructor(id, sound, color, passengers) {
		super(id, 4, sound);
		this.color = color;
		this.passengers = passengers;
	}

	checkPassengers() {
		if (this.passengers.length > 4) console.log(`There are too many passengers.`);
	}

	useHorn() {
		console.log(this.sound);
	}
}
