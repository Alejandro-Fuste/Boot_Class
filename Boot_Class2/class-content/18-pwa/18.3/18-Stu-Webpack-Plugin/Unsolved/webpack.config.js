const WebpackPwaManifest = require('webpack-pwa-manifest');
const path = require('path');

const config = {
	// Update the entry point
	entry: './public/assets/js/app.js',
	output: {
		// Set the path and filename for the output bundle (hint: You will need to use "__dirname")
		path: __dirname + '/public/dist',
		filename: 'bundle.js'
	},
	mode: 'production',
	plugins: [
		new WebpackPwaManifest({
			filename: 'manifest.json',
			inject: false,
			name: 'My Progressive Web App',
			short_name: 'MyPWA',
			description: 'My awesome Progressive Web App!',
			background_color: '#ffffff',
			fingerprints: false,
			icons: [
				{
					src: path.resolve(__dirname, 'public/assets/images/icons/icon-512x512.png'),
					sizes: [ 72, 96, 128, 144, 152, 192, 256, 384, 512 ] // multiple sizes
				}
			]
		})
	]
};

module.exports = config;
