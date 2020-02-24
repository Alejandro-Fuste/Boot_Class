console.log(process.argv);

var arg = process.argv[2];

console.log();

var fs = require('fs');

fs.appendFile('./write.js', arg + '\n', function(err) {
	if (err) {
		console.log(err);
	} else {
		console.log('Success');
	}
});
