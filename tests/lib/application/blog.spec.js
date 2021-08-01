const { expect } = require("chai");
const draftPost = require("../../../lib/application/draft-post");
const serviceContainer = require("./service-container");

describe('Blog', function () {
	beforeEach(function() {
		this.blog = serviceContainer.blog; 
	});
	context('Post drafting', function () {
		it('should draft blog posts', async function() {
			const command = draftPost({title: 'Getting stratrd with TDD', body: 'Some content'})
			const id = await this.blog.draft(command);
			console.log(id);
			const postViewModel = await this.blog.getPostById(id);
			expect(postViewModel.draft).to.be.true
		});
	});
});