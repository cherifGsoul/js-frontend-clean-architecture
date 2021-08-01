module.exports = ({title, body}) => {
	return {
		get title() {
			return title
		},
		get body() {
			return body;
		}
	}
};