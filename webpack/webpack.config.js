const path = require("path");
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ExtractTextPlugin = require("extract-text-webpack-plugin");
module.exports = {
  entry:{//入口
    index:"./src/index.js"
  },
  output:{//出口
    path:path.resolve(__dirname,"dist"),
    filename:'[name].js'
  },
  module:{
    rules:[
       {
        test:/\.css$/,
        use: ExtractTextPlugin.extract({
          fallback: "style-loader",
          use: "css-loader",
          publicPath:"../"
        })
      },{
        test:/\.(png|jpg|gif)/,
        use:[{
            loader:"url-loader",
            options:{
              limit:300,
              outputPath:"image/"
            }
        } ]
      },{
        test:/\.html$/,
        loader:'html-withimg-loader'
      },{
        test:/\.scss/,
        use:ExtractTextPlugin.extract({
          fallback: "style-loader",
          use: ["css-loader","sass-loader"]     
        })
      }
    ]
  },
  plugins:[//配置
    new ExtractTextPlugin("css/main.css"),    
    new HtmlWebpackPlugin({  
      minify:{
        removeAttributeQuotes:true
      },
      hash:true,
      filename: 'index.html',
      template: 'src/index.html'
    })
  ],
  devServer:{
    contentBase:path.resolve(__dirname,"dist"),//获取当前路径，指向dist
    host:"localhost",
    compress:true,
    port:"8081"
  }
}