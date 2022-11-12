import { Route } from '../types';

export const ROUTES: Route = {
	home: {
		'en-GB': '/',
		hr: '/',
	},
	transfers: {
		'en-GB': '/transfers',
		hr: '/transferi',
	},
	excursions: {
		'en-GB': '/excursions',
		hr: '/izleti',
	},
	reservations: {
		'en-GB': '/reservations',
		hr: '/rezervacije',
	},
	contact: {
		'en-GB': '/contact',
		hr: '/kontakt',
	},
	error: {
		'en-GB': '/error',
		hr: '/error',
	},
};

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
		hr: '404 Stranica',
	},
};
