const fs = require('fs');
const axios = require('axios');
const inquirer = require('inquirer');

inquirer
	.prompt({
		message: 'Enter your GitHub username',
		name: 'username'
	})
	.then(function({ username }) {
		const queryUrl = `https://api.github.com/users/${username}/repos?per_page=100`;

		axios.get(queryUrl).then((res) => {
			// console.log(res.data);

			const repoNames = res.data.map((repo) => repo.name);

			console.log(repoNames.join('\n'));

			fs.writeFile('repos.txt', repoNames.join('\n'), (err) => {
				if (err) throw err;
			});
		});
	});
