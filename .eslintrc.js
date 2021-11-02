module.exports = {
	env: {
		browser: true,
		es2020: true,
	},
	extends: [
		'plugin:react/recommended',
		'airbnb',
		'plugin:@typescript-eslint/recommended',
		'plugin:prettier/recommended',
	],
	parser: '@typescript-eslint/parser',
	parserOptions: {
		ecmaFeatures: {
			jsx: true,
		},
		ecmaVersion: 11,
		sourceType: 'module',
	},
	plugins: [
		'react',
		'@typescript-eslint',
		'react-hooks',
		'prettier',
		'import-helpers',
	],
	rules: {
		camelcase: 'off',
		'prettier/prettier': 'error',
		'react/react-in-jsx-scope': 'off',
		'react-hooks/rules-of-hooks': 'error',
		'react-hooks/exhaustive-deps': 'warn',
		'react/jsx-filename-extension': [1, { extensions: ['.tsx'] }],
		'react/prop-types': 'off',
		'react/jsx-props-no-spreading': 'off',
		'import/prefer-default-export': 'off',
		'import/no-duplicates': 'off',
		'react/jsx-one-expression-per-line': 'off',
		'no-param-reassign': 'off',
		'no-unused-expressions': 'off',
		'@typescript-eslint/camelcase': 'off',
		'@typescript-eslint/no-explicit-any': 'off',
		'@typescript-eslint/explicit-module-boundary-types': 'off',
		'@typescript-eslint/explicit-function-return-type': 'off',
		'import/extensions': [
			'error',
			'ignorePackages',
			{
				ts: 'never',
				tsx: 'never',
			},
		],
		'import-helpers/order-imports': [
			'warn',
			{
				newlinesBetween: 'always',
				groups: ['/^react/', 'module', ['parent', 'sibling', 'index']],
				alphabetize: { order: 'asc', ignoreCase: true },
			},
		],
	},
	settings: {
		'import/resolver': {
			typescript: {},
		},
	},
};
