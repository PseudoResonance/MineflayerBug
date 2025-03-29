// @ts-check

import eslint from "@eslint/js";
import tseslint from "typescript-eslint";
import perfectionist from "eslint-plugin-perfectionist";
import eslintPluginPrettierRecommended from "eslint-plugin-prettier/recommended";
import globals from "globals";

const eslintConfig = [
	eslint.configs.recommended,
	...tseslint.configs.recommended,
	eslintPluginPrettierRecommended,
	{
		files: ["src/**/*.{js,jsx,mjs,cjs,ts,tsx}"],
		plugins: {
			tseslint,
			perfectionist,
		},
		languageOptions: {
			parserOptions: {
				project: true,
				tsconfigRootDir: import.meta.dirname,
			},
			globals: {
				...globals.serviceworker,
				...globals.browser,
			},
			parser: tseslint.parser,
		},
		rules: {
			"@typescript-eslint/no-unused-vars": [
				"error",
				{
					argsIgnorePattern: "^_",
					caughtErrorsIgnorePattern: "^_",
					destructuredArrayIgnorePattern: "^_",
					varsIgnorePattern: "^_",
				},
			],
			"perfectionist/sort-imports": ["warn"],
			"perfectionist/sort-interfaces": ["warn"],
			"perfectionist/sort-intersection-types": ["warn"],
			"perfectionist/sort-object-types": ["warn"],
			"perfectionist/sort-objects": ["warn"],
			"perfectionist/sort-union-types": ["warn"],
			"prefer-template": ["error"],
		},
	},
];

export default eslintConfig;
