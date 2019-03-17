import { useQuery } from 'react-apollo-hooks';
import sessionQuery from './session.query';

export function useSession() {
	const { data, error, loading } = useQuery(sessionQuery);
	return { data, error, loading };
}
