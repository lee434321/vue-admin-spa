const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: true,
  lintOnSave: false,   //不提示命名规范错误
  runtimeCompiler: true, //运行时编译选项，这个一定要打开，调试要用。
  devServer: {
    proxy: {
      '/api': {   //所有以/api开头的请求都代理到目标服务器上
        target: 'http://172.21.114.188/eAgentsAdmin/',  //目标服务器地址 http://172.21.112.74:91
        changeOrigin: true,  //是否跨域       
        pathRewrite: { '^/api': '' }  //重写路径，去掉/api前缀
      }
    }
  }
})
