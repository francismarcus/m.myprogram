import gql from 'graphql-tag'

export const meQuery = gql`
	query me {
		me {
			id
			name
			programs {
				name
				id
			}
		}
	}
`;