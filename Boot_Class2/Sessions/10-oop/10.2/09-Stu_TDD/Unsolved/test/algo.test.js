const Algo = require('../algo');

describe('Algo', () => {
	describe('reverse', () => {
		it('should take in a string and reverse the order of the characters in the string'),
			() => {
				const str = 'hello';
				const resStr = 'olleh';

				expect(str).toEqual(resStr);
			};
	});

	describe('isPalindrome', () => {});

	describe('capitalize', () => {});
});
