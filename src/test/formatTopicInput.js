const formatTopicInput = (input) => {
	if (!Object.keys(input).length) return {};
	const { topicSlug, topicDescription, ...restOfTheBody } = input;
	if (topicSlug) {
		restOfTheBody.slug = topicSlug;
	}
	if (topicDescription) {
		restOfTheBody.description = topicDescription;
	}
	return restOfTheBody;
};

export default formatTopicInput;
