import gql from 'graphql-tag';

export default gql`
	query getSessions {
		sessions {
			id
			sessionType {
				value
			}
			messages {
				content
				user {
					id
					firstName
					lastName
				}
			}
		}
	}
`;
