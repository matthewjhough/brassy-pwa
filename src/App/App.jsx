import React from 'react';
import { Header } from '../Header';
import { Session } from '../Session';
import { Messages } from '../Message';
import { Send } from '../Send';
import './App.scss';

/**
 * Todo for prototype:
 * 1) style <Send /> & test.
 * 2) create mutation for <Send /> messages
 * 3) create subscription for session messages.
 * 4) add authentication/orization
 * 5) wrap user in Context provider for children components
 */

export function App() {
	return (
		<>
			<Header />
			<Session>
				{({ data }) => (
					<Messages
						data={
							data && data.sessions && data.sessions[0].messages
						}
					/>
				)}
			</Session>
			<Send />
		</>
	);
}
