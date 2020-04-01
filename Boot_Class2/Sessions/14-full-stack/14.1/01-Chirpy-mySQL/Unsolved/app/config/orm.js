const connection = require('../config/connection.js');

var orm = {
	all: function(tableInput, cb) {
		var queryString = 'SELECT * FROM ?;';
		connection.query(queryString, [ tableInput ], function(err, result) {
			if (err) {
				throw err;
			}
			cb(result);
		});
	}
};
