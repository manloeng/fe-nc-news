const formatArticleInput = (input) => {
	if (!Object.keys(input).length) return {};
	const { articleTitle, topicInput, articleDescription, ...restOfTheArticleBody } = input;
	if (articleTitle) {
		restOfTheArticleBody.title = articleTitle;
	}
	if (topicInput) {
		restOfTheArticleBody.topic = topicInput;
	}
	if (articleDescription) {
		restOfTheArticleBody.description = articleDescription;
	}
	return restOfTheArticleBody;
};

export default formatArticleInput;
