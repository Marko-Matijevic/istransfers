/** @type {import('next').NextConfig} */

const nextTranslate = require('./next-translate');
const withTM = require('next-transpile-modules')(['@fancyapps/ui']);
const withTranslateRoutes = require('next-translate-routes/plugin');

const nextConfig = {
	reactStrictMode: true,
	experimental: {
		images: {
			allowFutureImage: true,
		},
	},
	...nextTranslate,
};

const tm = withTranslateRoutes({
	i18n: {
		locales: ['en-GB', 'hr'],
		defaultLocale: 'en-GB',
	},
	...nextConfig,
});

module.exports = withTM(tm);
