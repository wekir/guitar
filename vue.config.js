// const Components = require('unplugin-vue-components/webpack')
// const { VarletUIResolver } = require('unplugin-vue-components/resolvers')

// module.exports = {
//   configureWebpack: {
//     plugins: [
//       Components({
//         resolvers: [VarletUIResolver()]
//       })
//     ]
//   },
//   outputDir: 'dist',   //build输出目录
//     assetsDir: 'assets', //静态资源目录（js, css, img）
//     lintOnSave: false, //是否开启eslint
//相当于webpack-dev-server,  对本地服务器进行配置
// devServer: {
//   // open: false, //是否自动弹出浏览器页面
//   //       host: "localhost", 
//   //       port: '8080',
//   //       https: false,   //是否使用https协议
//   //       hotOnly: false, //是否开启热更新
//   // proxy: {  //配置跨域
//   //   '/api': {
//   //     target: 'http://localhost:3000',  //这里后台的地址模拟的;应该填写你们真实的后台接口
//   //     changeOrigin: true,  //允许跨域
//   //   },
//   // }
// },
// }

// vue.config.js
const Components = require('unplugin-vue-components/webpack')
const { VarletUIResolver } = require('unplugin-vue-components/resolvers')

module.exports = {
  configureWebpack: {
    plugins: [
      Components({
        resolvers: [VarletUIResolver()]
      })
    ]
  }
}