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

	it('displays loading text when not correct format yet', () => {
		const { getByText } = renderWithProvider(<Messages />, sessionMock);

		expect(getByText('Fetching Messages...')).toBeDefined();
	});

	it('displays data from content passed in', async () => {
		const { getByText } = renderWithProvider(<Messages />, sessionMock);

		expect(await waitForElement(() => getByText('hello'))).toBeDefined();
	});
});
