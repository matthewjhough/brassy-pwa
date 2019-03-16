import React from 'react';
import styles from './Send.module.scss';

export function Send() {
	return (
		<footer className={styles.send}>
			<textarea placeholder="type your message here..." />
			<button>Send</button>
		</footer>
	);
}
