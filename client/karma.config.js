module.exports = function(config) {
  config.set({
    basePath: '',
    frameworks: ['mocha'],
    files: [
      "/**/(/__tests__/.*|.(test|spec)).(tsx?|jsx?)$",
      "/**/!(node_modules)/*.(test|spec).js",
      "/**/*.(test|spec).(tsx?|jsx?)",
      "/**/!(node_modules)/**/*.(test|spec).{js,ts}",
      "{,!(node_modules)/**}/*.(test|spec).{js,ts}",
    ],
    exclude: [
    ],
    preprocessors: {},
    reporters: ['dots'],
    port: 9876,
    colors: true,
    logLevel: config.LOG_INFO,
    autoWatch: true,
    singleRun: true
  });
};
