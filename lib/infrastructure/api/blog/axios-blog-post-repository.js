const { default: axios } = require("axios");


const save = async (post) => {
	const response = await axios.post('/posts', {
		title: post.title,
		body: post.body,
		status: post.status
	});
	return response.data;
};

const getById = async (id) => {
	return axios.get(`/posts/${id}`);
};

module.exports = {
	save,
	getById
};