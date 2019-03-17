import React, { useState, useContext } from 'react';
import { useMutation } from 'react-apollo-hooks';
import { UserContext } from '../User';
import { useSession } from '../Session';
import { CREATE_MESSAGE_MUTATION } from '../Message';
import { sendOnClick, sendOnEnter } from '../Utils/form';
import styles from './Send.module.scss';

export function Send() {
	const { data, loading } = useSession();
	const [value, setValue] = useState();
	const { id } = useContext(UserContext);

	const createMessage = useMutation(CREATE_MESSAGE_MUTATION, {
		variables: {
			content: value,
			userId: id,
			sessionId: data.session && data.sessions[0].id,
		},
	});

	console.log('Data <Send /> recieves', id, data, value);

	if (loading) return <div />;

	return (
		<footer className={styles.send}>
			<textarea
				value={value}
				onKeyPress={e => sendOnEnter(e, createMessage, value)}
				onChange={e => setValue(e.target.value)}
				placeholder="type your message here..."
			/>
			<button onClick={() => sendOnClick(createMessage, value)}>
				Send
			</button>
		</footer>
	);
}
