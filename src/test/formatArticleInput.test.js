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
	it('returns and formatted object when passed with an object with articleTitle and user', () => {
		const input = {
			articleTitle: 'coders'
		};
		const username = 'andrew';
		const expected = formatArticleInput(input, username);
		expect(expected).toEqual({ title: 'coders', username: 'andrew' });
	});
	it('returns and formatted object when passed with an object with topicInput', () => {
		const input = {
			topicInput: 'coding'
		};
		const expected = formatArticleInput(input);
		expect(expected).toEqual({ topic: 'coding' });
	});
	it('returns and formatted object when passed with an object with articleDescription', () => {
		const input = {
			articleDescription: 'coding is cool'
		};
		const expected = formatArticleInput(input);
		expect(expected).toEqual({ body: 'coding is cool' });
	});
	it('returns and formatted object when passed with an object with all the keys', () => {
		const input = {
			articleTitle: 'coders',
			topicInput: 'coding',
			articleDescription: 'coding is cool'
		};
		const username = 'andrew';
		const expected = formatArticleInput(input, username);
		expect(expected).toEqual({ topic: 'coding', body: 'coding is cool', title: 'coders', username: 'andrew' });
	});
});
