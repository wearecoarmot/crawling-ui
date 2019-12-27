module.exports = {
  "extends": [
    "react-app",
    "prettier"
  ],
  "env": {
    "browser": true,
    "jest": true
  },
  "rules": {
    "quotes": ["error", "single"],
    "semi": ["error", "always"],
    "comma-dangle": ["error", {
      "objects": "always"
    }],
    "react/prefer-stateless-function": 0,
    "react/jsx-filename-extension": 0,
    "react/jsx-one-expression-per-line": 0
  }
};
