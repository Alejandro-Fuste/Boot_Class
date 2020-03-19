var mysql = require('mysql');

var connection = mysql.createConnection({
	host: 'localhost',

	// Your port; if not 3306
	port: 3306,

	// Your username
	user: 'root',

	// Your password
	password: 'yourRootPassword',
	database: 'playlist_db'
});

connection.connect(function(err) {
	if (err) throw err;
	console.log('connected as id ' + connection.threadId + '\n');
	createProduct();
});

function createProduct() {
	console.log('Inserting a new product...\n');
	var query = connection.query(
		'INSERT INTO songs SET ?',
		{
			title: 'Would?',
			artist: 'Alice in Chains',
			genre: 'Metal'
		},
		function(err, res) {
			if (err) throw err;
			console.log(res.affectedRows + ' product inserted!\n');
			// Call updateProduct AFTER the INSERT completes
			// updateProduct();
		}
	);

	// logs the actual query being run
	console.log(query.sql);
}
