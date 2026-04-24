import js from '@eslint/js'
import globals from 'globals'
import react from 'eslint-plugin-react'
import reactHooks from 'eslint-plugin-react-hooks'
import reactRefresh from 'eslint-plugin-react-refresh'
import prettierConfig from 'eslint-config-prettier'

export default [
  { ignores: ['dist', 'node_modules'] },

  js.configs.recommended,

  {
    files: ['**/*.{js,jsx}'],

    languageOptions: {
      ecmaVersion: 'latest',
      sourceType: 'module',
      globals: {
        ...globals.browser
      },
      parserOptions: {
        ecmaFeatures: {
          jsx: true
        }
      }
    },

    settings: {
      react: { version: 'detect' }
    },

    plugins: {
      react,
      'react-hooks': reactHooks,
      'react-refresh': reactRefresh
    },

    rules: {
      // React hooks (обязательно)
      'react-hooks/rules-of-hooks': 'error',
      'react-hooks/exhaustive-deps': 'warn',
      'react/jsx-uses-vars': 'error',

      // React runtime
      'react/react-in-jsx-scope': 'off',

      // Vite
      'react-refresh/only-export-components': 'warn',

      // JSX security
      'react/jsx-no-target-blank': 'error',

      // style
      semi: ['error', 'always'],
      quotes: ['error', 'single'],
      indent: ['error', 2],

      // clean code
      'no-console': 'warn',
      'no-debugger': 'error',
      'react/jsx-fragments': ['error', 'syntax'],
      'react/prop-types': [0],

      // react best practices
      'react/jsx-boolean-value': ['error', 'never']
    }
  },

  prettierConfig
]