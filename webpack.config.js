var webpack = require( 'webpack' ),
    path = require( 'path' );

module.exports = {
	entry: './entry.js',
	output: {
		filename: 'bundle.js',
		pathname: path.resolve(__dirname)
	},
	module: {
		loaders: [
			{
				test: /\.js$/,
				loader: 'babel',
				query: {
					presets: ['es2015','react']
				}
			},
			{
				test: /\.css$/,
				loader: 'style!css'
			}
		]
	}
};

		
