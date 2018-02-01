'use strict';
const path = require('path');
const webpack = require('webpack');

const CLIENT_DIR = path.resolve(__dirname, 'src/client');
const PUBLIC_DIR = path.resolve(__dirname, 'public/bin');


module.exports = env => {

  const config = {
    entry: [
      'webpack-hot-middleware/client',
      'react-hot-loader/patch',
      './src/client/index.js',
    ],
    output: {
      path: PUBLIC_DIR,
      filename: 'app.bundle.js',
      publicPath: '/'
    },
    module: {
      rules: [
        {
          test: /\.jsx?$/,
          include: CLIENT_DIR,
          exclude: /(node_modules|bower_components)/,
          loader: 'babel-loader',
        },
        {
          test: /\.(png|svg|jpg|gif)$/,
          use: ['file-loader'],
        },
      ],
    },
    resolve: {
      modules: [
        'node_modules',
        CLIENT_DIR,
      ],
      extensions: ['.js', '.jsx'],
    },
    devtool: 'inline-source-map',
    plugins: [
      new webpack.HotModuleReplacementPlugin(),
    ],
  };

  // Below are additional configurations for production
  const UglifyJsPlugin = new webpack.optimize.UglifyJsPlugin({
    compress: {
      warnings: false,
    },
    output: {
      comments: false,
    },
  });

  const production = env.production;

  if(production) {
    config.plugins.push(UglifyJsPlugin)
    config.devtool = 'nosources-source-map';
  }

  return config;
};
