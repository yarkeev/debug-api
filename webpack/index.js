module.exports = function (env, options) {
	return [
		require('./server')(env, options),
		require('./client')(env, options),
	];
};
