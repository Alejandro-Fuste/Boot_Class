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

	runSearch();
});

const runSearch = () => {
	inquirer
		.prompt([
			{
				type: 'choice',
				name: 'start_pos',
				message: 'What position would you like to start at?'
			}
		])
		.then(function(data) {
			connection.query(
				'Select * from top1000 where position between ? and ?',
				[ data.start_pos, data.end_pos ],
				function(err, res) {
					if (err) throw err;
					console.log(res);
					start();
				}
			);
		});
};

const artistSearch = () => {};

const multiSearch = () => {
	let query = 'SELECT artist FROM ';
};

const songSearch = () => {};

const songAndAlbumSearch = () => {
	let query = 'SELECT top_albums.year, top_albums.album, top_albums.position, top5000.song, top5000.artist ';
	query += 'FROM top_albums INNER JOIN top5000 ON (top_albums.artist = top5000.artist AND top_albums.year ';
	query +=
		'= top5000.year) WHERE (top_albums.artist = ? and top5000.artist = ?) ORDER BY top_albums.year, top_albums.position';
};
