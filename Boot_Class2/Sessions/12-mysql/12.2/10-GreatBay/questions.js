const questions = {
	choice: [
		{
			type: 'list',
			name: 'startChoice',
			message: 'What would you like to do?',
			choices: [ 'Bid', 'Post', 'Exit' ],
			default: 'Use arrow keys'
		}
	],
	post: [
		{
			type: 'input',
			name: 'item',
			message: 'What item would you like to sell?'
		},
		{
			type: 'input',
			name: 'gategory',
			message: 'What is the gatecory of the item?'
		},
		{
			type: 'input',
			name: 'startBid',
			message: 'How much would you like to start the bid at?'
		}
	]
};

module.exports = questions;
