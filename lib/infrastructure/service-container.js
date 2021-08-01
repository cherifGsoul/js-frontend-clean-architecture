const { makeDraftPost, makeGetPostBy } = require('../application/blog');
const {save: savePost, getById: getPostById } = require('./api/blog/axios-blog-post-repository');

const serviceContainer = {
	get blog() {
		if (typeof savePost !== 'function') {
			throw new TypeError('Must be a function');
		}
		return {
			draft: makeDraftPost(savePost),
			getPostById: makeGetPostBy(getPostById)
		}
	}
}

module.exports = serviceContainer;