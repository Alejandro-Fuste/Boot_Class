const fs = require('fs');

fs.readFile('animals.json', 'utf8', function(err, data) {
	if (err) {
		throw err;
	}

	// Parse the JSON string to an object
	const animalJSON = JSON.parse(data);

	// Create two new arrays to contain the cats and dogs objects
	const dogs = [];
	const cats = [];

	animalJSON.forEach((animal) => {
		if (animal.species === 'dog') {
			dogs.push(animal);
		} else if (animal.species === 'cat') {
			cats.push(animal);
		}
	});
	console.log(dogs);
	console.log(cats);

	// const dogs = animalJSON.filter((animal) => animal.species === 'dog');
	// const cats = animalJSON.filter((animal) => animal.species === 'cat');

	// console.log(dogs);
	// console.log(cats);
});
