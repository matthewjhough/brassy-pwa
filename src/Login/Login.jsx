import React from 'react';
import PropTypes from 'prop-types';
import styles from './Login.module.scss';

export function Login({ setUser }) {
	return (
		<div className={styles.login}>
			<h3>Select User</h3>
		</div>
	);
}

Login.propTypes = {
	setUser: PropTypes.func,
};
