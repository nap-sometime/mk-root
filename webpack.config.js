/* eslint-disable @typescript-eslint/no-var-requires */
const webpackMerge = require('webpack-merge');
const singleSpaDefaults = require('webpack-config-single-spa-ts');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const path = require('path');
const { readFileSync } = require('fs');

// helper
const isProd = ['production', 'runtest'].some((v) => process.env.NODE_ENV === v);
const loadFile = (path = '') => readFileSync(path);

// config webpack dev server
const devServer = isProd
	? undefined
	: {
			headers: {
				'Access-Control-Allow-Origin': '*',
			},
			historyApiFallback: true,
			disableHostCheck: true,
			sockPort: 8080,
			sockHost: 'localhost',
			port: 8080,
			https: {
				cert: loadFile(path.join(__dirname, '../cert/cert.pem')),
				key: loadFile(path.join(__dirname, '../cert/key.pem')),
			},
	  };

module.exports = (webpackConfigEnv) => {
	const defaultConfig = singleSpaDefaults({
		orgName: 'mk',
		projectName: 'root-config',
		webpackConfigEnv,
	});

	return webpackMerge.smart(defaultConfig, {
		entry: path.join(__dirname, 'src/root_config'),
		output: {
			filename: 'root-config.js',
		},
		devtool: 'source-map',
		module: {
			rules: [{ parser: { system: false } }],
		},
		plugins: [
			new HtmlWebpackPlugin({
				inject: false,
				template: 'src/index.local.ejs',
				templateParameters: {
					isLocal: webpackConfigEnv && webpackConfigEnv.isLocal === 'true',
				},
			}),
			new CleanWebpackPlugin(),
		],
		externals: ['vue', 'vue-router', /^@mk\/.+$/],
		devServer,
	});
};
