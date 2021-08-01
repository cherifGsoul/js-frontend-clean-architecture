const {v4: uuidv4} = require('uuid');
const {makePostId} = require('../../../lib/model/post-id');

const posts = new Map();

const nextIdentity = () => {
	return makePostId(uuidv4());
};

const save = async (post) => {
	const id = nextIdentity();
	posts.set(id.toString(), post);
	return {
		id: id.toString(),
		title: post.title,
		body: post.body,
		draft: post.isDraft()
	}
};

const getById = async (id) => {
	return posts.get(id);
};

module.exports = {
	save,
	nextIdentity,
	getById
};