var maths = require('./math.js');

var op = process.argv[2];
var val1 = parseInt(process.argv[3]);
var val2 = parseInt(process.argv[4]);

switch (op) {
	case 'add':
		console.log(maths.add(val1, val2));
		break;

	case 'subtract':
		console.log(maths.subtract(val1, val2));
		break;

	case 'multiply':
		console.log(maths.multiply(val1, val2));
		break;

	case 'divide':
		console.log(maths.divide(val1, val2));
		break;
	default:
		console.log('Unknown command');
}
