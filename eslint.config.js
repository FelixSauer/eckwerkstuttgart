import pluginJs from '@eslint/js'
import pluginAstro from 'eslint-plugin-astro'
import globals from 'globals'
import tseslint from 'typescript-eslint'

/** @type {import('eslint').Linter.Config[]} */
export default [
	{ files: ['**/*.{js,mjs,cjs,ts}'] },
	{ languageOptions: { globals: globals.browser } },
	pluginJs.configs.recommended,
	...tseslint.configs.recommended,
	...pluginAstro.configs['flat/recommended'],
	{
		files: ['src/env.d.ts'],
		rules: { '@typescript-eslint/triple-slash-reference': 'off' }
	}
]
