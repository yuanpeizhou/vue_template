module.exports = {
    devServer: {
      proxy: {
        '/api': {
          target: 'http://zhou.api_test.com',
          ws: true,
          pathRewrite: {
            '^/api': '/api'
          }
        }
      }
    }
  }