import formatTopicInput from './formatTopicInput';

describe('formatTopicInput', () => {
	it('returns and empty object when passed with an empty object', () => {
		const input = {};
		const expected = formatTopicInput(input);
		expect(expected).toEqual({});
	});
	it('returns and formatted object when passed with an object with a topic slug', () => {
		const input = { topicSlug: 'coding' };
		const expected = formatTopicInput(input);
		expect(expected).toEqual({ slug: 'coding' });
	});
	it('returns and formatted object when passed with an object with a topic description', () => {
		const input = { topicDescription: 'coding is cool' };
		const expected = formatTopicInput(input);
		expect(expected).toEqual({ description: 'coding is cool' });
	});
	it('returns and formatted object when passed with an object with 2 keys topic description and slug', () => {
		const input = { topicDescription: 'coding is cool', topicSlug: 'coding' };
		const expected = formatTopicInput(input);
		expect(expected).toEqual({ description: 'coding is cool', slug: 'coding' });
	});
});
