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
});
