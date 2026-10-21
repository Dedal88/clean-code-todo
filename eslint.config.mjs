import js from '@eslint/js';
import globals from 'globals';
import prettier from 'eslint-config-prettier';
import { defineConfig, globalIgnores } from 'eslint/config';

export default defineConfig([
  globalIgnores(['node_modules/**', 'dist/**', 'build/**']),

  {
    files: ['**/*.{js,mjs,cjs}'],
    plugins: { js },
    extends: ['js/recommended'],
    languageOptions: {
      globals: globals.browser,
    },
    rules: {
      'no-var': 'error',
      'prefer-const': 'error',
      eqeqeq: 'error',
      'no-use-before-define': ['error', { functions: false }],
      'no-loop-func': 'error',
      'no-console': 'warn',
      'no-alert': 'warn',
      'no-debugger': 'warn',
    },
  },

  {
    files: ['**/*.js'],
    languageOptions: {
      sourceType: 'script',
    },
  },
  prettier,
]);
