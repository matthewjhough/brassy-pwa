import React, { useState } from 'react';
import { useMutation } from 'react-apollo-hooks';
import PropTypes from 'prop-types';
import { CREATE_MESSAGE_MUTATION, messageQuery } from '../Message';
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
		update: (cache, { data: { createMessage } }) => {
			const { messages } = cache.readQuery({
				query: messageQuery,
				variables: { sessionId: session.id },
			});

			cache.writeQuery({
				query: messageQuery,
				variables: { sessionId: session.id },
				data: { messages: messages.concat([createMessage]) },
			});
		},
	});

	return (
		<footer className={styles.send}>
			<textarea
				value={value}
				onKeyPress={sendMutation(createMessage, value, () =>
					setValue('')
				)}
				onChange={e => setValue(e.target.value)}
				placeholder="type your message here..."
			/>
			<button
				onClick={sendMutation(createMessage, value, () =>
					setValue('')
				)}>
				Send
			</button>
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
