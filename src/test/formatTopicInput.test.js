import formatTopicInput from './formatTopicInput';

describe('formatTopicInput', () => {
	it('returns and empty object when passed with an empty object', () => {
		const input = {};
		const expected = formatTopicInput(input);
		expect(expected).toEqual({});
	});
});
