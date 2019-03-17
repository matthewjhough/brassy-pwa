import gql from 'graphql-tag';

export const CREATE_MESSAGE_MUTATION = gql`
	mutation createMessage(
		$userId: userId
		$content: content
		$sessionId: sessionId
	) {
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
