const StacheElement = require('can-stache-element');
const serviceContainer = require('../../service-container');
const view = require('./view.stache');
require('./components/edit/');

require('../../api/fixtures/');

class Application extends StacheElement {
	static view = view;

	get blog() {
		return serviceContainer.blog;
	}
}

customElements.define('my-blog', Application);