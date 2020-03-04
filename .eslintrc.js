module.exports = {
  env: {
    commonjs: true,
    es6: true,
    node: true
  },
  extends: 'eslint:recommended',
  globals: {
    Atomics: 'readonly',
    SharedArrayBuffer: 'readonly'
  },
  parserOptions: {
    ecmaVersion: 2018
  },
  rules: {
    indent: ['error', 'tab'],
    'linebreak-style': [0, 'error', 'windows'],
    quotes: ['error', 'single'],
    semi: ['error', 'never'],
    "no-unused-vars": ["warn"]
  }
}
