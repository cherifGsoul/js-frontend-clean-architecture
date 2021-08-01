const { makeDraftPost, makeGetPostBy } = require('../../../lib/application/blog');
const {save: savePost, getById: getPostById } = require('./blog-post-repository');

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