console.log(process.argv);

// console.log((process.argv[2] = 'hello'));

var arg1 = process.argv[2];
var arg2 = process.argv[3];

console.log(arg1 === arg2);
