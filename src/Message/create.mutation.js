import gql from 'graphql-tag';

export const CREATE_MESSAGE_MUTATION = gql`
	mutation createMessage($userId: ID!, $content: String!, $sessionId: ID!) {
		createMessage(
			userId: $userId
			content: $content
			sessionId: $sessionId
		) {
			id
			content

			user {
				firstName
			}
		}
	}
`;
