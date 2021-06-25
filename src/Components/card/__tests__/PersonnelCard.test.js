import { render, screen } from '@testing-library/react';

import PersonnelCard from './../PersonnelCard';

test('render card personnel', () => {
	let personnel = {
		id: '756.2711.9600.4',
		pict: 'https://randomuser.me/api/portraits/women/52.jpg',
		name: 'aldous',
		phone: '_6285351196080',
		date: '27-09-1999',
		email: 'ahaseko1@gmail.com',
	}

	render(<PersonnelCard {...personnel} />);
	const personnelCard = screen.getByTestId('card-personnel');
	expect(personnelCard).toBeInTheDocument();
	expect(personnelCard).toHaveTextContent('aldous');

});