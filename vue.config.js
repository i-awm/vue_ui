const path = require('path')
module.exports = {
  css:{
    loaderOptions:{
      sass: {
        prependData: `@import "@/assets/style/_variable.scss";`
      }
    }
  },
  lintOnSave: false,
  // css: {
  //   loaderOption: {
      // sass: {
      //   additionalData: `@import "@/assets/style/variables.scss";`
      // }
  //   }
  // },
  chainWebpack: config => {
    // svg rule loader
    const svgRule = config.module.rule('svg') // 找到svg-loader
    svgRule.uses.clear() // 清除已有的loader, 如果不这样做会添加在此loader之后
    svgRule.exclude.add(/node_modules/) // 正则匹配排除node_modules目录
    svgRule.include.add(path.resolve(__dirname,'./src/assets/icons/svg'))
    svgRule // 添加svg新的loader处理
      .test(/\.svg$/)
      
      .use('svg-sprite-loader')
      .loader('svg-sprite-loader')
      .options({
        symbolId: 'icon-[name]',
      })

    // 修改images loader 添加svg处理
    const imagesRule = config.module.rule('images')
    imagesRule.exclude.add(path.resolve(__dirname,'./src/assets/icons/svg'))
    config.module
      .rule('images')
      .test(/\.(png|jpe?g|gif|svg)(\?.*)?$/)
  }
}


// output.js
