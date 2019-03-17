import React from 'react';
import { renderWithProvider } from '../__mocks__/apolloProvider';
import { App } from './App';

it('renders without crashing', () => {
	renderWithProvider(<App />);
});
