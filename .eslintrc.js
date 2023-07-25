module.exports = {
  env: {
    es2021: true,
    jest: true,
    node: true,
  },
  extends: [
    'plugin:@typescript-eslint/recommended',
    'plugin:react/recommended',
    'eslint:recommended',
    'prettier',
  ],
  globals: {
    JSX: 'readonly',
  },

  overrides: [
    {
      files: ['*.js'],
    },
  ],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
  },
  plugins: ['react', '@typescript-eslint', 'react-hooks', 'prettier'],
  rules: {
    '@typescript-eslint/ban-ts-ignore': 'off',
    '@typescript-eslint/consistent-type-imports': [1],
    '@typescript-eslint/no-empty-function': 'off',
    '@typescript-eslint/no-explicit-any': 'error',
    '@typescript-eslint/no-inferrable-types': 'off',
    '@typescript-eslint/no-shadow': [1],
    '@typescript-eslint/no-unused-vars': [
      'error',
      {
        argsIgnorePattern: '^_',
      },
    ],
    '@typescript-eslint/no-use-before-define': [1],
    'no-restricted-imports': [
      'error',
      {
        paths: [
          {
            importNames: ['View'],
            message: 'Please use View from components/base/View instead.',
            name: 'react-native',
          },
          {
            importNames: ['Pressable'],
            message: 'Please use Pressable from components/base/Pressable instead.',
            name: 'react-native',
          },
          {
            importNames: ['Text'],
            message: 'Please use Text from components/base/Text instead.',
            name: 'react-native',
          },
        ],
      },
    ],
    'react-hooks/exhaustive-deps': 'warn',
    'react-hooks/rules-of-hooks': 'error',
    'react/jsx-props-no-spreading': 'off',
    'react/require-default-props': 'off',
    'sort-keys': 'error',
  },
  settings: {
    'import/resolver': {
      'babel-module': {
        extensions: ['.ts', '.tsx', '.js', '.jsx', '.svg'],
      },
      typescript: {},
    },
    react: {
      version: 'detect',
    },
  },
}
