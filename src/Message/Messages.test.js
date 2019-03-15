import React from 'react';
import { render } from 'react-testing-library';
import { Messages } from './Messages';

const mockData = [
	{ content: 'hello', user: { firstName: 'test', lastName: 'two', id: 1 } },
];

describe('<Messages />', () => {
	it('renders without crashing', () => {
		render(<Messages />);
	});

	it('displays loading text when not correct format yet', () => {
		const { getByText } = render(<Messages data={{}} />);

		expect(getByText('Fetching Messages...')).toBeDefined();
	});

	it('displays data from content passed in', () => {
		const { getByText } = render(<Messages data={mockData} />);

		expect(getByText('hello')).toBeDefined();
	});
});
