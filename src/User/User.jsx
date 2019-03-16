import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { UserProvider } from './userContext';
import { Login } from '../Login';

export function User({ children }) {
	const [user, setUser] = useState();

	if (!user) {
		return <Login setUser={setUser} />;
	}

	return <UserProvider value={user}>{children}</UserProvider>;
}

User.propTypes = {
	children: PropTypes.node,
};
