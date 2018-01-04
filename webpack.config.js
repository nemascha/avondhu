const ExtractTextPlugin = require('extract-text-webpack-plugin');

const path = require('path');

module.exports = {
	entry: ['./src/app.js', './src/scss/base.scss'],
	output: {
		path: path.resolve(__dirname, 'dist'),
		filename: 'bundle.js'
	},
	module: {
		rules: [{
			test: /\.scss$/,
			use: [
				'style-loader',
                'css-loader',
                'sass-loader',
			]
		}]
	},
	plugins: [
        new ExtractTextPlugin({ // define where to save the file
            filename: 'dist/main.bundle.css',
            allChunks: true,
        }),
	]
};