const path = require('path');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const StylelintPlugin = require('stylelint-webpack-plugin');
const WebpackPwaManifest = require('webpack-pwa-manifest');
const OfflinePlugin = require('offline-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const config = require('./config.js');

module.exports = {
  watchOptions: {
    aggregateTimeout: 300,
    poll: 1000,
  },
  entry: {
    polyfill: '@babel/polyfill',
    app: path.join(__dirname, 'src', 'index'),
  },
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: '[name].bundle.js',
    chunkFilename: '[name].bundle.js',
    publicPath: '/',
  },

  module: {
    rules: [
      {
        test: /\.js(x?)$/,
        use: [
          {
            loader: 'babel-loader',
          },
        ],
        exclude: /node_modules/,
      },
      {
        test: /\.svg$/,
        use: [
          {
            loader: 'babel-loader',
          },
          {
            loader: 'react-svg-loader',
          },
        ],
      },
      {
        test: /\.(png|jpg|gif|eot|ttf|woff|woff2)$/,
        use: [
          {
            loader: 'file-loader',
          },
        ],
      },
    ],
  },
  resolve: {
    extensions: ['.js', '.jsx', '.scss'],
  },
  plugins: [
    new CleanWebpackPlugin(),
    new StylelintPlugin({
      failOnError: false,
      configFile: path.resolve(__dirname, '.stylelintrc.json'),
      context: path.resolve(__dirname, 'src'),
      files: '**/*.scss',
      syntax: 'scss',
      quiet: false,
    }),
    new WebpackPwaManifest({
      name: config.pwa.name,
      short_name: config.pwa.short_name,
      description: config.pwa.description,
      background_color: config.pwa.background_color,
      theme_color: config.pwa.theme_color,
      start_url: '/',
      prefer_related_applications: false,
      orientation: 'portrait',
      display: 'standalone',
      crossorigin: 'use-credentials',
      fingerprints: false,
      publicPath: '/',
      icons: [
        {
          src: path.resolve(config.pwa.icon),
          sizes: [96, 128, 192, 256, 384, 512, 1024],
        },
      ],
    }),
    new OfflinePlugin({
      safeToUseOptionalCaches: true,
      caches: {
        main: ['index.html'],
        additional: ['*.js?*'],
      },
      navigateFallbackURL: '/',
      autoUpdate: true,
      responseStrategy: 'cache-first',
      ServiceWorker: {
        events: true,
      },
      AppCache: {
        events: true,
      },
    }),
    new HtmlWebpackPlugin({
      template: path.resolve(__dirname, './static/index.html'),
      inject: true,
    }),
  ],
};
