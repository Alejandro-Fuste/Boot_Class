const fs = require('fs');
const util = require('util');

const readFileAsync = util.promisify(fs.readFile);
const writeFileAsync = util.promisify(fs.writeFile);

async function combineAnimals() {
	try {
		const hamster = await readFileAsync('hamster.json', 'utf-8');
		const dog = await readFileAsync('dog.json', 'utf-8');
		const cat = await readFileAsync('cat.json', 'utf-8');
		const goldfish = await readFileAsync('goldfish.json', 'utf-8');

		const animalJSON = [ dog, cat, goldfish, hamster ].map(JSON.parse);

		await writeFileAsync('combined.json', JSON.stringify(animalJSON, null, 2), 'utf-8');

		console.log("Succesfully wrote to 'combined.json' file.");
	} catch (err) {}
}

combineAnimals();
