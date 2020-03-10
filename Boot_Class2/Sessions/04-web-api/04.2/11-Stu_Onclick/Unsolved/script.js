var increaseButton = document.querySelector('#increment');

var decreaseButton = document.querySelector('#decrement');

var countDisplay = document.querySelector('#count');

var counter = 0;

increaseButton.addEventListener('click', function() {
	var counter = countDisplay.innerText;
	counter++;
	countDisplay.innerHTML = counter;
});

decreaseButton.addEventListener('click', function() {
	var counter = countDisplay.innerText;
	counter--;
	countDisplay.innerHTML = counter;

	if (count > 0) {
		counter--;
		countDisplay.innerHTML = counter;
	} else {
		count;
	}
});
