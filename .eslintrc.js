module.exports = {
    "env": {
        "es2017": true,
        "node": true
    },
    "extends": [
        "eslint:recommended",
        "plugin:@typescript-eslint/recommended",
        "prettier"
    ],
    "overrides": [
    ],
    "parser": "@typescript-eslint/parser",
    "parserOptions": {
        "ecmaVersion": "latest",
        "sourceType": "module"
    },
    "plugins": [
        "@typescript-eslint"
    ],
    "rules": {
        "indent": [ "error", 2 ],
        "linebreak-style": [
            "error",
            "unix"
        ],
        "quotes": [
            "error",
            "single"
        ],
        "semi": [
            "error",
            "always"
        ],
		"no-unused-vars": "off",
		"@typescript-eslint/no-unused-vars": ["error"],
        "max-len": ["error", { code: 100 }],
        "object-curly-spacing": ["error", "always"],

    },
    root: true,
}
