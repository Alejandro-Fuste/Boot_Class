const http = require('http');

const port1 = 7000;
const port2 = 7500;

const quotes = [ 'Get money, f...', 'No! Try not! Do or Do not. There is no try.' ];

console.log(quotes[Math.floor(quotes.length * Math.random())]);

function handleRequest(request, response) {
	response.end(quotes[Math.floor(quotes.length * Math.random())]);
}

const server1 = http.createServer(handleRequest);

server1.listen(port1, () => {
	console.log(`Server listening on: http://localhost: ${port1}`);
});

const server2 = http.createServer(handleRequest);

server2.listen(port2, () => {
	console.log(`Server listening on: http://localhost: ${port2}`);
});
