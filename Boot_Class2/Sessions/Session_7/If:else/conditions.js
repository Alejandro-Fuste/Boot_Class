let eatSteak, year, drinkingAge, birthYear;

eatSteak = confirm('Do you eat Steak?');
year = 2020;

if (eatSteak === true) {
	alert("Here's a Steak Sandwich!");
} else {
	alert("Here's a Tofu Stir-Fry");
}

birthYear = prompt('What year were you born?');

drinkingAge = year - birthYear;

if (drinkingAge < 21) {
	alert('No sake for you!');
} else {
	alert('Drink some sake!');
}
