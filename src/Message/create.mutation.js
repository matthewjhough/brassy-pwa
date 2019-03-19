import gql from 'graphql-tag';

export const CREATE_MESSAGE_MUTATION = gql`
	mutation createMessage($userId: ID!, $content: String!, $sessionId: ID!) {
		createMessage(
			userId: $userId
			content: $content
			sessionId: $sessionId
		) {
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
