export function sendOnEnter(e, createMutation, value) {
	if (e.key === 'Enter') {
		e.preventDefault();
		createMutation(value);
	}
}

export function sendOnClick(createMutation, value) {
	createMutation(value);
}
