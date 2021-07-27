module.exports = {
  devServer: {
    proxy: {
      '/api': {
        // 目标服务器地址
        target: 'http://39.98.123.211',
        // 可以跨域
        changeOrigin: true,
        // 路径重写
        // 注意：真实接口需要/api前缀
        // pathRewrite: {
        //   '^/api': ''
        // }
      }
    }
  }
}