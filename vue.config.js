const path = require('path')

module.exports = {
  configureWebpack: {
    resolve: {
      alias: { // 配置路径别名
        css: path.join(__dirname, 'src/assets/css')
      }
    }
  },

  lintOnSave: false
}
