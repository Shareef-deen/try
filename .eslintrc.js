module.exports = {
	env: {
		node: true,
		es2017: true,
	},
	extends: ['eslint:recommended', 'plugin:@typescript-eslint/recommended', 'prettier'],
	overrides: [],
	parser: '@typescript-eslint/parser',
	parserOptions: {
		ecmaVersion: 'latest',
		sourceType: 'module',
	},
	plugins: ['@typescript-eslint'],
	rules: {
		semi: ['error', 'always'],
		'max-len': ['error', { code: 100 }],
		'no-unused-vars': 'off',
		'@typescript-eslint/no-unused-vars': ['error'],
		'unused-imports/no-unused-imports': ['off', 'error'],
		'no-underscore-dangle': ['error'],
		'object-curly-spacing': ['error', 'always'],
	},
	root: true,
};
