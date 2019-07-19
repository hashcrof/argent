module.exports = {
  "presets": ["@babel/preset-env"],
  "env": {
    "dev": {
      "presets": ["@babel/preset-env"],
      "plugins":[
        "@babel/plugin-syntax-dynamic-import",
        "@babel/plugin-syntax-object-rest-spread",
        [
          "@babel/plugin-syntax-class-properties",
          {
            "spec": true
          }
        ]
      ]
    },
    "production": {
      "presets": ["@babel/preset-env"],
      "plugins": [
        "@babel/plugin-syntax-dynamic-import",
        "@babel/plugin-syntax-object-rest-spread",
        [
          "@babel/plugin-syntax-class-properties",
          {
            "spec": true
          }
        ]
      ]
    }
  }
}
