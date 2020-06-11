/* eslint-disable @typescript-eslint/no-var-requires */
const webpackMerge = require('webpack-merge');
const singleSpaDefaults = require('webpack-config-single-spa-ts');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const path = require('path');
const { readFileSync } = require('fs');

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
		devServer: {
			historyApiFallback: true,
			disableHostCheck: true,
			headers: {
				'Access-Control-Allow-Origin': '*',
			},
			https: {
				cert: readFileSync(path.join(__dirname, '../cert/cert.pem')),
				key: readFileSync(path.join(__dirname, '../cert/key.pem')),
			},
		},
		externals: ['vue', 'vue-router', /^@mk\/.+$/],
	});
};
