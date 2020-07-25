const path=require('path')

module.exports={
  entry:'./src/main.js',  //打包的入口
  output:{  //打包的出口
    path:path.resolve(__dirname,'dist'),  //要填写绝对路径，所以需要动态获取路径
    filename:'bundle.js',
    publicPath:'dist/'
  },
  module: {
    rules: [
      {
        test: /\.css$/,
        // css-loader只负责将css文件进行加载
        // style-loader负责将样式添加到DOM中
        // 使用多个loader时，是从右向左（否则会报错）
        use: [ 'style-loader','css-loader' ]
      },
      {
        test: /\.(png|jpg|gif|jpeg)$/,
        use: [
          {
            loader: 'url-loader',
            options: {
              // 当加载的图片大小小于limit时，会将图片编译成base64字符串形式
              // 当加载的图片大小大于limit时，需要使用file-loader模块进行加载。并进行打包
              limit: 200000,
              name:'img/[name].[hash:8].[ext]',
            },

          }
        ]
      },
      {
        test: /\.js$/,
        exclude: /(node_modules|bower_components)/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['es2015']
          }
        }
      }
    ]
  }
}