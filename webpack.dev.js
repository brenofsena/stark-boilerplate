const { merge } = require('webpack-merge');
const common = require('./webpack.common');
const path = require('path');
const dotenv = require('dotenv-webpack');

module.exports = merge(common, {
  mode: 'development',
  devtool: 'inline-source-map',
  devServer: {
    contentBase: path.resolve(__dirname, 'dist'),
    hot: true,
    compress: true,
    port: 3333,
    historyApiFallback: true,
    writeToDisk: true,
  },
  plugins: [new dotenv()],
});
