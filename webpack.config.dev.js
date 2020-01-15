const merge = require('webpack-merge')
const common = require('./webpack.config.common')
const path = require('path')

const ROOT_PATH = path.resolve(__dirname, 'dist')

module.exports = merge(common, {
  mode: 'development',
  output: {
    path: ROOT_PATH,
    filename: `[name].bundle.js`,
    chunkFilename: `[name].bundle.js`,
    publicPath: '/'
  },
  devServer: {
    contentBase: path.resolve(__dirname, 'dist'),
    hot: true,
    compress: true,
    port: 3000,
    open: true,
    historyApiFallback: true
  }
})
