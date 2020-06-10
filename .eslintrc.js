module.exports = {
	parser: '@typescript-eslint/parser',
	env: {
		node: true,
		browser: true,
	},
	parserOptions: {
		ecmaVersion: 2020,
		sourceType: 'module',
	},
	extends: [
		'important-stuff',
		'plugin:@typescript-eslint/recommended',
		'prettier/@typescript-eslint',
		'plugin:prettier/recommended',
	],
	rules: {
		'@typescript-eslint/explicit-function-return-type': 'off',
	},
};
