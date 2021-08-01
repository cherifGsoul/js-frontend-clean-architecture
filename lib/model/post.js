const STATUS = {
	DRAFT: 'draft',
	PUBLISHED: 'published'
};

const makePost = (title, body, status) => {
	return Object.freeze({
		get title() {
			return title;
		},
		get body() {
			return body;
		},
		get status() {
			return status;
		},
		isDraft() {
			return status === STATUS.DRAFT ;
		}
	});
}

exports.draftBlogPost = (title, body) => {
	return makePost(title, body, STATUS.DRAFT);
};