$(document).ready(function() {
	const highscoreEl = $('#highscore');
	const timerEl = $('#timer');
	const startBtn = $('.btn');

	console.log(highscoreEl);
	console.log(timerEl);
	console.log(startBtn);

	startBtn.on('click', function() {
		console.log('click');
	});

	highscoreEl.on('click', function() {
		console.log('click');
	});
});
