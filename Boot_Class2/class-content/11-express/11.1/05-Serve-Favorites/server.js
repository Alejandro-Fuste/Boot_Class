const http = require('http');
const fs = require('fs');

const PORT = 7000;

function handleRequest(req, res) {
	const path = req.url;

	switch (path) {
		case '/':
			return displayRoot(res);

		case '/food':
			return displayRoot(res);
	}
}

function displayRoot(filename, res) {
	fs.readFile(__dirname + '/' + filename, (err, data) => {
		if (err) throw err;
	});
}

const server = http.createServer(handleRequest);

server.listen(PORT, () => console.log(`Server listening at http://localhost:${PORT}`));
