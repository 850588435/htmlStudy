const path=require('path')

module.exports={
  entry:'./src/main.js',  //打包的入口
  output:{
    path:path.resolve(__dirname,'dist'),  //要填写绝对路径，所以需要动态获取路径
    filename:'bundle.js'
  },  //打包的出口
}