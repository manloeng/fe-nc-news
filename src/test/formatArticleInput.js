const formatArticleInput = (input, username) => {
	if (!Object.keys(input).length) return {};
	const { articleTitle, topicInput, articleDescription, ...restOfTheArticleBody } = input;
	if (articleTitle) {
		restOfTheArticleBody.title = articleTitle;
	}
	if (topicInput) {
		restOfTheArticleBody.topic = topicInput;
	}
	if (articleDescription) {
		restOfTheArticleBody.body = articleDescription;
	}
	if (username) {
		restOfTheArticleBody.username = username;
	}
	return restOfTheArticleBody;
};

export default formatArticleInput;
