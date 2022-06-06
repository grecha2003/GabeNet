import React from 'react';
import { render, screen } from '@testing-library/react';
import AppRenderContainer from './App';

describe('App', () => {
	test('renders App component', () => {
		render(<AppRenderContainer />);

		screen.debug();
	});
});
