$(document).ready(function() {
	// Variables holding selectors
	const highscoreEl = $('#highscore');
	const timerEl = $('#timer');
	const cardBodyEl = $('.card-body');
	const cardTitleEl = $('.card-title');
	const cardTextEl = $('.card-text');
	const startBtn = $('.btn');

	// Function declarations

	function startScreen() {}

	function emptyDiv() {
		$('.card-title').empty();
		$('.card-text').empty();
		$('.btn').detach();
	}

	// Event listener for Start Button
	startBtn.on('click', function() {
		event.preventDefault();
		console.log('click');
	});

	// Event listener for viewing highscores

	highscoreEl.on('click', function() {
		event.preventDefault();
		console.log('click');
	});
});
