const path = require('path');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  entry: './src/entry/index.ts',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle.js',
    //告诉webpack不使用箭头函数
    environment: {
      arrowFunction: false
    }
  },
  module: {
    rules: [
      {
        test: /\.ts$/,
        use: [
          {
            loader: 'babel-loader',
            //配置babel
            options: {
              //配置预定义环境
              presets: [
                [
                  '@babel/preset-env',
                  //配置信息
                  {
                    targets: {
                      chrome: '60',
                      ie: '11'
                    },
                    //指定core-js版本
                    corejs: '3',
                    //使用core-js的usage：表示按需加载
                    useBuiltIns: 'usage'
                  }
                ]
              ]
            }
          },
          'ts-loader'
        ],
        exclude: /node_modules/
      }
    ]
  },
  plugins: [
    //先将已输出的bundle删除后再重新打包输出
    new CleanWebpackPlugin(),
    new HtmlWebpackPlugin({
      template: './src/index.html'
    })
  ],
  //用来设置引用模块
  resolve: {
    extensions:['.ts','.js']
  },
  mode: 'production'
}