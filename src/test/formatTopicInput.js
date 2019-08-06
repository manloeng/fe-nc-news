const formatTopicInput = (input) => {
	if (!Object.keys(input).length) return {};
	const { topicSlug } = input;
	return { slug: topicSlug };
};

module.exports = formatTopicInput;
