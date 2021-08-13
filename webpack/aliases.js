const path = require('path');

module.exports = {
	'@interfaces': path.resolve(__dirname, '../src/interfaces/'),
	'@fixtures': path.resolve(__dirname, '../src/fixtures/'),
	'@constants': path.resolve(__dirname, '../src/constants/'),
	'@enums': path.resolve(__dirname, '../src/enums/'),
	'@utils': path.resolve(__dirname, '../src/util/'),
	'@decorators': path.resolve(__dirname, '../src/decorators/'),

	'@containers': path.resolve(__dirname, '../src/settings/containers/'),
	'@components': path.resolve(__dirname, '../src/settings/components/'),
	'@ui': path.resolve(__dirname, '../src/settings/components/ui'),
	'@icons': path.resolve(__dirname, '../src/settings/assets/icons'),

	'styles': path.resolve(__dirname, '../src/settings/styles'),
};
