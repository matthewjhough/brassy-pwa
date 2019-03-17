export function sendMutation(mutation, value) {
	return function(e) {
		if (e.key === 'Enter') {
			e.preventDefault();
			mutation(value);
		}

		if (e.type === 'click') {
			mutation(value);
		}
	};
}
