const { draftBlogPost } = require('../model/post');

const makeDraftPost = (savePost) => {
	return async ({title, body}) => {
		// Instantiate the post
		const post = draftBlogPost(title, body);
		// Persist the post
		const viewModel = await savePost(post);
		return viewModel.id;
	}
};

const makeGetPostBy =  (getPostById) => {
	return async (id) => {
		const post = await getPostById(id);
		return {
			id: id.toString(),
			title: post.title,
			body: post.body,
			draft: post.isDraft()
		}
	}
}

module.exports = {
	makeDraftPost,
	makeGetPostBy
};