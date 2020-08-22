const path = require('path');
const { merge } = require('webpack-merge');
const common = require('./webpack.common');
const TerserPlugin = require('terser-webpack-plugin');
const ImageminPlugin = require('imagemin-webpack-plugin').default;
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const WebpackPwaManifest = require('webpack-pwa-manifest');
const OfflinePlugin = require('offline-plugin');
const config = require('./config.js');

module.exports = merge(common, {
  mode: 'production',
  module: {
    rules: [
      {
        test: /\.scss$/,
        use: [
          {
            loader: MiniCssExtractPlugin.loader,
          },
          {
            loader: 'css-loader',
            options: {
              modules: true,
            },
          },
          'postcss-loader',
          {
            loader: 'sass-loader',
          },
        ],
      },
    ],
  },
  plugins: [
    new MiniCssExtractPlugin({
      filename: '[name].bundle.css',
      chunkFilename: '[name].bundle.css',
    }),
    new ImageminPlugin({
      pngquant: {
        quality: '65-90',
      },
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
  ],
  optimization: {
    minimize: true,
    minimizer: [
      new TerserPlugin({
        extractComments: false,
        cache: true,
        parallel: true,
        sourceMap: true,
      }),
    ],
  },
});
