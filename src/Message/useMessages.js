import { useQuery } from 'react-apollo-hooks';
import { messageQuery } from './messages.query';

export function useMessages(sessionId) {
	const { data, error, loading } = useQuery(messageQuery, {
		variables: {
			sessionId,
		},
	});
	return { data, error, loading };
}
