import React, { useState } from 'react';
import { useMutation } from 'react-apollo-hooks';
import PropTypes from 'prop-types';
import { CREATE_MESSAGE_MUTATION } from '../Message';
import { sendMutation } from '../Utils/form';
import styles from './Send.module.scss';

export function Send({ session, userId }) {
	const [value, setValue] = useState();
	const createMessage = useMutation(CREATE_MESSAGE_MUTATION, {
		variables: {
			content: value,
			userId: userId,
			sessionId: session.id,
		},
	});

	return (
		<footer className={styles.send}>
			<textarea
				value={value}
				onKeyPress={sendMutation(createMessage, value)}
				onChange={e => setValue(e.target.value)}
				placeholder="type your message here..."
			/>
			<button onClick={sendMutation(createMessage, value)}>Send</button>
		</footer>
	);
}

Send.defaultProps = {
	session: {
		id: '',
	},
	userId: '',
};

Send.propTypes = {
	session: PropTypes.shape({
		id: PropTypes.string,
	}),
	userId: PropTypes.string,
};
