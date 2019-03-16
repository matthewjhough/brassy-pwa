import React from 'react';
import { render } from 'react-testing-library';
import { Messages } from './Messages';
import { UserProvider } from '../User/userContext';

const mockData = [
	{ content: 'hello', user: { firstName: 'test', lastName: 'two', id: 1 } },
];

function mockUser() {
	return { id: '1' };
}

describe('<Messages />', () => {
	it('renders without crashing', () => {
		render(
			<UserProvider value={mockUser()}>
				<Messages />
			</UserProvider>
		);
	});

	it('displays loading text when not correct format yet', () => {
		const { getByText } = render(
			<UserProvider value={mockUser()}>
				<Messages data={{}} />
			</UserProvider>
		);

		expect(getByText('Fetching Messages...')).toBeDefined();
	});

	it('displays data from content passed in', () => {
		const { getByText } = render(
			<UserProvider value={mockUser()}>
				<Messages data={mockData} />
			</UserProvider>
		);

		expect(getByText('hello')).toBeDefined();
	});
});
