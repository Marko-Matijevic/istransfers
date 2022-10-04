import { Route } from '../types';

export const routes = [
	'/',
	'/transfers',
	'/excursions',
	'/reservations',
	'/contact',
];

export const HEAD_TITLES = {
	home: {
		'en-GB': 'Istransfers',
		hr: 'Istransfers',
	},
	transfers: {
		'en-GB': 'Transfers',
		hr: 'Transferi',
	},
	excursions: {
		'en-GB': 'Excursions',
		hr: 'Izleti',
	},
	reservations: {
		'en-GB': 'Reservations',
		hr: 'Rezervacije',
	},
	contact: {
		'en-GB': 'Contact',
		hr: 'Kontakt',
	},
	error: {
		'en-GB': '404 Page',
		hr: '404 Page',
	},
};
