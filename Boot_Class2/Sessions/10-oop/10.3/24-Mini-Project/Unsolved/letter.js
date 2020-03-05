class Letter {
	constructor(char) {
		this.char = char;
		this.visible = false;
	}

	display() {
		if (this.visible) {
			return this.char;
		} else {
			return '_';
		}
	}

	checkGuess(userGuess) {
		if (userGuess.toLowerCase() === this.char.toLowerCase()) this.visible = true;
		return this.visible;
	}
}

const word = [ new Letter('h'), new Letter('e'), new Letter('l'), new Letter('l'), new Letter('o') ];

console.log(word.map((letter) => letter.display()).join(' '));

word[0].checkGuess('h');
console.log(word.map((letter) => letter.display()).join(' '));

module.exports = Letter;
