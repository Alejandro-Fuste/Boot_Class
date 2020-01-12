let myFarm = [ 'chickens', 'pigs', 'cows', 'horses', 'otriches' ];

for (i = 0; i < myFarm.length; i++) {
	console.log(myFarm[i]);

	if (myFarm[i].charAt(0) === 'c' || myFarm[i].charAt(0) === 'o') {
		console.log(myFarm[i], 'Starts with c or an o!');
	}
}
