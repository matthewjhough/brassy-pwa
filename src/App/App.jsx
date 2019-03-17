import React from 'react';
import { Header } from '../Header';
import { Chat } from '../Chat';
import { User } from '../User';
import './App.scss';

/**
 * Todo for prototype:
 * PRE - create basic user select dropdown & set current user based on fetch in <UserContext />
 * 1) style <Send /> & test.
 * 2) create mutation for <Send /> messages
 * 3) create subscription for session messages.
 * 4) add authentication/orization
 * 5) wrap user in Context provider for children components
 */

export function App() {
	return (
		<User>
			<Header />
			<Chat />
		</User>
	);
}
