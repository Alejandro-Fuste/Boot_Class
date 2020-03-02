function DigitalPal() {
	this.hungry = false;
	this.sleepy = false;
	this.bored = 'bored';
	this.age = 0;
	this.outside = false;
	this.houseCondition = 100;
}

DigitalPal.prototype.feed = function() {
	if (this.hungry) {
		console.log(`That was yummy!`);
		this.hungry = false;
		this.sleepy = true;
	} else {
		console.log(`No thanks! I'm full`);
	}
};

DigitalPal.prototype.sleep = function() {
	if (this.sleep) {
		console.log(`Zzzzzzz`);
		this.sleepy = false;
		this.bored = true;
		this.increaseAge();
	}
};

DigitalPal.prototype.play = function() {
	if (this.bored) {
		console.log(`Yay! Let's play!`);
		this.bored = false;
		this.hungry = true;
	} else {
		console.log(`Not right now. Later?`);
	}
};

DigitalPal.prototype.increaseAge = function() {
	this.age++;
	console.log(`Happy birthday to Me! I am ${this.age} years old.`);
};

DigitalPal.prototype.bark = function() {
	console.log(`Woof! Woof!`);
};

DigitalPal.prototype.goOutside = function() {
	if (this.outside) {
	}
};

const thing = new DigitalPal();
console.log(thing.play());

module.exports = DigitalPal;
