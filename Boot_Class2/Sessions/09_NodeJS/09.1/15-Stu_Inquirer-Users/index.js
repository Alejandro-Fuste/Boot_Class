var inquirer = require('inquirer');
var fs = require('fs');

inquirer
	.prompt([
		{
			type: 'input',
			message: 'What is your name?',
			name: 'name'
		},
		{
			type: 'checkbox',
			message: 'What languages do you know?',
			name: 'stack',
			choices: [ 'HTML', 'CSS', 'Javascript', 'Node JS', 'MySQL' ]
		},
		{
			type: 'list',
			message: 'What is your preferred method of communication?',
			name: 'contact',
			choices: [ 'email', 'phone', 'snail mail' ]
		}
	])
	.then(function(data) {
		var filename = data.name.toLowerCase().split(' ').join('') + '.json';

		fs.writeFile(filename, JSON.stringify(data, null, '\t'), function(err) {
			if (err) {
				return console.log(err);
			}

			console.log('Success!');
		});
	});
