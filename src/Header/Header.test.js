import React from 'react';
import { render } from 'react-testing-library';
import { Header } from './Header';

describe('<Header />', () => {
	it('renders without crashing', () => {
		render(<Header />);
	});
});
