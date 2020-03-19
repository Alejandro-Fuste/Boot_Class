const mysql = require('mysql');
const inquirer = require('inquirer');
const questions = require('./questions');

const connection = mysql.createConnection({
	host: 'localhost',

	// Your port; if not 3306
	port: 3306,

	// Your username
	user: 'root',

	// Your password
	password: 'yourRootPassword',
	database: 'greatBay_db'
});

connection.connect(function(err) {
	if (err) throw err;
	console.log('connected as id ' + connection.threadId + '\n');

	start();
});

start = () => {
	inquirer.prompt(questions.choice).then((res) => {
		switch (res.startChoice) {
			case 'Bid':
				bidAuction();
				break;
			case 'Post':
				postAuction();
				break;
			default:
				connection.end();
		}
	});
};

postAuction = () => {
	inquirer.prompt(questions.choice).then((res) => {
		let query = connection.query(
			'INSERT INTO auctions SET ?',
			{
				item_name: res.item,
				category: res.gategory,
				starting_bid: res.starting_bid || 0,
				highest_bid: res.highest_bid || 0
			},
			function(err, res) {
				if (err) throw err;
			}
		);
	});
};

bidAuction = () => {
	console.log('bid');
};
