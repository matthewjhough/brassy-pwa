import React from 'react';
import { ApolloClient } from 'apollo-client';
import { MockLink } from 'apollo-link-mock';
import { InMemoryCache } from 'apollo-cache-inmemory';
import { ApolloProvider } from 'react-apollo-hooks';
import { render } from 'react-testing-library';
import { UserProvider } from '../User/userContext';

function mockUser() {
	return { id: '1' };
}

function createClient(mocks) {
	return new ApolloClient({
		cache: new InMemoryCache({
			addTypename: false,
		}),
		link: new MockLink(mocks),
	});
}

export function renderWithProvider(ui, mocks) {
	return render(
		<ApolloProvider client={createClient(mocks)}>
			<UserProvider value={mockUser()}>{ui}</UserProvider>
		</ApolloProvider>
	);
}
