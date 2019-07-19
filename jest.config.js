module.exports = {
  "moduleNameMapper": {
    "\\.(css|scss)$": "identity-obj-proxy"
  },
  "roots": ["<rootDir>/server", "<rootDir>/client"],
  "testMatch": ["**/tests/**/*.js?(x)", "**/?(*.)(spec|test).js?(x)"],
  "transformIgnorePatterns": [
    "<rootDir>/node_modules/(?!(@open-wc|lit-html))"
  ],
  "transform": {
    "^.+\\.jsx$": "babel-jest",
    "^.+\\.js$": "babel-jest"
  },
  "setupFiles": [
    "./setupTests.js"
  ]
};
