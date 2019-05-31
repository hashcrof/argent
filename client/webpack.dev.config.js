const path = require('path');

const HtmlWebpackPlugin = require("html-webpack-plugin");
const htmlWebpackPlugin = new HtmlWebpackPlugin({
    template: path.join(__dirname, "index.html")
});

module.exports = {
  entry: path.join(__dirname, "index.js") ,
  plugins: [
    htmlWebpackPlugin
  ],
  devServer: {
    proxy: [{
      context: ['/auth', '/api'],
      target: 'http://localhost:3005',
    }],
    port: 9000
  }
};
