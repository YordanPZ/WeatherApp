module.exports = {
	"settings": {
		"react": {
			"version": "detect",
		},
	},
	"env": {
		"browser": true,
		"es2021": true,
		"node": true
	},
	"extends": [
		"eslint:recommended",
		"plugin:react/recommended"
	],
	"overrides": [
		{
			"env": {
				"node": true
			},
			"files": [
				".eslintrc.{js,cjs}"
			],
			"parserOptions": {
				"sourceType": "script"
			}
		}
	],
	"parserOptions": {
		"ecmaVersion": "latest",
		"sourceType": "module"
	},
	"plugins": [
		"react"
	],
	"rules": {
		"react/prop-types":"off",
		"react/react-in-jsx-scope": "off",
		"no-unused-vars": "warn",
		"indent": "off",
		"no-tabs":0,
		"linebreak-style": [
			"error",
			"windows"
		],
		"quotes": [
			"error",
			"double"
		],
		"semi": [
			"error",
			"never"
		]
	}
}
