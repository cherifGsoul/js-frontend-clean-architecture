const fixture = require('can-fixture');
const {v4: uuidv4} = require('uuid');

const uuid = uuidv4();

const viewModel = {
	id: uuid,
	title: 'A title',
	body: 'Some body cotent',
	draft: true
};

const posts = new Map();

fixture( {
	"POST /posts": (req, res) => {
		const post = {
			id: uuid,
			title: req.data.title,
			body: req.data.body,
			draft: req.data.draft
		};
		posts.set(uuid, post);
		return post;
	},
	"GET /posts/{id}": () => { 
		// const viewModel = posts.get(req.data.id)  
		return {data: viewModel}
	},
});