module.exports = {
  root: true,
  env: { browser: true, es2020: true },
  extends: [
    'eslint:recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:react-hooks/recommended',
    'prettier',
  ],
  ignorePatterns: ['dist', '.eslintrc.cjs'],
  parser: '@typescript-eslint/parser',
  plugins: ['react-refresh', 'prefer-arrow'],
  rules: {
    'react-refresh/only-export-components': [
      'warn',
      { allowConstantExport: true },
    ],
    'no-var': 'error',
    'prefer-arrow/prefer-arrow-functions': [
      'error',
      {
        'disallowPrototype': true,
        'singleReturnOnly': false,
        'classPropertiesAllowed': false
      }
    ],
    'prefer-arrow-callback': [
      'error',
      { 'allowNamedFunctions': true }
    ],
    'func-style': [
      'error',
      'expression',
      { 'allowArrowFunctions': true }
    ]
    
  },
}
