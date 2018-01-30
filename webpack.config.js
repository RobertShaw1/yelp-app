'use strict';
const path = require('path');

const CLIENT_DIR = path.resolve(__dirname, 'src/client');
const PUBLIC_DIR = path.resolve(__dirname, 'public');


module.exports = {
  entry: './src/client/index.js',
  output: {
    path: PUBLIC_DIR,
    filename: 'app.bundle.js',
  },
  devtool: 'inline-source-map',
  devServer: {
    contentBase: PUBLIC_DIR,
  },
  module: {
    rules: [{
      test: /\.jsx?$/,
      include: CLIENT_DIR,
      exclude: /(node_modules|bower_components)/,
      loader: 'babel-loader',
    }],
  },
  resolve: {
    modules: [
      'node_modules',
      CLIENT_DIR,
    ],
    extensions: ['.js', '.jsx'],
  },
};
