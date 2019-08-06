const formatArticleInput = (input) => {
	if (!Object.keys(input).length) return {};
	const { articleTitle, topicInput, ...restOfTheArticleBody } = input;
	if (articleTitle) {
		restOfTheArticleBody.title = articleTitle;
	}
	if (topicInput) {
		restOfTheArticleBody.topic = topicInput;
	}

	return restOfTheArticleBody;
};

export default formatArticleInput;
