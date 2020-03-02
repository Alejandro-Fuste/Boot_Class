// function waitFor(seconds, cb) {
// 	if (isNaN(seconds) || seconds < 1) {
// 		return cb(Error("Parameter 'seconds' must be a positive number!"));
// 	}

// 	setTimeout(function() {
// 		cb(null, 'Success!');
// 	}, seconds * 1000);
// }

// waitFor(2, function(err, msg) {
// 	if (err) {
// 		console.log(err);
// 		return;
// 	}

// 	console.log(msg);
// });

function waitFor(seconds) {
	return new Promise(function(resolve, reject) {
		if (isNaN(seconds) || seconds < 1) {
			return reject(Error("Parameter 'seconds' must be a positive number!"));
		}

		setTimeout(function() {
			resolve('Success!');
		}, seconds * 1000);
	});
}

waitFor(2).then((msg) => console.log(msg)).catch((err) => console.log(err));
