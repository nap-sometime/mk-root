/* eslint-disable @typescript-eslint/no-var-requires */
const webpackMerge = require('webpack-merge');
const singleSpaDefaults = require('webpack-config-single-spa-ts');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
// const path = require('path');

module.exports = (webpackConfigEnv) => {
	const defaultConfig = singleSpaDefaults({
		orgName: 'mk',
		projectName: 'root-config',
		webpackConfigEnv,
	});

	return webpackMerge.smart(defaultConfig, {
		output: {
			filename: 'root-config.js',
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
		},
	});
};
