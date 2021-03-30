const webpack = require('webpack')
const {merge} = require('webpack-merge')
const HtmlWebpackPlugin = require('html-webpack-plugin');

const common = require('../common.js')

const config = merge(
    common.config,
    {
      mode: 'development',
      watchOptions: {
        ignored: /node_modules/,
        poll: true
      },
      plugins: [
        new webpack.DefinePlugin({
          __DEV__: JSON.stringify(true),
        }),
        new HtmlWebpackPlugin({
          title: 'BATS.rocks',
          inject: true,
          chunks: ['vendors', 'home'],
          chunksSortMode: 'manual',
          template: './react-scr/templates/home.html'
        })
      ]
    }
)

module.exports = config;