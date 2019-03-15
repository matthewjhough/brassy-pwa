import React from 'react';
import { render } from 'react-testing-library';
import { MockedProvider } from 'react-apollo/test-utils';
import { Session } from './Session';

describe('<Session />', () => {
	it('renders without crashing', () => {
		render(
			<MockedProvider>
				<Session>{() => <div>hello</div>}</Session>
			</MockedProvider>
		);
	});
});
