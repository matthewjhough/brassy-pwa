import gql from 'graphql-tag';

export default gql`
	query session($sessionId: ID!) {
		session(sessionId: $sessionId) {
			id
			sessionType {
				value
			}
		}
	}
`;
