const fs = require('fs');
const inquirer = require('inquirer');
const axios = require('axios');
const util = require('util');

const writeFileAsync = util.promisify(fs.writeFile);

function promptUser() {
	return inquirer.prompt([
		{
			type: 'input',
			name: 'name',
			message: 'What is your name?'
		},
		{
			type: 'input',
			name: 'location',
			message: 'Where are you from?'
		},
		{
			type: 'input',
			name: 'hobby',
			message: 'What is your favorite hobby?'
		}
	]).then;
}
