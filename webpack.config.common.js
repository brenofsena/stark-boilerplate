const path = require('path')
const WebpackCleanupPlugin = require('webpack-cleanup-plugin')
const FriendlyErrorsWebpackPlugin = require('friendly-errors-webpack-plugin')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const StylelintPlugin = require('stylelint-webpack-plugin')
const ImageminPlugin = require('imagemin-webpack-plugin').default
const WebpackPwaManifest = require('webpack-pwa-manifest')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const config = require('./config.js')

module.exports = {
  watchOptions: {
    aggregateTimeout: 300,
    poll: 1000
  },
  stats: {
    warnings: false
  },
  entry: {
    polyfill: '@babel/polyfill',
    app: path.join(__dirname, 'src/js', 'index'),
    components: path.join(__dirname, 'src/react', 'index')
  },
  module: {
    rules: [{
        enforce: 'pre',
        test: /\.js$/,
        use: [{
          loader: 'eslint-loader'
        }],
        exclude: /node_modules/
      },
      {
        test: /\.js$/,
        use: [{
          loader: 'babel-loader'
        }],
        exclude: /node_modules/
      },
      {
        test: /\.vue$/,
        loader: 'vue-loader'
      },
      {
        test: /\.svg$/,
        use: [{
            loader: 'babel-loader'
          },
          {
            loader: 'react-svg-loader'
          }
        ]
      },
      {
        test: /\.(png|jpg|gif|svg)$/,
        use: [{
          loader: 'file-loader',
          options: {
            name: 'images/[name].[ext]',
            useRelativePath: true
          }
        }]
      },
      {
        test: /\.(eot|ttf|woff|woff2)$/,
        use: [{
          loader: 'file-loader',
          options: {
            name: 'fonts/[name].[ext]',
            useRelativePath: true
          }
        }]
      },
      {
        test: /\.scss$/,
        use: [
          MiniCssExtractPlugin.loader,
          'css-loader?url=false',
          'postcss-loader',
          {
            loader: 'sass-loader',
          },
          {
            loader: 'sass-resources-loader',
            options: {
              resources: './src/sass/resources.scss'
            }
          }
        ]
      }
    ]
  },
  plugins: [
    new WebpackCleanupPlugin({
      cleanOnceBeforeBuildPatterns: ['dist', 'build'],
    }),
    new FriendlyErrorsWebpackPlugin(),
    new MiniCssExtractPlugin({
      filename: 'css/[name].bundle.css',
      chunkFilename: 'css/[name].bundle.css',
      ignoreOrder: true
    }),
    new ImageminPlugin({
      pngquant: {
        quality: '65-90'
      }
    }),
    new StylelintPlugin({
      failOnError: false,
      configFile: path.resolve(__dirname, '.stylelintrc'),
      context: path.resolve(__dirname, 'src/sass'),
      files: '**/*.scss',
      syntax: 'scss',
      failOnError: false,
      quiet: false,
    }),
    new WebpackPwaManifest({
      "name": config.pwa.name,
      "short_name": config.pwa.short_name,
      "description": config.pwa.description,
      "background_color": config.pwa.background_color,
      "theme_color": config.pwa.theme_color,
      "start_url": "/",
      "prefer_related_applications": false,
      "orientation": "portrait",
      "display": "standalone",
      crossorigin: 'use-credentials',
      fingerprints: false,
      publicPath: '/',
      icons: [{
        src: path.resolve(config.pwa.icon),
        sizes: [96, 128, 192, 256, 384, 512, 1024]
      }]
    }),
    new HtmlWebpackPlugin({
      template: './index.html',
      inject: true
    })
  ]
}
