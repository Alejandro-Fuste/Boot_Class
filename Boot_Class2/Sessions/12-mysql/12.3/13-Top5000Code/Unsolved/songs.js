const mysql = require('mysql');
const inquirer = require('inquirer');

const connection = mysql.createConnection({
	host: 'localhost',

	// Your port; if not 3306
	port: 3306,

	// Your username
	user: 'root',

	// Your password
	password: 'yourRootPassword',
	database: 'top_songsDB'
});

connection.connect(function(err) {
	if (err) throw err;
	console.log('connected as id ' + connection.threadId + '\n');

	// start();
});

// -- SELECT * FROM top_songsDB.Top5000
// -- SELECT * FROM top_songsDB.Top5000 LIMIT 5;
// -- SELECT * FROM top_songsDB.Top5000 where artist = 'Pink Floyd';
// -- SELECT artist, COUNT(*) c FROM top_songsDB.Top5000 GROUP BY artist HAVING c > 1;
// -- SELECT * FROM top_songsDB.Top5000 WHERE year >= '1980' AND year <= '1990';
// -- SELECT * FROM top_songsDB.Top5000 where song_title = 'Lose Yourself';
