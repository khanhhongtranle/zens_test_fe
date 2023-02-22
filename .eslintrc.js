module.exports = {
  'env': {
    'browser': true,
    'es2021': true
  },
  'extends': [
    'eslint:recommended',
    'plugin:react/recommended'
  ],
  'parserOptions': {
    'ecmaFeatures': {
      'jsx': true
    },
    'ecmaVersion': 'latest',
    'sourceType': 'module'
  },
  'plugins': [
    'react'
  ],
  'rules': {
    'quotes': [2, 'single', { avoidEscape: true }],
    'indent': ['error', 2],
    'object-curly-spacing': [2, 'always'],
    'react/react-in-jsx-scope': 'off',
    'require-jsdoc': 'off',
    'no-unused-vars': [1],
    'max-len': 0,
    'linebreak-style': 0,
    'camelcase': 0,
  }
}
