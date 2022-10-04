/** @type {import('next').NextConfig} */

const nextTranslate = require('./next-translate');
const withTM = require('next-transpile-modules')(['@fancyapps/ui']);

const nextConfig = {
	reactStrictMode: true,
	experimental: {
		images: {
			allowFutureImage: true,
		},
	},
	...nextTranslate,
	i18n: {
		locales: ['en-GB', 'hr'],
		defaultLocale: 'en-GB',
	},
	async rewrites() {
		return {
			beforeFiles: [
				// {
				// 	// this gets converted to /(en|fr|de)/(.*) so will not match the top-level
				// 	// `/` or `/fr` routes like /:path* would
				// 	source: '/(.*)',
				// 	destination: '/',
				// },
				{
					source: '/hr/transferi',
					destination: '/hr/transfers',
					locale: false, // Use `locale: false` so that the prefix matches the desired locale correctly
				},
				{
					source: '/hr/izleti',
					destination: '/hr/excursions',
					locale: false,
				},
				{
					source: '/hr/rezervacije',
					destination: '/hr/reservations',
					locale: false,
				},
				{
					source: '/hr/kontakt',
					destination: '/hr/contact',
					locale: false,
				},
			],
		};
	},
};

module.exports = withTM(nextConfig);
