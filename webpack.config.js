const path = require('path')
module.exports = {
  mode:'development',
  entry: path.join(__dirname,'./src/main.js'), //入口
  output:{ //出口
    path:path.join(__dirname,'./dist'),
    filename:'bundle.js'
  },
  module:{
    rules:[
      {test:/\.css$/,use:['style-loader','css-loader']},
      {test:/\.less$/,use:['less-loader','style-loader','css-loader']},
      {test:/\.(png|jpg|gif|bmp|jpeg)$/,use:['url-loader?limit=510&name=[hash]']},
      {
        test: /\.m?js$/,
        exclude: /(node_modules|bower_components)/,
        use: {
          loader: 'babel-loader'
        }
      }
    ]
  }
}
