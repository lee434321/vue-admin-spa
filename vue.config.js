const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: true,
  lintOnSave:false,  //不提示命名规范错误
  runtimeCompiler: true //运行时编译选项，这个一定要打开，调试要用。
})
