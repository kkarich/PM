var webpack = require('webpack');

var HtmlWebpackPlugin = require('html-webpack-plugin')
var HTMLWebpackPluginConfig = new HtmlWebpackPlugin({
  template: __dirname + '/app/index.html',
  filename: 'index.html',
  inject: 'body'
});

module.exports = {
	entry: './app/index.js',
  output: {
    path: __dirname + '/dist',
    filename: "index_bundle.js"
  },
	resolve: {
		extensions: ['', '.js','.json', '.scss', '.css']
	},
	plugins: [
		new webpack.optimize.UglifyJsPlugin({
	    compress: {
	      warnings: false
	    }
	  })
	],
	module: {
		loaders: [
			{
				test: /\.js/,
				exclude: /node_modules/,
				loaders: ['babel']
			},
			{
			 test: /\.scss$/,
			 loader: 'style!css!sass?outputStyle=compressed'
		  },
			{
			 test: /\.json$/,
			 loader: 'json-loader'
		  }
		]
	},
	sassLoader: {
		includePaths: [
			'./node_modules',
			// this is required only for NPM < 3.
	 	  // Dependencies are flat in NPM 3+ so pointing to
			// the internal grommet/node_modules folder is not needed
			'./node_modules/grommet/node_modules'
		]
	},
  plugins: [HTMLWebpackPluginConfig]
};