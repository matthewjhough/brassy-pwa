import sessionQuery from './session.query';

export const sessionMock = [
	{
		request: {
			query: sessionQuery,
			variables: {},
		},
		result: {
			data: {
				sessions: [
					{
						id: '1',
						sessionType: {
							value: 'direct',
						},
						messages: [
							{
								content: 'hello',
								user: {
									id: '1',
									firstName: 'test',
									lastName: 'two',
								},
							},
						],
					},
				],
			},
		},
	},
];
