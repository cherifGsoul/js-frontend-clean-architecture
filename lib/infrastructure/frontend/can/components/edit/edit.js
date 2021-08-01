const StacheElement = require('can-stache-element');
const type = require('can-type');
const view = require('./edit.stache');

class Edit extends StacheElement {
	static view = view;
	
	static props = {
		title: { type: type.maybeConvert(String) },
		body: { type: type.maybeConvert(String) },
		blog: {type: type.maybeConvert(Object), required: true}
	}

	save(ev) {
		if (ev) {
			ev.preventDefault();
		}
		const command = {
			title: this.title, 
			body: this.body
		}
		const id = this.blog.draft(command);
	}
}

customElements.define('blog-post-edit', Edit);