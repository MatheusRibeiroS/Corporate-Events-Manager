import globals from "globals";
import js from "@eslint/js";
import pluginJs from "@eslint/js";
import tseslint from "typescript-eslint";


export default [
  js.configs.recommended,
  {
    rules: {
      "no-unused-vars": "error",
      "no-undef": "error"
    },
    ignores: ["./node_modules/*", "./dist/*"],
    files: ["**/*.{js,mjs,cjs,ts}"],
    languageOptions: { globals: globals.browser }
  },
  pluginJs.configs.recommended,
  ...tseslint.configs.recommended,
];