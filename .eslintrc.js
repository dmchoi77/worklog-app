module.exports = {
  root: true,
  extends: '@react-native',
  plugins: ['prettier'],
  rules: {
    'react/react-in-jsx-scope': 'off',
    'react-native/no-inline-styles': 0,
    'import/no-unresolved': 0,
    '@typescript-eslint/no-unused-vars': 'warn',
  },
};
