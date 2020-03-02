function Character(nameStr, professionStr, ageNum, strengthNum, hitpointsNum) {
	this.name = nameStr;
	this.profession = professionStr;
	this.age = ageNum;
	this.strength = strengthNum;
	this.hitpoints = hitpointsNum;
	this.printStats = function() {
		console.log(`This ${this.name} is a ${this.profession} and is ${this.age} years old. They
        have strength of ${this.strength} and hitpoints of ${this.hitpoints}.`);
	};
}

const hero = new Character('Luke', 'jedi', 37, 100, 5);
const villan = new Character('Darth Vader', 'sith', 67, 100, 10);
hero.printStats();
villan.printStats();

Character.prototype.IsAlive = function() {
	if (this.hitpoints > 0) {
	}
};
