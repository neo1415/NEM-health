module.exports = {
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaVersion: 2020,
    sourceType: 'module',
    ecmaFeatures: {
      jsx: true,
    },
  },
  extends: [
    '@trbl',
    'plugin:@typescript-eslint/recommended',
  ],
  settings: {
    'import/resolver': {
      node: {
        extensions: ['.js', '.jsx', '.ts', '.tsx'],
      },
    },
  },
  rules: {
    'react/jsx-filename-extension': [2, { extensions: ['.js', '.jsx', '.ts', '.tsx'] }],
    'import/prefer-default-export': 'off',
    'react/prop-types': 'off',
    'react/no-unused-prop-types': 'off',
    'react/require-default-props': 'off',
    'no-underscore-dangle': 'off',
    "react/jsx-closing-tag-location": "off",
    "react/jsx-indent": "off",
    "no-trailing-spaces": "off",
    "object-curly-spacing": "off",
    "key-spacing": "off",
    "comma-spacing": "off",
    "react/jsx-tag-spacing": "off",
    "react/self-closing-comp": "off",
    "comma-dangle": "off",
    "semi": "off",
    "@typescript-eslint/no-explicit-any": "off",
    "arrow-body-style": "off",
    "react/jsx-max-props-per-line": "off",
    "quotes": ["error", "single"],
    "import/no-extraneous-dependencies": "off",
    "arrow-parens": "off",
    "padded-blocks": "off",
    "@typescript-eslint/ban-types": "off",
    "consistent-return": "off",
    "@typescript-eslint/explicit-module-boundary-types": "off",
    "array-callback-return": "off",
    "import/order": "off",
    "@typescript-eslint/no-unused-vars": "off",
    "operator-linebreak": "off",
    "linebreak-style": "off",
    "indent": "off",
    'import/extensions': [
      'error',
      'ignorePackages',
      {
        js: 'never',
        jsx: 'never',
        ts: 'never',
        tsx: 'never',
      },
    ],
  },
  overrides: [
    {
      files: ['*.js'],
      rules: {
        '@typescript-eslint/no-var-requires': 'off',
      },
    },
  ],
};
