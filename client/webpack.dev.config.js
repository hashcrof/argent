module.exports = {
  devServer: {
    proxy: [{
      context: ['/auth', '/api'],
      target: 'http://localhost:3005',
    }]
  }
};
