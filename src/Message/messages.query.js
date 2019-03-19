import gql from 'graphql-tag';

export const messageQuery = gql`
	query messages($sessionId: ID!) {
		messages(sessionId: $sessionId) {
			content
			session {
				id
			}
			user {
				id
				firstName
				lastName
			}
		}
	}
`;
