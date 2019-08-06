import formatArticleInput from './formatArticleInput';

describe('formatArticleInput', () => {
	it('returns and empty object when passed with an empty object', () => {
		const input = {};
		const expected = formatArticleInput(input);
		expect(expected).toEqual({});
	});
	it('returns and formatted object when passed with an object with articleTitle', () => {
		const input = {
			articleTitle: 'coders'
		};
		const expected = formatArticleInput(input);
		expect(expected).toEqual({ title: 'coders' });
	});
	it('returns and formatted object when passed with an object with articleTitle', () => {
		const input = {
			topicInput: 'coding'
		};
		const expected = formatArticleInput(input);
		expect(expected).toEqual({ topic: 'coding' });
	});
	it('returns and formatted object when passed with an object with articleTitle', () => {
		const input = {
			articleDescription: 'coding is cool'
		};
		const expected = formatArticleInput(input);
		expect(expected).toEqual({ description: 'coding is cool' });
	});
});
