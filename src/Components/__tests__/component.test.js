import { render, screen } from '@testing-library/react';

import Navbar from './../Navbar';
import Header from './../Header';
import Load from './../Load';
import Loading from './../Loading';

test('should be render navbar', () => {
	render(<Navbar />);
	const navComponent = screen.getByTestId('navbar');
	expect(navComponent).toBeInTheDocument();
})

test('should be render header', () => {
	render(<Header />);
	const headComponent = screen.getByTestId('header');
	expect(headComponent).toBeInTheDocument();
})

test('should be render navbar', () => {
	render(<Load />);
	const loadComponent = screen.getByTestId('load');
	expect(loadComponent).toBeInTheDocument();
})

test('should be render navbar', () => {
	render(<Loading />);
	const loadingComponent = screen.getByTestId('loading');
	expect(loadingComponent).toBeInTheDocument();
})
