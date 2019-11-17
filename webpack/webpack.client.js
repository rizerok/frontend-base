/* eslint @typescript-eslint/no-var-requires: "off" */
const { resolve } = require('path');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const webpack = require('webpack');

const alias = require('./alias');
const { jsRules } = require('./js-rules');

const config = {
  entry: './src/index.tsx',
  output: {
    filename: 'index.dist.js',
    path: resolve('public')
  },
  resolve: {
    alias,
    extensions: ['.js', '.jsx', '.ts', '.tsx']
  },
  module: {
    rules: [
      jsRules,
      {
        test: /\.(png|svg|jpg|gif)$/,
        use: [
          'file-loader'
        ]
      },
      {
        test: /\.pug$/,
        use: [
          'pug-loader'
        ]
      },
      {
        test: /\.(woff(2)?|ttf|eot)$/,
        use: [
          {
            loader: 'file-loader',
            options: {
              name: '[name].[ext]',
              outputPath: 'fonts/'
            }
          }
        ]
      }
    ]
  },
  plugins: [
    new CleanWebpackPlugin(),
    new HtmlWebpackPlugin({
      template: 'index.pug'
    }),
    new MiniCssExtractPlugin({
      filename: '[name].css'
    }),
    new webpack.DefinePlugin({
      WORK_LAYOUT: process.env.WORK_LAYOUT
    })
  ]
};

module.exports = config;
