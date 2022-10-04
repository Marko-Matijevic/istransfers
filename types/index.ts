import { Locales } from '../enums';

export type Pages =
	| 'home'
	| 'transfers'
	| 'excursions'
	| 'reservations'
	| 'contact'
	| 'error';

export type LocalizedRoute = {
	[lang in Locales]: string;
};

export type Route = Record<Pages, LocalizedRoute>;
