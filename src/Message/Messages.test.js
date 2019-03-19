import React from 'react';
import { cleanup, waitForElement } from 'react-testing-library';
import { Messages } from './Messages';
import { sessionMock } from '../Session';
import { renderWithProvider } from '../__mocks__/apolloProvider';

afterEach(cleanup);

describe('<Messages />', () => {
	it('renders without crashing', () => {
		renderWithProvider(<Messages />, sessionMock);
	});

	it('displays data from content passed in', async () => {
		const { getByText } = renderWithProvider(
			<Messages
				userId="1"
				data={{
					messages: [
						{
							content: 'hello',
							user: {
								id: '1',
								firstName: 'test',
								lastName: 'two',
							},
						},
					],
				}}
			/>,
			sessionMock
		);

		expect(await waitForElement(() => getByText('hello'))).toBeDefined();
	});
});
