import React from 'react';
import { Header } from '../Header';
import { Session } from '../Session';
import { Messages } from '../Message';
import './App.scss';

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
		</>
	);
}
