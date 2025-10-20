import unicorn from 'eslint-plugin-unicorn';

import edge from 'eslint-config-mahir/edge';
import next from 'eslint-config-mahir/next';
import react from 'eslint-config-mahir/react';
import common from 'eslint-config-mahir/react';
import node from 'eslint-config-mahir/node';
import typescript from 'eslint-config-mahir/typescript';

/**
 * @type {import('@typescript-eslint/utils').TSESLint.FlatConfig.ConfigArray}
 */
export default [
	...common,
	...node,
	...typescript,
	...react,
	...next,
	...edge,
	{
		plugins: {
			unicorn,
		},
	},
	{
		rules: {
			'no-console': [
				'error',
				{
					allow: ['error', 'info', 'warn'],
				},
			],
		},
	},
	{
		settings: {
			tailwindcss: {
				callees: ['classNames', 'clsx', 'cn'],
			},
		},
	},
	{
		ignores: ['**/.next/', '**/dist/', 'next-env.d.ts', 'next-env-d.d.ts', 'next.config.mjs', 'README.md'],
	},
];
