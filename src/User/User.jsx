import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { UserProvider } from './userContext';

export function User({ children }) {
	const [user, setUser] = useState();

	// TODO: Add <Login /> here
	if (!user) {
		return <div>Select User</div>;
	}

	return <UserProvider value={user}>{children}</UserProvider>;
}

User.propTypes = {
	children: PropTypes.node,
};
