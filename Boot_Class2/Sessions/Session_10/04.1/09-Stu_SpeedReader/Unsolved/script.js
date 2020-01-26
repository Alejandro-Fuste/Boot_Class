var countdownEl = document.querySelector('.countdown');
var timerEl = document.querySelector('#timer');

var secondsLeft = 6;
var poem =
	'Some say the world will end in 🔥, Some say in ice. From what I’ve tasted of desire, I hold with those who favor fire. But if it had to perish twice, I think I know enough of hate. To say that for destruction ice, Is also great, And would suffice.';

function prepareRead() {
	// Create the countdown timer.
	var timerInterval = setInterval(function() {
		secondsLeft--;
		timerEl.textContent = 'Countdown: ' + secondsLeft;

		if (secondsLeft === 0) {
			clearInterval(timerInterval);
			speedRead();
		}
	}, 1000);
}

function speedRead() {
	// Print words to the screen one at a time.
	countdownEl.style;
}

prepareRead();
