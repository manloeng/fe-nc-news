import formatArticleInput from './formatArticleInput';

describe('formatArticleInput', () => {
	it('returns and empty object when passed with an empty object', () => {
		const input = {};
		const expected = formatArticleInput(input);
		expect(expected).toEqual({});
	});
});
