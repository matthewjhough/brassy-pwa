import React, { useContext, useState, useEffect } from 'react';
import { useMessages } from '../Message';
import { useSession } from '../Session';
import { UserContext } from '../User/userContext';
import { Messages } from '../Message';
import { Send } from '../Send';

// Todo, get selected userId, find session with both existing ids
export function Chat() {
	const { id } = useContext(UserContext);
	const [sessionId, setSessionId] = useState('');

	const {
		data: session,
		error: sessionError,
		loading: sessionLoading,
	} = useSession();

	const {
		data: messages,
		error: messageErrors,
		loading: messageLoading,
	} = useMessages(sessionId || '');

	useEffect(() => {
		setSessionId((session.session && session.session.id) || '');
	}, [session]);

	if (sessionLoading || messageLoading)
		return <div>Fetching Messages...</div>;

	if (!session.session || sessionError)
		return <div>Something went wrong.</div>;

	return (
		<>
			<Messages error={messageErrors} data={messages} userId={id} />
			<Send userId={id} session={session.session} />
		</>
	);
}
