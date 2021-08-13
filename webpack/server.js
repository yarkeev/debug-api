const path = require('path');
const webpack = require('webpack');

module.exports = function (env, options) {
	env = env || {};

	const isDev = options.mode === 'development';
	const isProd = options.mode === 'production';
	const isStat = !!env.stat;

	const config = {
		mode: options.mode,

		target: 'node',

		devtool: 'source-map',

		entry: {
			index: require('./entries/server'),
		},

		output: {
			filename: '[name].js',
			path: path.resolve(__dirname, '../dist/'),
			publicPath: '/',
			library: 'debug-api',
			libraryTarget: 'commonjs2',
		},

		module: {
			rules: [
				require('./loaders/typescriptLoader'),
				// require('./loaders/jsLoader'),
			]
		},

		resolve: {
			extensions: ['.ts', '.tsx', '.js', '.jsx'],
			alias: require('./aliases'),
		},

		optimization: require('./optimization'),

		plugins: [
			...require('./plugins')(isDev, isProd, isStat),
			new webpack.DefinePlugin({
				IS_SSR: false
			}),
		],

		stats: 'errors-only',

	};

	return config;
};
