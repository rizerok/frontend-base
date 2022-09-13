/* eslint @typescript-eslint/no-var-requires: "off" */
const { resolve } = require('path');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const webpack = require('webpack');

console.log('process.env.ROUTER_BASE', process.env.ROUTER_BASE);

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
        test: /\.(png|jpg|gif)$/,
        type: 'asset/resource'
      },
      {
        test: /\.svg$/i,
        type: 'asset',
        resourceQuery: /url/ // *.svg?url
      },
      {
        test: /\.pug$/,
        use: [
          'pug-loader'
        ]
      },
      {
        test: /\.(woff(2)?|ttf|eot)$/,
        type: 'asset/resource',
        generator: {
          filename: 'fonts/[name][ext][query]'
        }
      },
      {
        test: /\.svg$/i,
        issuer: /\.[jt]sx?$/,
        resourceQuery: { not: [/url/] }, // exclude react component if *.svg?url
        use: ['@svgr/webpack']
      },
    ]
  },
  plugins: [
    new CleanWebpackPlugin(),
    new HtmlWebpackPlugin({
      template: 'index.pug'
    }),
    new webpack.DefinePlugin({
      WORK_LAYOUT: process.env.WORK_LAYOUT,
      ROUTER_BASE: process.env.ROUTER_BASE
    })
  ]
};

module.exports = config;
