import jsRules from "@eslint/js";
import eslintConfigPrettier from "eslint-config-prettier";
import prettierPlugin from "eslint-plugin-prettier";
import globals from "globals";
import tseslint from "typescript-eslint";

/** @type {import('eslint').Linter.FlatConfig[]} */
export default [
	...tseslint.configs.recommended,
	{
		plugins: {
			prettier: prettierPlugin,
		},
		rules: {
			...jsRules.configs.recommended.rules,
			...prettierPlugin.configs.recommended.rules,
			...eslintConfigPrettier.rules,
		},
		ignores: [
			"**/*.log",
			"**/.DS_Store",
			".vscode/settings.json",
			".history",
			".yarn",
			"bazel-*",
			"bazel-bin",
			"bazel-out",
			"bazel-qwik",
			"bazel-testlogs",
			"dist",
			"dist-dev",
			"etc",
			"node_modules/**",
			"tsc-out",
			"tsdoc-metadata.json",
			"target",
			"output",
			".rollup.cache",
			"tsconfig.tsbuildinfo",
			"vite.config.ts",
			"*.spec.tsx",
			".netlify",
			"pnpm-lock.yaml",
			"package-lock.json",
			".prettierrc.cjs",
			".dependency-cruiser.js",
		],
	},
	// js files
	{
		files: ["**/*.{mjs,cjs,js}"],
		languageOptions: {
			globals: {
				...globals.es2021,
			},
			// ecmascriptVersion, and sourceType, default is right
		},
	},
];
