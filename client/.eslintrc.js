module.exports = {
  "extends": [
    "react-app",
    "plugin:jsx-a11y/recommended",
    "prettier",
    "prettier/react",
    "prettier/@typescript-eslint",
  ],
  "plugins": [
    "prettier"
  ],
  "env": {
    "browser": true,
    "jest": true
  },
  "ignorePatterns": [
    "scripts/*",
    "config/*",
    "serviceWorker.*",
    "setupProxy.*",
    "**/*.d.ts",
    "**/*.test.*"
  ],
  "rules": {
    "prettier/prettier": ["warn"],
    "quotes": ["error", "single"],
    "semi": ["error", "always"],
    "comma-dangle": ["error", "always-multiline"],
    "react/prefer-stateless-function": 0,
    "react/jsx-filename-extension": 0,
    "react/jsx-one-expression-per-line": 0
  }
};
