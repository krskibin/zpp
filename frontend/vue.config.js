const backendPort = 8000
const backendUrl = 'http://backend:' + backendPort + '/'
module.exports = {
  devServer: {
    proxy: {
      '/api': {
        target: backendUrl,
        changeOrigin: true
      },
      '/static': {
        target: backendUrl,
        changeOrigin: true
      }
    }
  }
}
