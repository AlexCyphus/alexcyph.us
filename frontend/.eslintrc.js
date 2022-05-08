module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  settings: {
    'import/resolver': {
      node: {
        extensions: ['.js', '.jsx', '.ts', '.tsx'],
      },
    },
  },
  extends: [
    'plugin:react/recommended',
    'plugin:json/recommended',
    'airbnb',
  ],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 12,
    sourceType: 'module',
  },
  plugins: ['react', '@typescript-eslint', 'react-hooks'],
  ignorePatterns: ['package.json', 'env.json'],
  rules: {
    'max-len': 1,
    'jsx-a11y/label-has-associated-control': [2, {
      controlComponents: ['TextInput'],
    }],
    camelcase: 0,
    'import/extensions': ['error', 'ignorePackages', {
      js: 'never',
      jsx: 'never',
      ts: 'never',
      tsx: 'never',
    }],
    'react/jsx-filename-extension': 0,
    'react-hooks/rules-of-hooks': 'error',
    'react/prop-types': 0,
    'react/require-default-props': 0,
    semi: ['error', 'never'],
    'jsx-a11y/click-events-have-key-events': 0,
    'react/react-in-jsx-scope': 'off',
    'no-unused-vars': 'off',
    'no-undef': 'off',
    'react/jsx-props-no-spreading': [1, {
      html: 'ignore',
      custom: 'enforce',
      exceptions: [''],
    }],
    '@typescript-eslint/no-unused-vars': 'warn',
    'object-curly-newline': 'warn',
    'no-restricted-imports': ['warn', {
      paths: [{
        name: 'react',
        importNames: ['default'],
        message: 'Import not necessary',
      }],
    }],
  },
  overrides: [{
    files: ['*.jsx', '*.js'],
    rules: {
      'no-undef': 'error',
    },
  }, {
    files: ['cypress.json'],
    rules: {
      quotes: 0,
      'no-unused-expressions': 0,
      'quote-props': 0,
      'comma-dangle': 0,
    },
  }],
}
