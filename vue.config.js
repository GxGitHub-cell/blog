
module.exports = {
  assetsDir: 'static',
  parallel: false,
  publicPath: './',
  transpileDependencies: true,
  devServer:{
    proxy:{
      '/api':{
        target:'http://www.blogserver.aijiejie.cn:3000',
        pathRewrite: { "^/api": "" },
        changeOrigin: true
      }
    }
  }
}
