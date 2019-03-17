import React, { useContext } from 'react';
import { useSession } from '../Session';
import { UserContext } from '../User/userContext';
import { Messages } from '../Message';
import { Send } from '../Send';

// Todo, get selected userId, find session with both existing ids
export function Chat() {
	const { id } = useContext(UserContext);
	const { data, error, loading } = useSession();
	if (loading) return <div>Fetching Messages...</div>;
	if (!data.sessions || error) return <div>Something went wrong.</div>;

	return (
		<>
			<Messages session={data.sessions[0]} userId={id} />
			<Send userId={id} session={data.sessions[0]} />
		</>
	);
}
