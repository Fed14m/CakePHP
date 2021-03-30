const webpack = require('webpack')
const { merge } = require('webpack-merge')
const { CleanWebpackPlugin } = require('clean-webpack-plugin');

const common = require('./common.js')

const config = merge(
    common.config,
    {
      mode: 'production',
      plugins: [
        new webpack.DefinePlugin({
          __DEV__: JSON.stringify(false)
        }),
        new CleanWebpackPlugin()
      ]
    }
)

module.exports = config;