const path = require("path");
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPLugin = require('mini-css-extract-plugin');

const commonCssHandle = [
  // MiniCssExtractPLugin.loader,
  'style-loader',
  'css-loader',
  {
    loader: 'postcss-loader',
    options: {
      postcssOptions: {                
        plugins: [
          [
            'postcss-preset-env',
            {
              browsers:'last 2 versions'
            }
          ]
        ]
      }
    }
  }
];

module.exports = {
  entry: './src/index.ts',
  output: {
    filename: 'js/bundle.js',
    path: path.resolve(__dirname, 'build'),
    // environment: {
    //   arrowFunction: false
    // }
  },
  module: {
    rules: [
      {
        test: /\.ts$/,
        use: [
          {
            loader: 'babel-loader',
            options: {
              presets: [
                [
                  '@babel/preset-env',
                  {
                    corejs: { version: 3 },
                    targets: {
                      chrome: '60',
                      firefox: '60',
                      ie: '11'
                    },
                    useBuiltIns: 'usage'
                  }
                ]
              ]
            }
          },
          'ts-loader'
        ],
        exclude: /node_modules/
      },
      {
        test: /\.css$/,
        use: [
          ...commonCssHandle
        ]
      },
      {
        test: /\.less$/,
        use: [
          ...commonCssHandle,
          'less-loader'
        ]
      }
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './src/index.html',
      minify: {
        removeComments: true,
        collapseWhitespace: true
      }
    }),
    new MiniCssExtractPLugin({
      filename: 'css/bundle.css'
    })
  ],
  mode: "production",
  devServer: {
    contentBase: path.resolve(__dirname, 'build'),
    compress: true,
    post: 3000,
    open: true,
    hot: true
  }
}