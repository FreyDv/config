// @ts-check

import eslint from '@eslint/js';
import tseslint, { parser } from 'typescript-eslint';
import prettierRecommended from 'eslint-plugin-prettier/recommended';
import spellcheck from "eslint-plugin-spellcheck";


export default tseslint.config(
    eslint.configs.recommended,
    tseslint.configs.strictTypeChecked,
    tseslint.configs.stylisticTypeChecked,
    tseslint.configs.recommendedTypeChecked,
    prettierRecommended,
  {
      ignores: ['**/node_modules/**', 'dist/**'],
  },
    parser,
  {
      files: ['**/*.ts'],
      languageOptions: {
          parserOptions: {
              project: true,
              tsconfigRootDir: import.meta.dirname,
          },
      },
    plugins: {
      spellcheck
    },
      rules: {
          '@typescript-eslint/restrict-template-expressions': 'off',
          '@typescript-eslint/no-unnecessary-condition': 'off',
      },
  }
);


