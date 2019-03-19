export function sendMutation(mutation, value, callback = () => {}) {
	return function(e) {
		if (e.key === 'Enter') {
			e.preventDefault();
			mutation(value);
			callback();
		}

		if (e.type === 'click') {
			mutation(value);
			callback();
		}
	};
}
