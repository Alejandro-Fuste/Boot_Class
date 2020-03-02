const fs = require('fs');
const util = require('util');
const axios = require('axios');

const appendFileAsync = util.promisify(fs.appendFile);
const readFileAsync = util.promisify(fs.readFile);

const config = { headers: { accept: 'application/json' } };

axios
	.get('https://icanhazdadjoke.com/', config)
	.then(function(res) {
		console.log(res.data);
		console.log(res.data.joke);

		appendFileAsync('jokes.text', res.data.joke + '\n').then(() => {
			readFileAsync('jokes.text', 'utf-8').then((data) => {
				console.log(data);
			});
		});
	})
	.catch((err) => console.log(err));
