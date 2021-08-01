exports.makePostId = (id) => {
	return {
		get id() {
			return id;
		},
		toString() {
			return id;
		},
		equals(other) {
			if (other.id) {
				return this.id === other.id;
			}

			return false;
		}
	}
};