import React from 'react';
import PropTypes from 'prop-types';
import styles from './Login.module.scss';

// TODO: Load users from DB, set user to that object
// TODO: Create actual login that fetches user info
export function Login({ setUser }) {
	return (
		<div className={styles.login}>
			<h3>Select User</h3>
			<button onClick={() => setUser({ id: '2' })}>Tyson</button>
			<button onClick={() => setUser({ id: '1' })}>Finn</button>
		</div>
	);
}

Login.propTypes = {
	setUser: PropTypes.func,
};
