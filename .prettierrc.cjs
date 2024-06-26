/** @type {import("prettier").Config} */
module.exports = {
	arrowParens: "always",
	bracketSpacing: true,
	singleAttributePerLine: true,
	semi: true,
	singleQuote: false,
	tabWidth: 2,
	useTabs: true,
	parser: "typescript",
	plugins: [require.resolve("@trivago/prettier-plugin-sort-imports")],
	importOrder: ["<THIRD_PARTY_MODULES>", "^[./]", "^@/types/(.*)$"],
	importOrderParserPlugins: ["typescript", "decorators-legacy"],
	importOrderSeparation: true,
	importOrderSortSpecifiers: true,
	importOrderCaseInsensitive: true,
	overrides: [
		{
			files: "*.json",
			options: { parser: "json" },
		},
	],
};
